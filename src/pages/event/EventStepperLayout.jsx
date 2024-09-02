/** @format */

import React, { useState } from "react";
import EventStepperForm from "./EventStepperForm";
import EventStepper from "./EventStepper";

function EventStepperLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsData = [
    {
      header: "Create New Campaign",
      label: "Event Name, Description, Start date, End Date",
    },
    {
      header: "Add category",
      label: "Banner, Event Type, Location, Category",
    },
    {
      header: "Add Socials",
      label: "Website, Facebook, Instagram, X (Twitter)",
    },
    {
      header: "Review and Publish",
      label: "Setup your customer journey flow",
    },
  ];
  return (
    <div
      style={{
        overflowY: "auto",
      }}
      className={`w-[100%] h-[90vh] p-4`}>
      <div className="mb-6">
        <h5>Welcome to GDG Port Harcourt</h5>
        <span className="text-[#667185]">
          Control your profile setup and integrations
        </span>
      </div>
      <div className={`flex flex-row justify-around`}>
        <EventStepperForm
          currentStep={currentStep}
          handleCurrentStep={setCurrentStep}
          data={stepsData}
        />
        <EventStepper currentStep={currentStep} data={stepsData} />
      </div>
    </div>
  );
}

export default EventStepperLayout;
