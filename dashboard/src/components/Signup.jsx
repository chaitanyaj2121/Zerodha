import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]); // ✅ Add setCookie
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      handleError("All fields are required");
      return;
    }

    if (password.length < 6) {
      handleError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        { email, password, username },
        { withCredentials: true }
      );

      console.log("Signup response:", data);

      const { success, message, token } = data;

      if (success) {
        // ✅ Manually set cookie on frontend as backup
        if (token) {
          setCookie("token", token, {
            path: "/",
            maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
            sameSite: "lax",
          });
          console.log("✅ Token saved to cookie:", token);
        }

        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      handleError(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
            minLength={6}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Submit"}
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
