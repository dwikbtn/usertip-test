import React, { useState } from "react";
import logoImg from "../../assets/icons/Logo.png";
import Input from "../UI/Input";

import validator from "validator";

const SignUp = (props) => {
  const [inputValue, setInputValue] = useState({
    userName: "",
    password: "",
    email: "",
    repassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    userValidation: false,
    passValidation: false,
    rePassValidation: false,
    emailValidation: false,
  });
  const { userName, password, email, repassword } = inputValue;

  // error message

  const error = {
    userName: "user invalid",
    email: "please input valid email",
    password: "Your Password is invalid, make sure it more then 6 Characters",
    repassword: "Your password doesn't match",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnBlurChange = (e) => {
    const { name } = e.target;

    if (name === "email") {
      checkEmail();
    }
    if (name === "password") {
      checkPassword();
    }
    if (name === "password") {
      checkRepassword();
    }
  };

  const signUpHandler = (e) => {
    // e.preventDefault();
    // if (password === rePassword && userName && password && email) {
    //   props.signUpHandler(email, userName, password);
    //   props.logStatus();
    // } else {
    //   console.log("Make sure to fill all the form");
    // }
  };

  // validating input
  const checkEmail = () => {
    if (!validator.isEmail(email)) {
      setErrorMsg((prev) => ({ ...prev, emailValidation: true }));
    } else setErrorMsg((prev) => ({ ...prev, emailValidation: false }));
  };

  const checkPassword = () => {
    if (password.length < 6) {
      setErrorMsg((prev) => ({ ...prev, passValidation: true }));
    } else setErrorMsg((prev) => ({ ...prev, passValidation: false }));
  };

  const checkRepassword = () => {
    if (repassword !== password) {
      setErrorMsg((prev) => ({ ...prev, rePassValidation: true }));
    } else setErrorMsg((prev) => ({ ...prev, rePassValidation: false }));
  };

  console.log(errorMsg);

  return (
    <div className="flex w-screen h-screen ">
      <form className="mx-auto my-5 flex justify-start flex-col w-95  ">
        <img className="w-12 h-12 mb-8" src={logoImg} alt="logo" />
        <h2 className="login-header">Sign Up</h2>
        <p className="login-text font-semibold text-black mb-6">
          Start your journey today to become the best Pokemon Trainer ever lived
        </p>
        <div className="w-full bg-neutral-300 h-[2px] rounded-sm mb-8"></div>
        <Input
          label={"User Name"}
          onChange={handleInputChange}
          value={userName}
          type={"text"}
          inputName={"userName"}
          className={"mb-3"}
        />
        <Input
          label={"Email"}
          onChange={handleInputChange}
          value={email}
          type={"email"}
          inputName={"email"}
          className={"mb-3"}
          onBlur={handleOnBlurChange}
          valid={errorMsg.emailValidation}
          errorMsg={error.email}
        />
        <Input
          label={"Password"}
          onChange={handleInputChange}
          value={password}
          type={"password"}
          inputName={"password"}
          className={"mb-3"}
          onBlur={handleOnBlurChange}
          valid={errorMsg.passValidation}
          errorMsg={error.password}
        />
        <Input
          label={"Repeat Password"}
          onChange={handleInputChange}
          value={repassword}
          type={"password"}
          inputName={"repassword"}
          className={"mb-3"}
          valid={errorMsg.rePassValidation}
          errorMsg={error.repassword}
        />
        <button
          onClick={signUpHandler}
          className="bg-primary rounded-xl h-12 text-neutral-100 p-3 login-text font-bold mb-8 "
        >
          Sign Up
        </button>
        <p className="login-text font-semibold text-neutral-400 ">
          Have an account?
          <span
            className="text-black hover:cursor-pointer hover:underline"
            onClick={() => props.status()}
          >
            Login.
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
