/** @format */

import React from "react";

function EventSocial({ step, handleNextStep, handlePrevStep, data }) {
  return (
    <div>
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrevStep}
          disabled={step === 0}
          className="button_primary_outline w-[36%]">
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          disabled={step === data.length - 1}
          className="button_primary w-[60%]">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default EventSocial;
