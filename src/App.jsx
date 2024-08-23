/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoute />} />
      <Route path="/auth/*" element={<AuthRoute />} />
    </Routes>
  );
}

export default App;
