import solarseven from "../assets/images/solarseven.jpg";
const SolarInstallation = () => {
  return (
    <div
      className="flex items-center justify-center bg-center py-10"
      style={{ backgroundImage: `url(${solarseven})` }}
    >
      <div className="flex items-center justify-start p-10">
        <div className="w-1/2 h-96">
          <h2 className="text-6xl text-black font-bold">Lorem, ipsum dolor.</h2>
          <p className="text-2xl font-normal text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque non
            cupiditate at, optio rerum iste distinctio illo earum iusto qui
            inventore laboriosam minima officia recusandae.
          </p>
        </div>
        {/* <img src={solarseven} alt="solar-installation" /> */}
      </div>
    </div>
  );
};

export default SolarInstallation;
