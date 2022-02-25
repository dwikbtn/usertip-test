import React from "react";
import logoImg from "../../assets/icons/Logo.png";

const Login = (props) => {
  return (
    <div className="flex w-screen h-screen ">
      <form className="m-auto flex justify-start flex-col w-95  ">
        <img className="w-12 h-12 mb-8" src={logoImg} alt="logo" />
        <h2 className="login-header">Login</h2>
        <div className="w-full bg-neutral-300 h-[2px] rounded-sm mb-8"></div>
        <label
          htmlFor="userName"
          className="h-6 login-text  text-black font-semibold mb-3"
        >
          Username
        </label>
        <input
          type="text"
          name="userName"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <label
          htmlFor="password"
          className="h-6 login-text font-semibold  text-black mb-3"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <button
          type="submit"
          className="bg-primary rounded-xl h-12 text-neutral-100 p-3 login-text font-bold mb-8  hover:cursor-pointer hover:underline"
          onClick={() => props.logStatus()}
        >
          Sign in
        </button>
        <p className="login-text font-semibold text-neutral-400 ">
          Don’t have an account?
          <span
            className="text-black hover-link"
            onClick={() => props.status()}
          >
            Sign up.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
