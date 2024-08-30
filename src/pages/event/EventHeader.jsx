/** @format */

import React from "react";
import search from "../../assets/icon/Icon9.png";

function EventHeader() {
  return (
    <div className="searchBar w-[100%] h-[10vh] py-[12px] bg-[#ffffff]">
      <div className="flex bg-[#f0f2f5] py-[12px] ml-[36px] w-[629px] h-[40px] gap-[8px]">
        <span className="self-center">
          <img className="ml-[10px] " src={search} alt="The search icon" />
        </span>
        <input
          className="self-center bg-[#f0f2f5] w-[92px] h-[20px] border-none  placeholder:inter placeholder:text-slate-400 text-sm  "
          type="search"
          name=""
          id=""
          placeholder="Search teachings"
        />
      </div>
    </div>
  );
}

export default EventHeader;
