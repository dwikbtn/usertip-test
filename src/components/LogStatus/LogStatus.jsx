import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LogStatus = (props) => {
  const [status, setStatus] = useState(true);

  const statusHandler = () => {
    setStatus((prevState) => {
      return !prevState;
    });
  };
  return status ? (
    <Login status={statusHandler} logStatus={props.logStatus} />
  ) : (
    <SignUp status={statusHandler} />
  );
};

export default LogStatus;
