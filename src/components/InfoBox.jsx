const InfoBox = ({ title, value, unit }) => (
  <div className="h-60 border-2 border-dotted border-gray-300 rounded-sm">
    <h2 className="font-bold text-center rounded-md text-primary p-5">
      {title}
    </h2>
    <div className="flex items-center justify-center w-60 mx-auto">
      <div className="bg-gray-200 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-300 border-dotted flex items-center justify-center flex-col">
        <h3 className="text-center my-2">{unit ? unit : ""}</h3>
        <h3 className="text-center my-2">{value || "N/A"}</h3>
      </div>
    </div>
  </div>
);
export default InfoBox;
