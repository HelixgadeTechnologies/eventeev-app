/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import toggle from "../../assets/icon/toggle.svg";
function EventSocial({
  step,
  handleNextStep,
  handlePrevStep,
  eventValue,
  handleSetEventValue,
  data,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: eventValue,
  });

  const onSubmit = (data) => {
    JSON.stringify(data);
    handleSetEventValue(data);
    handleNextStep();
  };
  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 mt-4 text-center">
          <h5 className="mb-2">Event Social Details</h5>
          <p className="text-[#8C94A6]">
            Fill out these details to create your event
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="Event Website">Event Website</label>
            <input
              type="text"
              {...register("website", { required: true })}
              placeholder="WWW."
              aria-invalid={errors.website ? "true" : "false"}
            />
            {errors.website?.type === "required" && (
              <span className="text-[red]">Event website is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Event Facebook Link">Event Facebook Link</label>
            <input
              type="text"
              {...register("facebook_link", { required: true })}
              placeholder="https://www.facebook.com/"
              aria-invalid={errors.facebook_link ? "true" : "false"}
            />
            {errors.facebook_link?.type === "required" && (
              <span className="text-[red]">Facebook link is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Event Instagram Link">Event Instagram Link</label>
            <input
              type="text"
              {...register("instagram_link", { required: true })}
              placeholder="https://www.instagram.com/"
              aria-invalid={errors.instagram_link ? "true" : "false"}
            />
            {errors.instagram_link?.type === "required" && (
              <span className="text-[red]">Instagram Link is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="Event X (Twitter) Link">
              Event X (Twitter) Link
            </label>
            <input
              type="text"
              {...register("twitter_link", { required: true })}
              placeholder="https://x.com/"
              aria-invalid={errors.twitter_link ? "true" : "false"}
            />
            {errors.twitter_link?.type === "required" && (
              <span className="text-[red]">Twitter link is required</span>
            )}
          </div>
        </div>

        <hr className="mb-4" />

        <div className="flex justify-between mb-4">
          <span>Run only once per customer</span>
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
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={step === 0}
            className="button_primary_outline w-[36%]">
            Previous
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

export default EventSocial;
