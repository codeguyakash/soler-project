import React from "react";

const Banner = ({ title = "", tagline = "", username = "", email = "" }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-green-500 py-32 px-6 flex items-center justify-center">
      <div className="inline-block backdrop-blur-lg">
        <h1 className="text-white font-semibold text-5xl">{title}</h1>
        <br />
        {username && (
          <h3 className="text-white  text-2xl">Username: {username}</h3>
        )}
        {email && <h3 className="text-white text-2xl">Email: {email}</h3>}
        <h1 className="text-white text-lg">{tagline}</h1>
      </div>
    </div>
  );
};

export default Banner;
