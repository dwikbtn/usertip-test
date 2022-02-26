import React from "react";

const Input = ({ label, onChange, value, type, inputName, className }) => {
  return (
    <>
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
        className={`input-form ${className}`}
      />
    </>
  );
};

export default Input;
