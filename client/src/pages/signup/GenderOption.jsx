import React from "react";

const GenderOption = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer space-x-1">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            defaultChecked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer space-x-1">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            defaultChecked
          />
        </label>
      </div>
    </div>
  );
};

export default GenderOption;
