/** @format */
import React from "react";
import { Stepper, Step } from "react-form-stepper";

function EventStepper({ currentStep, data }) {
  return (
    <div
      className={`w-[360px] h-[797px] bg-[#ffffff] rounded-lg border flex flex-col justify-between p-6`}
    >
      <Stepper activeStep={currentStep}>
        {data.map((step, index) => (
          <Step
            key={index}
            label={
              <>
                <p
                  style={{
                    fontWeight: currentStep === index ? "bold" : "500",
                    color: currentStep === index ? "#101928" : "#101928",
                  }}
                >
                  {step.header}
                </p>
                <small
                  className="truncate"
                  style={{
                    color: currentStep === index ? "#475367" : "#667185",
                  }}
                >
                  {step.label}
                </small>
              </>
            }
          />
        ))}
      </Stepper>

      <div className="">
        <p style={{ fontWeight: 600 }}>Need Help?</p>
        <span style={{ color: "#98A2B3" }}>
          Get to know how your campaign <br /> can reach a wider audience.
        </span>
        <button className="w-[140px] h-[46px] button_primary_light mt-4">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default EventStepper;
