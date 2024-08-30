/** @format */

import React from "react";
import EventSidebar from "./EventSidebar";
import Event from "./Event";

function EventLayout() {
  return (
    <div className="flex w-full">
      <EventSidebar />
      <Event />
    </div>
  );
}

export default EventLayout;
