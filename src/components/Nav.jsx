import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ showSideNavHandler }) => {
  return (
    <div className="py-6 px-8 backdrop-blur-lg z-30 flex items-center justify-between absolute top-0 w-full">
      <div>
        <Link to="/">
          <h1 className="text-white text-3xl font-bold">EnerMaxX</h1>
        </Link>
        {/* <img
          src="https://www.enermaxx.in/web/image/website/1/logo/My%20Website?unique=e45f470"
          alt=""
          width={100}
        /> */}
      </div>
      <div>
        <GiHamburgerMenu
          onClick={showSideNavHandler}
          className="text-white text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
