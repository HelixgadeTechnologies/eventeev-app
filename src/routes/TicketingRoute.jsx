import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Ticketing from "../ticketing/Ticketing";

const TicketingRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Ticketing />} />

      <Route path="" element={<Navigate to={"/ticketing"} replace />} />
    </Routes>
  );
};

export default TicketingRoute;
