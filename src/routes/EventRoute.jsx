/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventShell from "../pages/event/EventShell";
import NoEvent from "../pages/event/NoEvent";
import EventStepperLayout from "../pages/event/EventStepperLayout";

function EventRoute() {
  return (
    <Routes>
      <Route path="dashboard" element={<EventShell />}>
        <Route path="" element={<NoEvent />} />
        <Route path="create-event" element={<EventStepperLayout />} />
      </Route>

      <Route path="" element={<Navigate to={"/event/dashboard"} replace />} />
    </Routes>
  );
}

export default EventRoute;
