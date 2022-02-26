import React from "react";

const Input = ({
  label,
  onChange,
  value,
  type,
  inputName,
  className,
  valid,
  errorMsg,
}) => {
  return (
    <div className={`${className} `}>
      <label
        htmlFor="input-field"
        className="h-6 login-text  text-black font-semibold mb-3"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={inputName}
        className={`input-form w-full`}
      />
      {valid && (
        <span className="text-xs text-red-700" id="passwordHelp">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default Input;
