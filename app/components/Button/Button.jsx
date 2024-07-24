import React from "react";

const Button = ({ label, style, customClassName, iconType, icon, onClick }) => {
  const baseStyles =
    "text-sm px-2 py-2 cursor-pointer rounded-md hover:opacity-90 focus:outline-none";
  const styleClasses = style ? "bg-pc-40 text-white" : "";
  return (
    <button
      className={`${customClassName} ${baseStyles} ${styleClasses}`}
      style={iconType ? { display: "flex", alignItems: "center" } : null}
      onClick={onClick}
    >
      {/* <span style={iconType == "leading" && { paddingLeft: "5px" }}>
        {iconType === "leading" && icon}
      </span> */}
      {iconType === "leading" && (
        <span style={{ marginLeft: "5px" }}>{icon}</span>
      )}
      <span
        style={
          iconType
            ? {
                flex: 1,
                textAlign: "center",
                paddingLeft: "5px",
                paddingRight: "5px",
              }
            : null
        }
      >
        {label}
      </span>
      {/* <span style={iconType == "leading" && { paddingLeft: "5px" }}>
        {iconType === "trailing" && icon}
      </span> */}
      {iconType === "trailing" && (
        <span style={{ marginRight: "4px" }}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
