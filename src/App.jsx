/** @format */

import "./App.css";

import { Route, Routes } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import EventRoute from "./routes/EventRoute";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoute />} />
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/event/*" element={<EventRoute />} />
    </Routes>
  );
}

export default App;
