import React from "react";

export default function RadioInput(props) {
  const { isChecked, onChange, className = "", ...rest } = props;

  return (
    <input
      type="radio"
      checked={isChecked}
      onChange={onChange}
      {...(rest || {})}
      className={`w-8 h-8 text-black  rounded-full focus:ring-0 p-1 ${className}`}
    />
  );
}
