/** @format */

import React from "react";

function EventCreate({ step, handleNextStep, data }) {
  return (
    <div className="flex flex-col justify-between w-[100%] h-[100%]">
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex justify-between">
        <button type="reset" className="button_primary_outline w-[36%]">
          Cancel
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

export default EventCreate;
