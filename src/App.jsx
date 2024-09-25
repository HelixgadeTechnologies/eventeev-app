/** @format */

import "./App.css";

import { Route, Routes } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import EventRoute from "./routes/EventRoute";
import TicketingRoute from "./routes/TicketingRoute";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<EventRoute />} />
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/event/*" element={<EventRoute />} />
      <Route path="/ticketing/*" element={<TicketingRoute />} />
    </Routes>
  );
}

export default App;
