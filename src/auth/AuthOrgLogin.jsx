/** @format */
import React, { useState } from "react";
import style from "./style/AuthOrgLogin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function AuthOrgLogin() {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [industryError, setIndustryError] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/; // Allows only letters
    return nameRegex.test(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else if (!validateName(name)) {
      setNameError("Name can only contain letters");
      isValid = false;
    }

    if (!website.trim()) {
      setWebsiteError("Website is required");
      isValid = false;
    } else if (!validateName(website)) {
      setWebsiteError("Website can only contain letters");
      isValid = false;
    }

    if (!industry.trim()) {
      setIndustryError("Industry is required");
      isValid = false;
    } else if (!validateName(website)) {
      setIndustryError("Industry can only contain letters");
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
          first_name: name,
          last_name: website,
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
      setError(error.response ? error.response.data.message : "Sign Up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-row justify-center `}>
      <div className={`${style.authCard} flex flex-col px-8`}></div>
      <div className={`${style.formCard} flex flex-col px-14`}>
        <form onSubmit={handleSubmit} className={`w-full`}>
          <div className="mb-6 text-left">
            <h3>Organization details!</h3>
            <span>Please tell us about your organization</span>
          </div>
          <div className="mb-4">
            <label htmlFor="Organization Name">Organization Name</label>
            <input
              type="text"
              placeholder="Enter Organization Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span style={{ color: "red" }}>{nameError}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="Organization Website">Organization Website</label>
            <input
              type="text"
              placeholder="Enter Organization Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            {websiteError && (
              <span style={{ color: "red" }}>{websiteError}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Organization  Industry">
              Organization Industry
            </label>
            <input
              type="text"
              placeholder="Enter Organization  Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
            {industryError && (
              <span style={{ color: "red" }}>{industryError}</span>
            )}
          </div>
          <div className="mb-4">
            <button type="submit" className="button_primary" disabled={loading}>
              {loading ? "Proceed..." : "Proceed"}
            </button>
          </div>
          <div className={`mb-4 m-auto text-center`}>
            <span>
              Back to
              <Link to={"/auth/sign-up"} className={`${style.link} ml-1`}>
                Registration
              </Link>
            </span>
          </div>

          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default AuthOrgLogin;
