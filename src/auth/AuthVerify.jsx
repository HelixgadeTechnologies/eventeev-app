/** @format */

import React, { useState, useEffect } from "react";
import { Loader } from "react-feather";
import { useLocation } from "react-router-dom";
import style from "./style/AuthVerify.module.css";
import { Link } from "react-router-dom";

function AuthVerify() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = `${process.env.REACT_APP_API_URL}/auth/organization/verify-email`;

    fetch(apiUrl, {
      email: location.pathname.split("/")[3],
      code: location.pathname.split("/")[4],
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [location.pathname]);

  return (
    <div
      className={`flex flex-col justify-center items-center ${style.AuthVerifyCard}`}>
      {loading ? (
        <div
          className={`flex flex-row justify-center h-screen ${style.AuthVerifyCard}`}>
          <div className="spinner w-full">
            <Loader size={60} className="loader-icon" />
          </div>
        </div>
      ) : (
        <div className={`${style.card}`}>
          <div className="mb-8 text-center">
            <h3>Verified</h3>
            <span>You have successfully verified your account</span>
          </div>

          <div className="mb-4">
            <Link to={"/"}>
              <button type="submit" className="button_primary">
                Proceed to dashboard
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthVerify;
