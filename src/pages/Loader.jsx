import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-14 h-14 bg-transparent rounded-full animate-spin animate-duration-[350ms] border-2 border-t-black"></div>
    </div>
  );
};

export default Loader;
