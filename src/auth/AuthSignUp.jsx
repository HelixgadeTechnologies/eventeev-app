/** @format */

import React, { useState } from "react";
import style from "./style/AuthSignUp.module.css";
import { Link } from "react-router-dom";
import google from "../assets/icon/google_icon.svg";
import axios from "axios";
import { Eye, EyeOff } from "react-feather";

function AuthSignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/; // Allows only letters
    return nameRegex.test(name);
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

    if (!firstName.trim()) {
      setFirstNameError("First name is required");
      isValid = false;
    } else if (!validateName(firstName)) {
      setFirstNameError("First name can only contain letters");
      isValid = false;
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required");
      isValid = false;
    } else if (!validateName(lastName)) {
      setLastNameError("Last name can only contain letters");
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
        `${process.env.REACT_APP_API_URL}/auth/organization/register`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          url: "https://domain.com/auth/register",
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      setError(error.response ? error.response.data.message : "Sign Up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-row justify-center `}>
      <div className={`${style.authCard} flex flex-col px-8`}>
        <h1 className="mb-6">Elevate your Event workflow with Eventeev</h1>
        <h6>
          Our comprehensive Event platform offers you an unparalleled range of
          event component, sparking creativity and boosting efficiency.
        </h6>
      </div>
      <div className={`${style.formCard} flex flex-col px-14`}>
        <form onSubmit={handleSubmit} className={`w-full`}>
          <div className="mb-6 text-left">
            <h3>Sign up!</h3>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="mb-4"
              style={{
                width: "48%",
              }}>
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && (
                <span style={{ color: "red" }}>{firstNameError}</span>
              )}
            </div>
            <div
              className="mb-4"
              style={{
                width: "48%",
              }}>
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && (
                <span style={{ color: "red" }}>{lastNameError}</span>
              )}
            </div>
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
                onClick={() => setPasswordVisible(!passwordVisible)}
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
          <div className="mb-4">
            <button type="submit" className="button_primary" disabled={loading}>
              {loading ? "Signing Up..." : " Sign Up"}
            </button>
          </div>
          <div className={`mb-4 m-auto text-center`}>
            <span>
              Already have an account?
              <Link to={"/auth/sign-in"} className={`${style.link} ml-1`}>
                Sign In
              </Link>
            </span>
          </div>
          <div className="flex flex-row items-center mb-4">
            <hr width={"46%"} className="mr-2" />
            <p>OR</p>
            <hr width={"46%"} className="ml-2" />
          </div>
          <div className="mb-4">
            <button type="button" className="button_primary_light">
              <img src={google} alt="google icon" className="mr-2" />
              Continue with Google
            </button>
          </div>

          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default AuthSignUp;
