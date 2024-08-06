import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    const inputStyles = {
      backgroundColor: disabled ? "#f0f4f8" : "#ffffff",
      color: disabled ? "#6b7280" : "#000000",
      borderColor: errorMessage ? "#e53e3e" : disabled ? "#e5e7eb" : "#a0aec0",
    };

    const focusStyles = {
      borderColor: "#2563eb",
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
            ref={ref} // Forward the ref here
            onFocus={(e) => {
              e.target.style.borderColor = focusStyles.borderColor;
              e.target.style.borderWidth = focusStyles.borderWidth;
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
  }
);

export default Input;
