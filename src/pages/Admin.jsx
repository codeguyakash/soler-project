import React, { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { getCookie } from "../utils/cookieUtils";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const isCookie = getCookie("csrftoken");
    if (!isCookie == null) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/contact/status/");
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleApproval = async (userId, statusType, statusValue) => {
    try {
      await axios.post(`/api/registrations/${userId}/status`, {
        statusType,
        statusValue,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, [statusType]: statusValue } : user
        )
      );
    } catch (error) {
      console.error("There was an error updating the status!", error);
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
                      handleApproval(user.id, "order_status", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.site_survey_status}
                    onChange={(e) =>
                      handleApproval(
                        user.id,
                        "site_survey_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.installation_status}
                    onChange={(e) =>
                      handleApproval(
                        user.id,
                        "installation_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    value={user.grid_connectivity_status}
                    onChange={(e) =>
                      handleApproval(
                        user.id,
                        "grid_connectivity_status",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
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
