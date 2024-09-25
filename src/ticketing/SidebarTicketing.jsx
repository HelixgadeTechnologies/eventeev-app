import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/SidebarTicketing.module.css";
import vector from "../assets/icon/Vector.png";
import icon from "../assets/icon/icon.png";
import iconS2 from "../assets/icon/iconS2.svg";
import iconS3 from "../assets/icon/iconS3.svg";
import iconS4 from "../assets/icon/iconS4.svg";
import iconS5 from "../assets/icon/iconS5.svg";
import icon4 from "../assets/icon/iconFour.png";
import icon6 from "../assets/icon/icon6.png";
import icon7 from "../assets/icon/icon7.png";
import icon8 from "../assets/icon/icon8.png";
import user from "../assets/icon/user.svg";

const SidebarTicketing = () => {
  return (
    <div>
      <div className="w-[20vw] bg-white border-r-2 flex flex-col justify-between">
        <div>
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

          <div className="">
            <div className="py-4 px-2">
              <ul className={`mb-4`}>
                <li className={`${style.nav_item} mb-2`}>
                  <NavLink
                    to={"/ticketing/ticketingDashboard"}
                    className={({ isActive }) =>
                      isActive ? style.active : style.link
                    }
                  >
                    <img
                      src={icon}
                      alt="icon"
                      className="mr-2"
                      width={"20px"}
                      height={"20px"}
                    />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className={`${style.nav_item} mb-2`}>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.active : style.link
                    }
                  >
                    <img
                      src={iconS2}
                      alt="icon"
                      className="mr-2"
                      width={"20px"}
                      height={"20px"}
                    />
                    <span>Cmbnvvvnbvn</span>
                  </NavLink>
                </li>
                <li className={`${style.nav_item} mb-2`}>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.active : style.link
                    }
                  >
                    <img
                      src={iconS3}
                      alt="icon"
                      className="mr-2"
                      width={"20px"}
                      height={"20px"}
                    />
                    <span>Appointments</span>
                  </NavLink>
                </li>
                <li className={`${style.nav_item} mb-2`}>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.active : style.link
                    }
                  >
                    <img
                      src={iconS4}
                      alt="icon"
                      className="mr-2"
                      width={"20px"}
                      height={"20px"}
                    />
                    <span>Medical History</span>
                  </NavLink>
                </li>
                <li className={`${style.nav_item} mb-2`}>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.active : style.link
                    }
                  >
                    <img
                      src={iconS5}
                      alt="icon"
                      className="mr-2"
                      width={"20px"}
                      height={"20px"}
                    />
                    <span>My Hospitals</span>
                  </NavLink>
                </li>
              </ul>
              <hr className="bg-[#F0F2F5]" />
            </div>
          </div>

          <div className="py-4 px-2">
            <ul className={`mb-4`}>
              <li className={`${style.nav_item} mb-2`}>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? style.active : style.link
                  }
                >
                  <img
                    src={icon4}
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
                  }
                >
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
                  }
                >
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
                  <img src={user} alt="" />
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
    </div>
  );
};

export default SidebarTicketing;
