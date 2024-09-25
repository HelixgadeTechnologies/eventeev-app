import React from "react";
import SidebarTicketing from "./SidebarTicketing";
import HeaderTicketing from "./HeaderTicketing";
import TicketingDashboard from "./TicketingDashboard";
import "./style/Ticketing.module.css";
import "./style/SidebarTicketing.module.css";

const Ticketing = () => {
  return (
    <div className="flex justify-between">
      <SidebarTicketing />
      <div>
        <HeaderTicketing />
        <TicketingDashboard />
      </div>
    </div>
  );
};

export default Ticketing;
