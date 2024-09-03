/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventShell from "../pages/event/EventShell";

function EventRoute() {
  return (
    <Routes>
      <Route path="dashboard" element={<EventShell />} />
      <Route path="" element={<Navigate to={"/event/dashboard"} replace />} />
    </Routes>
  );
}

export default EventRoute;
