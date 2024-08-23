/** @format */

import React, { useState } from "react";
import style from "./style/AuthForgotPassword.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import mail from "../assets/icon/mail.svg";

function AuthForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    setEmailError("");

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/organization/forgot-password`,
        {
          email,
          url: "https://domain.com/auth/reset-password",
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Forgot Password failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-row justify-center `}>
      <div className={`${style.authCard} flex flex-col px-8`}></div>
      <div className={`${style.formCard} flex flex-col px-16`}>
        <form onSubmit={handleSubmit} className={`w-full`}>
          <div className="mb-6 text-left">
            <h3>Password Reset!</h3>
            <span>Don’t worry it happens to the best of us 🔐</span>
          </div>
          <div className="mb-4">
            <label htmlFor="Email Address">Email Address</label>
            <div
              className="relative flex flex-row items-center"
              style={{
                border: "1px solid #FA9874",
                borderRadius: "6px",
                padding: "0px 16px",
              }}>
              <div>
                <img src={mail} alt="mail icon" />
              </div>
              <input
                style={{ border: "none" }}
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
          </div>
          <div className="mb-4">
            <button type="submit" className="button_primary" disabled={loading}>
              {loading ? "Sending Link..." : " Send Link"}
            </button>
          </div>
          <div className={`mb-4 m-auto text-left`}>
            <span>
              Remember your password?
              <Link to={"/auth/sign-in"} className={`${style.link} ml-1`}>
                Sign In
              </Link>
            </span>
          </div>

          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default AuthForgotPassword;
