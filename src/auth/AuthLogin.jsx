/** @format */

import React, { useState } from "react";
import style from "./style/AuthLogin.module.css";
import logo from "../assets/icon/rayna_logo.svg";
import { Link } from "react-router-dom";
import google from "../assets/icon/google_icon.svg";
import axios from "axios";
import { Eye, EyeOff } from "react-feather";

function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/organization/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      setError(error.response ? error.response.data.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col justify-center ${style.authCard}`}>
      <div className={`mb-4 w-full `}>
        <img src={logo} alt="rayna_logo" className="m-auto" />
      </div>
      <div className="w-full">
        <div className={`${style.card} m-auto mb-6`}>
          <form onSubmit={handleSubmit} className={`w-full`}>
            <div className="mb-6 text-center">
              <h3>Sign In</h3>
              <span>Enter your credentials to access your account</span>
            </div>
            <div className="mb-4">
              <button type="button" className="button_primary_light">
                <img src={google} alt="google icon" className="mr-2" />
                Continue with Google
              </button>
            </div>
            <div className="flex flex-row items-center">
              <hr width={"46%"} className="mr-2" />
              <p>OR</p>
              <hr width={"46%"} className="ml-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="Email Address">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="Password">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility state
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}>
                  {passwordVisible ? <Eye width={20} /> : <EyeOff width={20} />}
                </div>
              </div>
              {passwordError && (
                <span style={{ color: "red" }}>{passwordError}</span>
              )}
            </div>
            <div className="mb-4 flex flex-row w-full">
              <div className="w-3/5">
                <input type="checkbox" />
                <label htmlFor="Remember">Remember me for 30 days</label>
              </div>
              <div className="text-right w-2/5">
                <Link to={"/auth/forgot-password"} className={style.link}>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="button_primary"
                disabled={loading}>
                {loading ? "Signing In..." : " Sign In"}
              </button>
            </div>

            {error && <span style={{ color: "red" }}>{error}</span>}
          </form>
        </div>

        <div className={`${style.question} mb-4 m-auto`}>
          <span>
            Don’t have an account?
            <Link to={"/auth/sign-up"} className={`${style.link} ml-1`}>
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;
