import React from "react";

import pBall from "../../../assets/icons/pokeball.svg";
import gBall from "../../../assets/icons/greatball.svg";
import mBall from "../../../assets/icons/masterball.svg";
import walletIc from "../../../assets/icons/wallet.svg";

const Topbar = () => {
  return (
    <nav>
      <ul className="my-9 flex justify-end">
        <li className="mr-10 flex">
          <img src={pBall} alt="pokeball count" className="w-5 mr-[6px]" />
          <p className="font-bold text-tiny text-neutral-400 tracking-tightest">
            5
          </p>
        </li>
        <li className="mr-10 flex">
          <img src={gBall} alt="pokeball count" className="w-5 mr-[6px]" />
          <p className="font-bold text-tiny text-neutral-400 tracking-tightest">
            5
          </p>
        </li>
        <li className="mr-10 flex">
          <img src={mBall} alt="pokeball count" className="w-5 mr-[6px]" />
          <p className="font-bold text-tiny text-neutral-400 tracking-tightest">
            0
          </p>
        </li>
        <li className="mr-10 flex">
          <img src={walletIc} alt="pokeball count" className="w-5 mr-[6px]" />
          <p className="font-bold text-tiny text-neutral-400 tracking-tightest">
            500
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
