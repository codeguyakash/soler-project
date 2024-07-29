import imageone from "../assets/icons/imageone.jpg";
import imagetwo from "../assets/icons/imagetwo.jpg";
import imagethree from "../assets/icons/imagethree.jpg";
import imagefour from "../assets/icons/imagefour.jpg";

const WhyRooftopSolar = () => {
  return (
    <div
      className="w-full shapedividers flex flex-col items-center justify-center py-20"
      style={{
        backgroundImage: "linear-gradient(to left, #bdc3c7, #2c3e50)",
      }}
    >
      <h1 className="text-4xl text-white my-5 font-bold p-2 inline-block text-center">
        Why Rooftop Solar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
        <div className="w-40 flex flex-col items-center justify-center">
          <img src={imageone} alt="icon" className="block " width={100} />
          <h2 className="text-center font-semibold">Electricity Bill Saving</h2>
        </div>
        <div className="w-40 flex flex-col items-center justify-center">
          <img src={imagefour} alt="icon" className="block " width={100} />
          <h2 className="text-center  font-semibold">
            Reduce Carbon Footprints
          </h2>
        </div>
        <div className="w-40 flex flex-col items-center justify-center">
          <img src={imagethree} alt="icon" className="block " width={100} />
          <h2 className="text-center  font-semibold">Low Maintenance Cost</h2>
        </div>
        <div className="w-40 flex flex-col items-center justify-center">
          <img src={imagetwo} alt="icon" className="block" width={100} />
          <h2 className="text-center  font-semibold">
            Protect Against Future Inflation – Electricity Bills
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhyRooftopSolar;
