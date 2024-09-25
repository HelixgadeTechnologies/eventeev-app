import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { NavLink } from "react-router-dom";
import miscicon5 from "../assets/icon/Miscicon5.svg";
import badge from "../assets/icon/Badge.svg";
import miscicon6 from "../assets/icon/Misc icon6.svg";
import miscicon7 from "../assets/icon/Misc icon7.svg";
import miscicon8 from "../assets/icon/Misc icon8.svg";
import tickets from "../assets/icon/link.svg";
import checkins from "../assets/icon/check-circle.svg";
import speakers from "../assets/icon/speakers.svg";
import chatrooms from "../assets/icon/chatRoom.svg";
import games from "../assets/icon/games.svg";
import analytics from "../assets/icon/analytics.svg";
import polls from "../assets/icon/polls.svg";
import matchmaking from "../assets/icon/Matchmaking.svg";
import clock from "../assets/icon/clock.svg";
import iconS3 from "../assets/icon/iconS3.svg";
import girl from "../assets/icon/girl1.svg";
const TicketingDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState([new Date(), new Date()]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="bg-[#f0f2f5] w-[82vw] h-[1025px] pt-6 px-9">
      <div className="flex justify-between ">
        <div className="">
          <h5>Welcome David</h5>
          <p>
            It’s a sunny day today, we hope you’re preparing for the big day! 😊
          </p>
        </div>
        <div className="spinner gap-0.5">
          <img src={miscicon5} alt="" />
          <div className="">
            <span>Today's date</span>
            <p>1st July, 2023</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between mt-11 gap-4">
            <div className="flex bg-white justify-between rounded-xl p-8">
              <div>
                <small>RSVP</small>
                <p className="text-xl">0</p>
                <div className="flex gap-2.5">
                  <img src={badge} alt="" />
                  <span className="text-[#04802e]">Increase</span>
                </div>
              </div>
              <img src={miscicon6} className="" alt="" />
            </div>
            <div className="flex bg-white justify-between rounded-xl p-8">
              <div>
                <small>Check-ins</small>
                <p className="text-xl">0</p>
                <div className="flex gap-2.5">
                  <img src={badge} alt="" />
                  <span className="text-[#04802e]">Healthy</span>
                </div>
              </div>
              <img src={miscicon7} className="" alt="" />
            </div>
            <div className="flex bg-white justify-between rounded-xl p-8">
              <div>
                <small>Amount generated</small>
                <p className="text-xl">0</p>
                <div className="flex gap-2.5">
                  <img src={badge} alt="" />
                  <span className="text-[#04802e]">$0</span>
                </div>
              </div>
              <img src={miscicon8} className="" alt="" />
            </div>
          </div>

          <div className="w-[47vw]">
            <div className="flex justify-between mt-6 mb-3">
              <h6>Newest peeps</h6>
              <NavLink to="/attendees">
                {" "}
                <small className="text-[#eb5017]">
                  See all attendees &gt;{" "}
                </small>
              </NavLink>
            </div>
            <div className="spinner bg-white py-14 px-52 rounded-lg">
              <p>New attendees would appear here! 😊</p>
            </div>
          </div>
        </div>
        <div className=" mt-11  ">
          <div className="bg-white w-[27vw] px-4 pb-6 rounded-xl">
            <h6 className="py-6">Event day</h6>
            <hr />
            <h6 className="mt-6">Friday, 6 July</h6>
            <div className="flex gap-4 my-3">
              <img src={clock} alt="" />
              <span>11.30 - 3.00 (4:30 min)</span>
            </div>
            <div className="flex gap-4 my-5">
              <img src={iconS3} alt="" />
              <span>
                Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245, Lagos
              </span>
            </div>
            <div className="flex gap-4">
              <img src={girl} alt="" />
              <div>
                <p>Dr. Richard Edem</p>
                <span>Event organiser</span>
              </div>
            </div>
            <hr className="my-5" />
            <div className="spinner gap-2">
              <button className="text-[#344054] border border-solid border-[#d0d5dd]">
                Edit Event Details
              </button>
              <button className="button_primary">Copy Event Link</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="w-[47vw]">
          <h6 className="mt-5 mb-4">Services</h6>
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={tickets} alt="" className="mt-7 mb-5" />
                <p className="mb-14">Tickets</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={checkins} alt="" className="mt-7 mb-5" />
                <p className="mb-14">Check ins</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={speakers} alt="" className="mt-7 mb-5" />{" "}
                <p className="mb-14">Speakers</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={chatrooms} alt="" className="mt-7 mb-5" />{" "}
                <p className="mb-14">Chat room</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={games} alt="" className="mt-7 mb-5 " />{" "}
                <p className="mb-14">Games</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={analytics} alt="" className="mt-7 mb-5" />{" "}
                <p className="mb-14">Analytics</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={analytics} alt="" className="mt-7 mb-5" />{" "}
                <p className="mb-14">Polls</p>
              </NavLink>
            </div>
            <div className="pl-5 rounded-lg bg-white">
              <NavLink>
                <img src={matchmaking} alt="" className="mt-7 mb-5" />{" "}
                <p className="mb-14">Matchmaking</p>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-[71px] self-center">
          <Calendar selectRange={true} onChange={setValue} value={value} />
        </div>
      </div>
    </div>
  );
};

export default TicketingDashboard;
