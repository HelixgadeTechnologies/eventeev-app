import React from "react";
import { Link } from "react-router-dom";
import Avatars from "../assets/icon/Avatars.png";
import icon from "../assets/icon/icon.png";
import iconTwo from "../assets/icon/iconTwo.png";
import iconThree from "../assets/icon/iconThree.png";
import iconFour from "../assets/icon/iconFour.png";
import icon6 from "../assets/icon/icon6.png";
import icon7 from "../assets/icon/icon7.png";
import icon8 from "../assets/icon/icon8.png";
import paypal from "../assets/icon/paypal.png";
import vector from "../assets/icon/Vector.png";
import googleD from "../assets/icon/g-drive.png";

const Sidebar = () => {
  return (
    <div className="w-[272px] h-[1024px] text-[#344054] bg-white flex flex-col justify-between px-[16px] ">
      <div className="sidebar__container-one flex flex-col gap-[12px] ">
        <span className="h-[56px] gap-[12px] flex">
          <img src={vector} className="w-[21px] h-[21px] self-center" alt="" />
          <h5 className="self-center text-[#101928]">rayna ui</h5>
        </span>

        <Link to={"/events"}>
          <p className="flex gap-[12px] px-[16px] py-[12px] hover:bg-[#ffece5]">
            <span className="">
              <img src={icon} alt="" />
            </span>
            <span>Home</span>
          </p>
        </Link>
        <p className="flex gap-[12px] px-[16px] py-[12px]">
          <span>
            <img src={iconTwo} alt="" />
          </span>
          <span>Profile</span>
        </p>
        <p className="flex gap-[12px] mb-[12px] px-[16px] py-[12px]">
          <span>
            <img src={iconThree} alt="" />
          </span>
          <span>Analytics</span>
        </p>

        <hr className="w-[256px] h-[1px] bg-[#F0F2F5]" />

        <p className="mt-[12px] mb-[24px]">integrations</p>
        <p className="flex gap-[12px] px-[16px] py-[12px]">
          <span>
            <img src={googleD} alt="" />
          </span>
          <span>Google Drive</span>
        </p>
        <p className="flex gap-[12px] px-[16px] py-[12px]">
          <span>
            <img src={paypal} alt="" />
          </span>
          <span>Paypal</span>
        </p>
      </div>

      <div className="sidebar__container-two mb-[24px] h-[234px] flex flex-col gap-[12px] mr-[22px]">
        <p className="flex gap-[12px] px-[16px] py-[12px]">
          <span>
            <img src={iconFour} alt="" />
          </span>
          <span>Settings</span>
        </p>
        <p className="flex gap-[12px] px-[16px] py-[12px]">
          <span>
            <img src={icon6} alt="" />
          </span>
          <span>Help Center</span>
        </p>
        <p className="flex gap-[12px] px-[16px] py-[12px]">
          <span>
            <img src={icon7} alt="" />
          </span>
          <span>Refer family and friends</span>
        </p>
        <p className="flex px-[16px] py-[12px] justify-between items-center gap-[12px]  ">
          <span>
            <img src={Avatars} alt="" />{" "}
          </span>
          <span className="flex flex-col  ">
            <span>Richard Edem</span>
            <span>Richard@gmail.com</span>
          </span>
          <span>
            <img src={icon8} alt="" />{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
