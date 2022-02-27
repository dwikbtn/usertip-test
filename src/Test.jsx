import React, { useState } from "react";
import Input from "./components/UI/Input";

const Test = () => {
  const [inputValue, setInputValue] = useState({ userName: "", password: "" });
  const { userName, password } = inputValue;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  return (
    <>
      <Input
        label={"name"}
        type={"text"}
        inputName={"userName"}
        className={"mb-3"}
        onChange={handleInputChange}
        value={userName}
      />
      <Input
        label={"password"}
        type={"password"}
        inputName={"password"}
        className={"mb-3"}
        onChange={handleInputChange}
        value={password}
      />
    </>
  );
};

export default Test;
