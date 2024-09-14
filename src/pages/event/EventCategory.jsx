/** @format */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import cloudy from "../../assets/icon/cloud.png";

function EventCategory({
  step,
  handleNextStep,
  handlePrevStep,
  eventValue,
  handleSetEventValue,
  data,
}) {
  const [dragActive, setDragActive] = useState(false);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: eventValue,
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setValue("thumbnail", e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    setValue("thumbnail", e.target.files);
  };

  const onSubmit = (data) => {
    JSON.stringify(data);
    handleSetEventValue(data);
    handleNextStep();
  };

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
          <div
            className="relative w-full text-center border-dashed border-2 py-5 px-6 mb-4"
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}>
            <div className="spinner">
              <img src={cloudy} alt="" />
            </div>
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
              <button type="button" className="button_primary w-1/2">
                {dragActive ? "Browse Files loading..." : "Browse Files "}
              </button>
            </div>
            <input
              id="fileUpload"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleChange(e)} // Handle file change
              accept=".svg, .png, .jpg, .gif"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Event Type">Event Type</label>
            <Select
              {...register("type", { required: true })}
              options={["Virtual", "Hybrid", "In-person"]}
            />
            {errors.type && (
              <span className="text-[red]">Event type is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="Event Location">Event Location</label>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="Helix-Ace Event centre 123 helix Avenue, Port Harcourt, River state, Nigeria"
              aria-invalid={errors.location ? "true" : "false"}
            />
            {errors.location?.type === "required" && (
              <span className="text-[red]">Event location is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="Event Category"> Event Category</label>
            <Select
              {...register("category", { required: true })}
              options={[
                "Conference",
                "Info Session",
                "Watch Party",
                "Workshop",
                "Tech Talk / Speaker Session",
                "Hackathon",
              ]}
            />
            {errors.category && (
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
