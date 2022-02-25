import { useState } from "react";

import Catch from "./components/Catch/Catch";
import Home from "./components/Home/Home";
import LogStatus from "./components/LogStatus/LogStatus";
import SideBar from "./components/Navbar/Sidebar";
import Topbar from "./components/Navbar/Topbar";

function App() {
  const [logStatus, setLogStatus] = useState(false);

  const loginHandler = () => {
    setLogStatus((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      {!logStatus ? (
        <LogStatus logStatus={loginHandler} />
      ) : (
        <>
          <Topbar />
          <div className="flex">
            <SideBar />
            <div className="mt-24 w-full -z-20 h-screen bg-neutral-200">
              <Catch />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
