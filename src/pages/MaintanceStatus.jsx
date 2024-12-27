import { useEffect, useState, useCallback } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import Loader from "../components/Loader";
import ShowMessage from "../components/ShowMessage";
import PROD_BASE_URL from "../config/config";

const BASE_URL = PROD_BASE_URL || "http://13.201.119.28:5001";

const MaintanceStatus = () => {
  const [users, setUsers] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("accessToken");

  const showSideNavHandler = () => {
    setShowSideNav((prev) => !prev);
  };

  const fetchData = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setMessage("");
    try {
      const res = await axios.get(
        `${BASE_URL}/api/contact/api/contact/maintancestatus/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(res.data);
      if (res.data.length === 0) {
        setMessage("No User Found");
      }
    } catch (error) {
      setMessage("Failed to fetch data: " + error.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleApproval = useCallback(
    async (userId, statusType, statusValue) => {
      if (!token) return;
      setIsLoading(true);
      setMessage("");
      try {
        await axios.put(
          `${BASE_URL}/api/contact/api/contact/maintancestatus/${userId}/`,
          { [statusType]: statusValue },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.solar_inquiry_id === userId
              ? { ...user, [statusType]: statusValue }
              : user
          )
        );
        setMessage("Status updated successfully");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (error) {
        setMessage("Error updating the status: " + error.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } finally {
        setIsLoading(false);
      }
    },
    [token]
  );

  const deleteUserHandler = useCallback(
    async (userId) => {
      if (!token) return;
      setIsLoading(true);
      setMessage("");
      try {
        await axios.delete(
          `${BASE_URL}/api/contact/api/contact/maintancestatus/${userId}/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.solar_inquiry_id !== userId)
        );
        setMessage("Deleted successfully");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (error) {
        setMessage("Failed to delete user: " + error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [token]
  );

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Maintenance Status" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="relative bg-gray-100 p-5 md:py-20 md:px-10">
        {isLoading && <Loader />}

        <div className="overflow-x-auto relative">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Name
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Pincode
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Comment
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Email
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Request Status
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Technician Status
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Service Status
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user.solar_inquiry_id}>
                    <td className="border text-sm border-gray-300 p-2">
                      {user.name}
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      {user.pincode}
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      {user.comment}
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      {user.email}
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      <select
                        value={user.request_status}
                        onChange={(e) =>
                          handleApproval(
                            user.solar_inquiry_id,
                            "request_status",
                            e.target.value
                          )
                        }
                        className="w-full p-2 text-sm border rounded"
                      >
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      <select
                        value={user.Technician_status}
                        onChange={(e) =>
                          handleApproval(
                            user.solar_inquiry_id,
                            "Technician_status",
                            e.target.value
                          )
                        }
                        className="w-full p-2 text-sm border rounded"
                      >
                        <option value="Assigned">Assigned</option>
                        <option value="Not Assigned">Not Assigned</option>
                      </select>
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      <select
                        value={user.service_status}
                        onChange={(e) =>
                          handleApproval(
                            user.solar_inquiry_id,
                            "service_status",
                            e.target.value
                          )
                        }
                        className="w-full p-2 text-sm border rounded"
                      >
                        <option value="Not complete">Not Complete</option>
                        <option value="Complete">Complete</option>
                      </select>
                    </td>
                    <td className="border text-sm border-gray-300 p-2">
                      <IoTrashOutline
                        className="mx-auto cursor-pointer"
                        onClick={() => deleteUserHandler(user.solar_inquiry_id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <ShowMessage message={message} className="text-black" />
        </div>
      </section>
    </>
  );
};

export default MaintanceStatus;
