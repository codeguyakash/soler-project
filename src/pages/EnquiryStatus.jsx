import { useEffect, useState, useCallback } from "react";
import { IoTrashOutline } from "react-icons/io5";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import axios from "axios";
import Loader from "../components/Loader";
import ShowMessage from "../components/ShowMessage";

const EnquiryStatus = () => {
  const [users, setUsers] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("accessToken");

  const showSideNavHandler = () => {
    setShowSideNav((prev) => !prev);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setMessage("");
    try {
      const res = await axios.get("/api/contact/status/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
      if (res.data.length === 0) {
        setMessage("No Users Found");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setMessage("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleApproval = async (userId, statusType, statusValue) => {
    setIsLoading(true);
    try {
      await axios.put(
        `/api/contact/status/${userId}/`,
        { [statusType]: statusValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.solar_inquiry_id === userId
            ? { ...user, [statusType]: statusValue }
            : user
        )
      );
      setIsLoading(false);
      setMessage("Status updated successfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error updating the status:", error);
      setMessage("Failed to update status. Please try again.");
    }
  };

  const deleteUserHandler = async (userId) => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/contact/status/${userId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.solar_inquiry_id !== userId)
      );
      setIsLoading(false);
      setMessage("Delete successfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Failed to delete user:", error);
      setMessage("Failed to delete user. Please try again.");
    }
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Enquiry Status" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="bg-gray-100 p-5 md:py-20 md:px-10 relative bg-cover bg-no-repeat backdrop-blur-lg">
        {isLoading && <Loader />}

        <div className="overflow-x-auto">
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
                  Address
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Email
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Order Status
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Site Survey Status
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Installation Status
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Grid Connectivity Status
                </th>
                <th className="border border-gray-300 px-4 py-2">Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
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
                    {user.address}
                  </td>
                  <td className="border text-sm border-gray-300 p-2">
                    {user.email}
                  </td>
                  <td className="border text-sm border-gray-300 p-2">
                    <select
                      value={user.order_status}
                      onChange={(e) =>
                        handleApproval(
                          user.solar_inquiry_id,
                          "order_status",
                          e.target.value
                        )
                      }
                      className="w-full p-2 text-sm border rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="incomplete">Incomplete</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={user.site_survey_status}
                      onChange={(e) =>
                        handleApproval(
                          user.solar_inquiry_id,
                          "site_survey_status",
                          e.target.value
                        )
                      }
                      className="w-full p-2 text-sm border rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="incomplete">Incomplete</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={user.installation_status}
                      onChange={(e) =>
                        handleApproval(
                          user.solar_inquiry_id,
                          "installation_status",
                          e.target.value
                        )
                      }
                      className="w-full p-2 text-sm border rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="incomplete">Incomplete</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={user.grid_connectivity_status}
                      onChange={(e) =>
                        handleApproval(
                          user.solar_inquiry_id,
                          "grid_connectivity_status",
                          e.target.value
                        )
                      }
                      className="w-full p-2 text-sm border rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="incomplete">Incomplete</option>
                      <option value="completed">Completed</option>
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

export default EnquiryStatus;
