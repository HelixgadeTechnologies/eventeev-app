/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import toggle from "../../assets/icon/toggle.svg";

const Input = ({
  label,
  register,
  required,
  placeholder,
  className,
  validation,
  type,
}) => (
  <div>
    <label>{label}</label>
    <input
      {...register(label, { required, validation, ...type })}
      placeholder={placeholder}
    />
  </div>
);

function EventCreate({ step, handleNextStep, data }) {
  const { register, handleSubmit } = useForm(); // Initialize form handling

  const onSubmit = (data) => {
    JSON.stringify(data); // Show submitted form data
  };
  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <div className="mb-4">
        <div>
          <div className="spinner flex-col my-[32px] h-[29px] gap-[8px] ">
            <h5>Event Category</h5>
            <p className="text-[#8C94A6]">
              Fill out these details to create your event
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[24px]"
          >
            {/* Input fields for event creation */}

            <Input
              type="text"
              label="Event Name"
              register={register}
              required
              placeholder="Enter Subject"
            />

            <div className="flex flex-col">
              <label>Event description</label>
              <textarea
                register={register}
                required
                placeholder="Enter text here..."
                maxLength={50}
                rows={4}
              ></textarea>

              <p className="text-sm text-[#667185]">
                Keep this simple of 50 characters
              </p>
            </div>

            <div className="spinner gap-[18px]">
              <Input
                type="date"
                label="Event Start Date"
                register={register}
                required
                placeholder="01 September 2024"
                className=""
              />
              <Input
                type="date"
                label="Event End Date"
                register={register}
                required
                placeholder="01 September 2024"
                className=""
              />
            </div>

            <div className="spinner gap-[18px]">
              <Input
                type="time"
                label="Event Start Time"
                register={register}
                required
                placeholder="01 September 2024"
              />
              <Input
                type="time"
                label="Event End Time"
                register={register}
                required
                placeholder="01 September 2024"
              />
            </div>
          </form>
        </div>
        <hr className="mt-[40px] mb-[16px]" />
        <div>
          <div className="flex justify-between mt-[24px] mb-[32px] ">
            <p>Recurrent event?</p>
            <img src={toggle} alt="" />
          </div>
          <span className="text-sm text-[#98a2b3]">
            You can set up a{" "}
            <span className="text-[#8F2802]">
              {" "}
              custom domain or connect your email service provider{" "}
            </span>{" "}
            to change this.
          </span>
        </div>
        <hr className="mt-[32px] my-[24px]" />
      </div>
      <div className="flex justify-between">
        <button type="reset" className="button_primary_outline w-[36%]">
          Cancel
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          disabled={step === data.length - 1}
          className="button_primary w-[60%]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default EventCreate;
