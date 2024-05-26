import React from "react";

const Toast = ({ message, className }) => {
  return <span className={`${className}`}>{message}</span>;
};

export default Toast;
