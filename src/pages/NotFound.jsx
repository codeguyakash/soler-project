import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <h1
          className="text-5xl text-center font-primary p-5 font-semibold"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            fontFamily: '"Inter", sans-serif',
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #1e3a8a, green)",
          }}
        >
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
