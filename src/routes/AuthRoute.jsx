/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "../auth/AuthLogin";
import AuthSignUp from "../auth/AuthSignUp";
import AuthForgotPassword from "../auth/AuthForgotPassword";
import AuthResetPassword from "../auth/AuthResetPassword";
import AuthVerify from "../auth/AuthVerify";
import AuthOrgLogin from "../auth/AuthOrgLogin";

function AuthRoute() {
  return (
    <Routes>
      <Route path="sign-in" element={<AuthLogin />} />
      <Route path="sign-up" element={<AuthSignUp />} />
      <Route path="forgot-password" element={<AuthForgotPassword />} />
      <Route
        path="reset-password/:email/:token"
        element={<AuthResetPassword />}
      />
      <Route path="verify/:email/:token" element={<AuthVerify />} />
      <Route path="organization-sign-up" element={<AuthOrgLogin />} />
      <Route path="" element={<Navigate to={"/auth/sign-in"} replace />} />
    </Routes>
  );
}

export default AuthRoute;
