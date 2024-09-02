/** @format */

import React from "react";
import EventHeader from "./EventHeader";
// import Event from "./Event";
import EventStepperLayout from "./EventStepperLayout";

function EventLayout() {
  return (
    <div className={`w-[80%] h-[100vh]  bg-[#F0F2F5]`}>
      <EventHeader />
      {/* <Event /> */}
      <EventStepperLayout />
    </div>
  );
}

export default EventLayout;
