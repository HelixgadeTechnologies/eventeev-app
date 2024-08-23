/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "react-feather";
import { useLocation } from "react-router-dom";
import logo from "../assets/icon/rayna_logo_2.svg";

function AuthResetPassword() {
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [comFirmVisible, setComFirmVisible] = useState(false);

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/organization/reset-password`,
        {
          email: location.pathname.split("/")[3],
          code: location.pathname.split("/")[4],
          password: password,
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Reset Password failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <div className="mb-4">
        <img src={logo} alt="rayna_logo" />
      </div>
      <div className={`w-100 flex flex-col px-14`}>
        <form onSubmit={handleSubmit} className={`w-full`}>
          <div className="mb-6 text-center">
            <h3>Create New Password</h3>
            <span>One more step to go and you are back into your account.</span>
          </div>
          <div className="mb-4">
            <label htmlFor="Create new password">Create new password</label>
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
            <label htmlFor="Password">Password</label>
            <div className="relative">
              <input
                type={comFirmVisible ? "text" : "password"}
                placeholder="Enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                onClick={() => setComFirmVisible(!comFirmVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}>
                {comFirmVisible ? <Eye width={20} /> : <EyeOff width={20} />}
              </div>
            </div>
            {confirmPasswordError && (
              <span style={{ color: "red" }}>{confirmPasswordError}</span>
            )}
          </div>
          <div className="mb-4">
            <button type="submit" className="button_primary" disabled={loading}>
              {loading ? "Reset Password..." : " Reset Password"}
            </button>
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default AuthResetPassword;
