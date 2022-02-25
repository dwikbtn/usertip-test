import { useState } from "react";

import Catch from "./components/Catch/Catch";
import Home from "./components/Home/Home";
import LogStatus from "./components/LogStatus/LogStatus";
import SideBar from "./components/Navbar/Sidebar";
import Topbar from "./components/Navbar/Topbar";

// json
import db from "./database/db.json";

function App() {
  const [userInfo, setUserInfo] = useState(db);
  const [logStatus, setLogStatus] = useState(false);
  const [currentView, setCurrrentView] = useState("home");

  const loginHandler = () => {
    setLogStatus((prevState) => {
      return !prevState;
    });
  };

  const signUpHandler = (email, userName, password) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        emailAddress: email,
        userName: userName,
        password: password,
      };
    });
  };

  const navbarHandler = (position) => {
    setCurrrentView(position);
  };
  return (
    <>
      {!logStatus ? (
        <LogStatus
          logStatus={loginHandler}
          db={userInfo}
          signUpHandler={signUpHandler}
        />
      ) : (
        <>
          <Topbar userInfo={userInfo} />
          <div className="flex">
            <SideBar navbarHandler={navbarHandler} />
            <div className="mt-24 w-full -z-20 h-screen bg-neutral-200">
              {currentView == "home" && <Home />}
              {currentView == "catch" && <Catch />}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
