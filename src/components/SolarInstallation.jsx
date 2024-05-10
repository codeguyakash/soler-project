import solarseven from "../assets/images/solarseven.jpg";
const SolarInstallation = () => {
  return (
    <div
      className="flex items-center justify-center bg-center py-10 relative"
      style={{ backgroundImage: `url(${solarseven})` }}
    >
      <div className="h-96 flex items-center justify-center flex-col px-5 md:px-20">
        <h1
          className="text-2xl lg:text-[4.3rem] text-white z-40 font-bold
            leading-[2rem] md:leading-[2rem] lg:leading-[4.5rem] text-center
           drop-shadow-2xl italic
            "
          style={{
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Illuminate your journey with our solar brilliance and expertise
        </h1>
        <div className="absolute bg-black w-full h-full opacity-45"></div>
        {/* <img src={solarseven} alt="solar-installation" /> */}
      </div>
    </div>
  );
};

export default SolarInstallation;
