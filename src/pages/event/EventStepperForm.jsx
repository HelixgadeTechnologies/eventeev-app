/** @format */

import React from "react";
import EventCreate from "./EventCreate";
import EventCategory from "./EventCategory";
import EventSocial from "./EventSocial";
import EventReview from "./EventReview";

function EventStepperForm({ currentStep, handleCurrentStep, data }) {
  const nextStep = () => {
    handleCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => {
    handleCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div
      className={`w-[540px] min-h-[85vh] bg-[#ffffff] rounded-lg border flex flex-col justify-between p-6`}
    >
      {currentStep === 0 && (
        <EventCreate step={currentStep} handleNextStep={nextStep} data={data} />
      )}

      {currentStep === 1 && (
        <EventCategory
          step={currentStep}
          handleNextStep={nextStep}
          handlePrevStep={prevStep}
          data={data}
        />
      )}

      {currentStep === 2 && (
        <EventSocial
          step={currentStep}
          handleNextStep={nextStep}
          handlePrevStep={prevStep}
          data={data}
        />
      )}

      {currentStep === 3 && (
        <EventReview step={currentStep} handlePrevStep={prevStep} data={data} />
      )}
    </div>
  );
}

export default EventStepperForm;
