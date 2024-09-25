import React from "react";
import search from "../assets/icon/Icon9.png";
import misc from "../assets/icon/Misc icon.svg";
import user from "../assets/icon/user.svg";
const HeaderTicketing = () => {
  return (
    <div className="searchBar w-[80%] h-[10vh] bg-[#ffffff] flex justify-between py-3 px-9">
      <div className="flex bg-[#f0f2f5] py-[12px] ml-[36px] w-[629px] h-[40px] gap-[8px]">
        <span className="self-center">
          <img className="ml-[10px] " src={search} alt="The search icon" />
        </span>
        <input
          className="self-center bg-[#f0f2f5] w-[92px] h-[20px] border-none  placeholder:inter placeholder:text-slate-400 text-sm  "
          type="search"
          placeholder="Search teachings"
        />
      </div>
      <div className="flex gap-3">
        <button>
          {" "}
          <img src={misc} alt="" />{" "}
        </button>
        <button>
          {" "}
          <img src={user} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default HeaderTicketing;
