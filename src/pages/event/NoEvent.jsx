/** @format */

import React from "react";
import birthday from "../../assets/icon/birthday.png";
import { Link } from "react-router-dom";

function NoEvent() {
  return (
    <div className={`w-[100%] h-[90vh] p-4`}>
      <div className={`mainPage m-4 rounded h-[85vh] bg-[#ffffff]`}>
        <div className="p-6">
          <div className="mb-6">
            <h5>Welcome to GDG Port Harcourt</h5>
            <span className="text-[#667185]">
              Control your profile setup and integrations
            </span>
          </div>
          <hr className="bg-[#F0F2F5]" />
          <div className="flex flex-col items-center min-h-[60vh]">
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

            <Link to="/event/dashboard/create-event">
              <button className="button_primary w-[236px]">
                create your first event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoEvent;
