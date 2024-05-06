import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ showSideNavHandler }) => {
  return (
    <div className="py-6 px-8 backdrop-blur-lg z-30 flex items-center justify-between absolute top-0 w-full">
      <div>
        <h1 className="text-white text-3xl font-bold">SOLAR</h1>
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
