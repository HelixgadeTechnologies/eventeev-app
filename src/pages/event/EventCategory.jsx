/** @format */
import React from "react";
import { useForm } from "react-hook-form";
import cloudy from "../../assets/icon/cloud.png";

function EventCategory({ step, handleNextStep, handlePrevStep, data }) {
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
  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(
    ({ onChange, onBlur, name, options }, ref) => (
      <select
        id={name}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  );

  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 mt-4 text-center">
          <h5 className="mb-2">Create a new Event Category</h5>
          <p className="text-[#8C94A6]">Upload event thumbnail</p>
        </div>

        <div className="flex flex-col">
          <div className="w-full text-center border-dashed border-2 py-5 px-6 mb-4">
            <button className="spinner">
              <img src={cloudy} alt="" />
            </button>
            <div className="mt-4">
              <span className="text-[#EB5017] font-semibold">
                Click to upload
              </span>
              <span className="text-[#98A2B3]"> or drag and drop </span> <br />
              <small className="text-[#98A2B3]">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </small>
            </div>

            <div className="spinner py-[19px]">
              <hr className="w-1/2 " />
              <span className="text-[#98A2B3] font-semibold">OR</span>
              <hr className=" w-1/2" />
            </div>
            <div className="spinner">
              <button className="button_primary w-1/2">Browse Files</button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="Event Type">Event Type</label>
            <Select
              {...register("physicalEvent", { required: true })}
              options={["Virtual", "Hybrid", "In-person"]}
            />
            {errors.physicalEvent && (
              <span className="text-[red]">Event type is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="Event Location">Event Location</label>
            <input
              type="text"
              {...register("eventLocation", { required: true })}
              placeholder="Helix-Ace Event centre 123 helix Avenue, Port Harcourt, River state, Nigeria"
              aria-invalid={errors.eventLocation ? "true" : "false"}
            />
            {errors.eventLocation?.type === "required" && (
              <span className="text-[red]">Event location is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="Event Category"> Event Category</label>
            <Select
              {...register("eventCategory", { required: true })}
              options={[
                "Conference",
                "Info Session",
                "Watch Party",
                "Workshop",
                "Tech Talk / Speaker Session",
                "Hackathon",
              ]}
            />
            {errors.eventCategory && (
              <span className="text-[red]">Event category is required</span>
            )}
          </div>
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

export default EventCategory;
