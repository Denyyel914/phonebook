import React from "react";

const Button = ({ label, style, customClassName }) => {
  const baseStyles =
    "text-sm px-2 py-2 cursor-pointer rounded-md hover:opacity-90 focus:outline-none";
  const styleClassess = style ? "bg-pc-40 text-white" : "";
  return (
    <button className={`${customClassName} ${baseStyles} ${styleClassess}`}>
      {label}
    </button>
  );
};

export default Button;
