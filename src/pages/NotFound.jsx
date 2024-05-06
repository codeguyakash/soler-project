import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import page_not_found from "../assets/page_not_found.svg";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        {/* <div className="not-image-divs">
          <img src={page_not_found} alt="Page_Not_Found" width={400} />
        </div> */}
        <h1 className="text-5xl text-center font-primary ">
          404 Page Not Found
        </h1>
        <Link
          to="/"
          className="text-1xl font-bold text-blue-900 flex items-center justify-center gap-2"
        >
          <IoArrowBack /> Go back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
