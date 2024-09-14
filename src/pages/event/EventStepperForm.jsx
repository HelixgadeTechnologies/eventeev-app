/** @format */

import React, { useState } from "react";
import EventCreate from "./EventCreate";
import EventCategory from "./EventCategory";
import EventSocial from "./EventSocial";
import EventReview from "./EventReview";

function EventStepperForm({ currentStep, handleCurrentStep, data }) {
  const [eventValue, setEventValue] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    one_time_off: "",
    thumbnail: "",
    type: "",
    location: "",
    category: "",
    website: "",
    facebook_link: "",
    instagram_link: "",
    twitter_link: "",
    once_per_customer: "",
  });

  const nextStep = () => {
    handleCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => {
    handleCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div
      className={`w-[540px] min-h-[60vh] bg-[#ffffff] rounded-lg border flex flex-col justify-between p-6`}>
      {currentStep === 0 && (
        <EventCreate
          step={currentStep}
          handleNextStep={nextStep}
          eventValue={eventValue}
          handleSetEventValue={setEventValue}
          data={data}
        />
      )}

      {currentStep === 1 && (
        <EventCategory
          step={currentStep}
          handleNextStep={nextStep}
          handlePrevStep={prevStep}
          eventValue={eventValue}
          handleSetEventValue={setEventValue}
          data={data}
        />
      )}

      {currentStep === 2 && (
        <EventSocial
          step={currentStep}
          handleNextStep={nextStep}
          handlePrevStep={prevStep}
          eventValue={eventValue}
          handleSetEventValue={setEventValue}
          data={data}
        />
      )}

      {currentStep === 3 && (
        <EventReview
          step={currentStep}
          handlePrevStep={prevStep}
          eventValue={eventValue}
        />
      )}
    </div>
  );
}

export default EventStepperForm;
