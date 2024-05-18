import React from "react";

const InputField = ({
  id = "",
  type = "text",
  name = "",
  disabled = false,
  readOnly = false,
  onChange = () => {},
  placeholder = "",
  value = "",
  className = "",
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
