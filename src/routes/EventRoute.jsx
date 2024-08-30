/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventLayout from "../pages/event/EventLayout";

function EventRoute() {
  return (
    <Routes>
      <Route path="dashboard" element={<EventLayout />} />
      <Route path="" element={<Navigate to={"/event/dashboard"} replace />} />
    </Routes>
  );
}

export default EventRoute;
