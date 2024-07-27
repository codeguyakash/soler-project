import React, { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const MaintanceStatus = () => {
  const [users, setUsers] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);

  let token = localStorage.getItem("accessToken");

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "/api/contact/api/contact/maintancestatus/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [token]);

  const handleApproval = async (userId, statusType, statusValue) => {
    try {
      await axios.put(
        `/api/contact/api/contact/maintancestatus/${userId}/`,
        {
          [statusType]: statusValue,
        },
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
    } catch (error) {
      console.error("Error updating the status:", error);
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Maintenance Status" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="bg-gray-100 p-5 md:py-20 md:px-10 relative bg-cover bg-no-repeat backdrop-blur-lg">
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
                  Request Status
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Technician Status
                </th>
                <th className="border border-gray-300 text-sm px-4 py-2">
                  Service Status
                </th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MaintanceStatus;
