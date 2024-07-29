const Loader = () => {
  const bg = "bg-black bg-opacity-50";
  return (
    <div className="flex items-center justify-center h-full w-full absolute top-0 left-0  z-10">
      <div className="border-[2px] border-t-[#1e40af] animate-spin animate-duration-200 border-[#10b981] w-12 h-12 rounded-full"></div>
    </div>
  );
};

export default Loader;
