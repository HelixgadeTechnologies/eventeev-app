import React from "react";
import Sidebar from "./Sidebar";
import search from "../assets/icon/Icon9.png";
import birthday from "../assets/icon/birthday.png";

const Events = () => {
  return (
    <div className="flex gap-[48px] bg-[#f0f2f5]">
      <Sidebar />
      <div className="mainPage ">
        <div className="searchBar w-[1168px] h-[64px] py-[12px] bg-[#ffffff]">
          <div className="flex bg-[#f0f2f5] py-[12px] ml-[36px] w-[629px] h-[40px] gap-[8px]">
            <span className="self-center">
              {" "}
              <img
                className="ml-[10px] "
                src={search}
                alt="The search icon"
              />{" "}
            </span>
            <input
              className="self-center bg-[#f0f2f5] w-[92px] h-[20px] border-none  placeholder:inter placeholder:text-slate-400  text-sm  "
              type="search"
              name=""
              id=""
              placeholder="Search teachings"
            />
          </div>
        </div>
        <div className="mainPageChild bg-[#ffffff] w-[1142px] h-[944px] mt-[16px] ">
          <div className="pt-[47px] pb-[63px] pl-[24px]">
            <p className="text-black text-[24px] font-bold h-[29px]">
              Welcome to GDG Port Harcourt
            </p>
            <p className="text-[14px] text-[#667185]">
              control your profile setup and integrations
            </p>
          </div>
          <hr className=" bg-[#F0F2F5]" />

          <div className="flex flex-col items-center">
            <span className="mt-[151px] mb-[29px]">
              <img src={birthday} alt="" />
            </span>
            <span className="text-black mb-[8px] h-[48px] flex flex-col">
              <h5> You currently have no event </h5>
              <h5>listed here</h5>
            </span>
            <p>
              You will see lists of events that you have created or invited to
            </p>
            <button className="bg-[#eb5017] text-[16px] w-[236px] h-[55px] mt-[47px] text-white font-semi-bold ">
              create your first event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
