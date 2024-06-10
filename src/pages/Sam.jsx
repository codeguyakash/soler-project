import React, { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./../components/Footer";

const Sam = () => {
  const [users, setUsers] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    // Fetch the user data from the API
    // axios
    //   .get("/api/registrations")
    //   .then((response) => {
    //     setUsers(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error fetching the data!", error);
    //     setLoading(false);
    //   });
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const dummyData = [
        { id: 1, name: "John Doe", email: "john@example.com", approved: false },
        { id: 2, name: "Jane Doe", email: "jane@example.com", approved: true },
        {
          id: 3,
          name: "Alice Smith",
          email: "alice@example.com",
          approved: true,
        },
        {
          id: 4,
          name: "Akash Smith",
          email: "akash@example.com",
          approved: false,
        },
      ];

      setUsers(dummyData);
    };
    fetchData();
  }, []);

  const handleApproval = (userId, approved) => {
    axios
      .post(`/api/registrations/${userId}/approve`, { approved })
      .then((response) => {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, approved } : user
          )
        );
      })
      .catch((error) => {
        console.error("There was an error updating the status!", error);
      });
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="ooo Approvals" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 p-5 md:py-20 md:px-10 relative bg-cover bg-no-repeat backdrop-blur-lg"
        // style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <table className="w-full md:w-[80vw] mx-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Approved</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.approved ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {!user.approved && (
                    <button
                      className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleApproval(user.id, true)}
                    >
                      Approve
                    </button>
                  )}
                  {user.approved && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleApproval(user.id, false)}
                    >
                      Reject
                    </button>
                  )}
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

export default Sam;
