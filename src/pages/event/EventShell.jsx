/** @format */

import React from "react";
import EventSidebar from "./EventSidebar";
import EventLayout from "./EventLayout";

function EventShell() {
  return (
    <div className="flex w-full">
      <EventSidebar />
      <EventLayout />
    </div>
  );
}

export default EventShell;
