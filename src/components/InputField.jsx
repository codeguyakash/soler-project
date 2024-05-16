import React from "react";

const InputField = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className=""
    />
  );
};

export default InputField;
