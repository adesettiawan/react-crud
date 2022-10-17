import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col mb-5">
      <label className="mb-2 text-base text-gray-800 font-semibold">
        {label}
      </label>
      <input
        className="py-2 px-3 bg-gray-200 border-2 outline-none"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
