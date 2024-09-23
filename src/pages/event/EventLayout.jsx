/** @format */

import React from "react";
import EventHeader from "./EventHeader";
import Event from "./Event";

function EventLayout() {
  return (
    <div
      style={{ overflowY: "auto" }}
      className={`w-[100%] h-[100vh] bg-[#F0F2F5]`}>
      <EventHeader />
      <Event />
    </div>
  );
}

export default EventLayout;
