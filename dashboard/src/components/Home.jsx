import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        if (!cookies?.token) {
          navigate("/login");
          return;
        }

        const response = await axios.post(
          "http://localhost:3000/vrfy",
          {},
          { withCredentials: true }
        );

        const data = response.data;

        if (data?.status) {
          setUsername(data.user || "");
          // ✅ Only show welcome toast on first load
          if (sessionStorage.getItem("welcomeShown") !== "true") {
            toast.success(`Welcome back, ${data.user}!`, {
              position: "top-right",
              autoClose: 2000,
            });
            sessionStorage.setItem("welcomeShown", "true");
          }
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification failed:", error.message);
        removeCookie("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    sessionStorage.removeItem("welcomeShown"); // ✅ Clear session storage
    toast.info("Logged out successfully!", {
      position: "top-right",
      autoClose: 1500,
    });
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <TopBar username={username} onLogout={Logout} />
      <div className="home_page">
        <Dashboard />
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
