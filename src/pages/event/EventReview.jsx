/** @format */

import React from "react";

function EventReview({ step, handlePrevStep }) {
  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrevStep}
          disabled={step === 0}
          className="button_primary_outline w-[24%]">
          Edit
        </button>
        <button type="button" className="button_primary_outline w-[24%]">
          Save
        </button>
        <button type="button" className="button_primary w-[40%]">
          Publish Event
        </button>
      </div>
    </div>
  );
}

export default EventReview;
