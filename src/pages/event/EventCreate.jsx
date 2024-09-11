/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import toggle from "../../assets/icon/toggle.svg";

function EventCreate({ step, handleNextStep, data }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    JSON.stringify(data);
    console.log(data);
    handleNextStep();
  };
  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 mt-4 text-center">
          <h5 className="mb-2">Create a new Event</h5>
          <p className="text-[#8C94A6]">
            Fill out these details to create your event
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="Event Name">Event Name</label>
            <input
              type="text"
              {...register("eventName", { required: true })}
              placeholder="Enter Subject"
              aria-invalid={errors.eventName ? "true" : "false"}
            />
            {errors.eventName?.type === "required" && (
              <span className="text-[red]">Event name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Event description">Event description</label>
            <textarea
              {...register("eventDescription", { required: true })}
              placeholder="Enter text here..."
              aria-invalid={errors.eventDescription ? "true" : "false"}
              rows={4}></textarea>

            <p className="text-sm text-[#667185]">
              Keep this simple of 50 characters
            </p>
            {errors.eventDescription?.type === "required" && (
              <span className="text-[red]">Event description is required</span>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-[18px]">
          <div className="mb-4">
            <label htmlFor="Event Start Date">Event Start Date</label>
            <input
              type="date"
              {...register("eventStartDate", {
                required: true,
                maxLength: 20,
              })}
              placeholder="01 September 2024"
              aria-invalid={errors.eventStartDate ? "true" : "false"}
            />
            {errors.eventStartDate?.type === "required" && (
              <span className="text-[red]">Event Start Date is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Event End Date">Event End Date</label>
            <input
              type="date"
              {...register("eventEndDate", {
                required: true,
                maxLength: 20,
              })}
              placeholder="01 September 2024"
              aria-invalid={errors.eventEndDate ? "true" : "false"}
            />
            {errors.eventEndDate?.type === "required" && (
              <span className="text-[red]">Event End Date is required</span>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-[18px]">
          <div className="mb-4">
            <label htmlFor="Event Start Time">Event Start Time</label>
            <input
              type="time"
              {...register("eventStartTime", {
                required: true,
                maxLength: 20,
              })}
              placeholder="01 September 2024"
              aria-invalid={errors.eventStartTime ? "true" : "false"}
            />
            {errors.eventStartTime?.type === "required" && (
              <span className="text-[red]">Event Start Time is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Event End Time">Event End Time</label>
            <input
              type="time"
              {...register("eventEndTime", { required: true, maxLength: 20 })}
              placeholder="01 September 2024"
              aria-invalid={errors.eventEndTime ? "true" : "false"}
            />
            {errors.eventEndTime?.type === "required" && (
              <span className="text-[red]">Event End Time is required</span>
            )}
          </div>
        </div>

        <hr className="mb-4" />

        <div className="flex justify-between mb-4">
          <p>Recurrent event?</p>
          <img src={toggle} alt="" />
        </div>

        <div className="mb-4">
          <span className="mr-2 text-[#98a2b3]">You can set up a</span>
          <span className="mr-2  text-[#8F2802]">
            custom domain or connect your email service provider
          </span>
          <span className="text-[#98a2b3]">to change this.</span>
        </div>

        <hr className="mb-4" />

        <div className="flex justify-between">
          <button type="reset" className="button_primary_outline w-[36%]">
            Cancel
          </button>
          <button
            type="submit"
            disabled={step === data.length - 1}
            className="button_primary w-[60%]">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventCreate;
