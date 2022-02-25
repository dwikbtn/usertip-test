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
    <Login status={statusHandler} logStatus={props.logStatus} db={props.db} />
  ) : (
    <SignUp
      status={statusHandler}
      logStatus={props.logStatus}
      db={props.db}
      signUpHandler={props.signUpHandler}
    />
  );
};

export default LogStatus;
