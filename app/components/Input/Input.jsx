import React from "react";

const Input = ({
  label,
  type,
  value,
  disabled,
  placeholder,
  name,
  onChange,
  errorMessage,
  required,
  customClassName,
}) => {
  const inputStyles = {
    backgroundColor: disabled ? "#f0f4f8" : "#ffffff",
    color: disabled ? "#6b7280" : "#000000",
    borderColor: errorMessage ? "#e53e3e" : disabled ? "#e5e7eb" : "#a0ec0",
  };

  const focusStyles = {
    borderColor: "#2563ec",
    borderWidth: "2px",
  };
  return (
    <div>
      <div className="flex flex-col">
        <label>
          <span className="text-sm dark:text-gray-900">{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          name={name}
          className={`h-9 border rounded p-2 outline-none ${customClassName}`}
          style={{ ...inputStyles }}
          value={value || ""}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={(e) => {
            (e.target.style.borderColor = focusStyles.borderColor),
              (e.target.style.borderWidth = focusStyles.borderWidth);
          }}
          onBlur={(e) => {
            e.target.style.borderColor = errorMessage
              ? "#e53e3e"
              : inputStyles.borderColor;
            e.target.style.borderWidth = errorMessage ? "2px" : "1px";
          }}
        />
        {errorMessage && (
          <span role="alert" className="text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
