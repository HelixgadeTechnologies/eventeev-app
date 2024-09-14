/** @format */

import React from "react";
import axios from "axios";

function EventReview({ step, handlePrevStep, eventValue }) {
  const saveEvent = () => {};
  const onSubmit = async (data) => {
    JSON.stringify(data);
    console.log(data);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          ...eventValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(
        error.response ? error.response.data.message : "Login failed"
      );
    } finally {
      console.log(false);
    }
  };

  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <form onSubmit={onSubmit}>
        <div className="mb-6 mt-4 text-center">
          <h5 className="mb-2">Event Review</h5>
          <p className="text-[#8C94A6]">
            Fill out these details to create your event
          </p>
        </div>
        <div className="flex flex-col">
          <hr className="mb-3" />
          <div className="w-full mb-2">
            <span>
              <strong className="mr-2">Event Name:</strong>
              {eventValue.title}
            </span>
          </div>
          <hr className="mb-3" />
          <div className="w-full  mb-2">
            <span>
              <strong className="mr-2">Event Description:</strong>
              {eventValue.description}
            </span>
          </div>
          <hr className="mb-3" />
          <div className="w-full  mb-2">
            <span className="mr-2">
              <strong className="mr-2">Start Date:</strong>
              {eventValue.start_date}
            </span>
            <span>
              <strong className="mr-2">End Date:</strong>
              {eventValue.end_date}
            </span>
          </div>
          <hr className="mb-3" />
          <div className="w-full  mb-2">
            <span className="mr-2">
              <strong className="mr-2">Start Time:</strong>
              {eventValue.start_time}
            </span>
            <span>
              <strong className="mr-2">End Time:</strong>
              {eventValue.end_time}
            </span>
          </div>
          <hr className="mb-3" />
          <div className="w-full  mb-2">
            <span>
              <strong className="mr-2">Event Type:</strong>
              {eventValue.type}
            </span>
          </div>
          <hr className="mb-3" />
          <div className="w-full  mb-2">
            <span>
              <strong className="mr-2">Location:</strong>
              {eventValue.location}
            </span>
          </div>
          <hr className="mb-3" />
          <div className="w-full  mb-2">
            <span>
              <strong className="mr-2">Category:</strong>
              {eventValue.category}
            </span>
          </div>
          <hr className="mb-3" />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={step === 0}
            className="button_primary_outline w-[24%]">
            Edit
          </button>
          <button
            onClick={saveEvent()}
            type="button"
            className="button_primary_outline w-[24%]">
            Save
          </button>
          <button type="submit" className="button_primary w-[40%]">
            Publish Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventReview;
