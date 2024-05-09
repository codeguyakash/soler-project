import solarseven from "../assets/images/solarseven.jpg";
const SolarInstallation = () => {
  return (
    <div
      className="flex items-center justify-center bg-center py-10"
      style={{ backgroundImage: `url(${solarseven})` }}
    >
      <div className="h-96 flex items-center justify-center flex-col px-5 md:px-20">
        <div className="">
          <h1
            className="text-2xl lg:text-[4.3rem] text-gray-400 font-bold
            leading-[2rem] md:leading-[2rem] lg:leading-[3.4rem] text-center
           drop-shadow-2xl
            "
            style={{
              backgroundClip: "text",
              textShadow: "unset",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(to left, #bdc3c7, #2c3e50)",
            }}
          >
            Illuminate your journey with our solar brilliance and expertise
          </h1>
        </div>
        {/* <img src={solarseven} alt="solar-installation" /> */}
      </div>
    </div>
  );
};

export default SolarInstallation;
