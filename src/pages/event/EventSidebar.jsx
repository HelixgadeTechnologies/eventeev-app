/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Avatars from "../../assets/icon/Avatars.png";
import icon from "../../assets/icon/icon.png";
import iconTwo from "../../assets/icon/iconTwo.png";
import iconThree from "../../assets/icon/iconThree.png";
import iconFour from "../../assets/icon/iconFour.png";
import icon6 from "../../assets/icon/icon6.png";
import icon7 from "../../assets/icon/icon7.png";
import icon8 from "../../assets/icon/icon8.png";
import paypal from "../../assets/icon/paypal.png";
import vector from "../../assets/icon/Vector.png";
import googleD from "../../assets/icon/g-drive.png";
import style from "./style/Sidebar.module.css";

const EventSidebar = () => {
  return (
    <div className="w-[20%] h-[100vh] bg-white border-r-2">
      <div className="p-4">
        <div className="mb-4">
          <span className="h-[56px] gap-[12px] flex items-center">
            <img
              src={vector}
              className="w-[40px] h-[40px] self-center"
              alt="Logo"
            />
            <h3 className="self-center text-[#101928]">rayna ui</h3>
          </span>
        </div>
      </div>

      <div>
        <div className="py-4 px-2">
          <ul className={`mb-4`}>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/event/dashboard"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={icon}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Home</span>
              </NavLink>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={iconTwo}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Profile</span>
              </NavLink>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={iconThree}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Analytics</span>
              </NavLink>
            </li>
          </ul>
          <hr className="bg-[#F0F2F5]" />
        </div>
        <div className="py-4 px-2">
          <ul className={`mb-4`}>
            <li className={`${style.nav_item} mb-2`}>
              <p className="mt-[12px] mb-[24px] px-4">Integrations</p>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={googleD}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Google Drive</span>
              </NavLink>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={paypal}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Paypal</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="py-4 px-2">
          <ul className={`mb-4`}>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={iconFour}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Settings</span>
              </NavLink>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={icon6}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Help Center</span>
              </NavLink>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.active : style.link
                }>
                <img
                  src={icon7}
                  alt="icon"
                  className="mr-2"
                  width={"20px"}
                  height={"20px"}
                />
                <span>Refer family and friends</span>
              </NavLink>
            </li>
            <li className={`${style.nav_item} mb-2`}>
              <div className="flex px-4 justify-between items-center">
                <img src={Avatars} alt="" />
                <span className="text-left">
                  <small className="text-center">Richard Edem</small>
                  <br />
                  <small className="text-center">Richard@gmail.com</small>
                </span>
                <span>
                  <img src={icon8} alt="" />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
