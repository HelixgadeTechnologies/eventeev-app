/** @format */

import React from "react";
import birthday from "../../assets/icon/birthday.png";
import EventHeader from "./EventHeader";
import style from "./style/Event.module.css";

function Event() {
  return (
    <div className={`${style.scroll} w-[80%] h-[100vh]  bg-[#F0F2F5]`}>
      <EventHeader />
      <div className={`mainPage m-4 rounded h-[85vh] bg-[#ffffff]`}>
        <div className="p-6">
          <div className="mb-6">
            <h5>Welcome to GDG Port Harcourt</h5>
            <span className="text-[#667185]">
              Control your profile setup and integrations
            </span>
          </div>
          <hr className="bg-[#F0F2F5]" />
          <div className="flex flex-col items-center h-[60vh]">
            <div className="mt-[151px] mb-[29px]">
              <img src={birthday} alt="" />
            </div>
            <div className="text-center mb-[16px]">
              <h5>You currently have no event </h5>
              <h5>listed here</h5>

              <p className="mb-4">
                You will see lists of events that you have created or invited to
              </p>
            </div>

            <button className="button_primary w-[236px]">
              create your first event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
