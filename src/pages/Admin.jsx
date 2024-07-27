import React, { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const navigate = useNavigate();
  let token = localStorage.getItem("accessToken");

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/contact/status/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
        `/api/contact/status/${userId}/`,
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
      <Banner title="Registration Approvals" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="bg-gray-100 p-5 md:py-20 md:px-10 relative bg-cover bg-no-repeat backdrop-blur-lg">
        <table className="w-full md:w-[80vw] mx-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Pincode</th>
              <th className="border border-gray-300 px-4 py-2">Comment</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Order Status</th>
              <th className="border border-gray-300 px-4 py-2">
                Site Survey Status
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Installation Status
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Grid Connectivity Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.pincode}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.comment}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.order_status}
                    onChange={(e) =>
                      handleApproval(
                        user.solar_inquiry_id,
                        "order_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.site_survey_status}
                    onChange={(e) =>
                      handleApproval(
                        user.solar_inquiry_id,
                        "site_survey_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.installation_status}
                    onChange={(e) =>
                      handleApproval(
                        user.solar_inquiry_id,
                        "installation_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.grid_connectivity_status}
                    onChange={(e) =>
                      handleApproval(
                        user.solar_inquiry_id,
                        "grid_connectivity_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
