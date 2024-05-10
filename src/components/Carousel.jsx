import React, { useState, useEffect } from "react";

const Carousel = ({ images, showSideNavHandler }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="relative top-0 bg-gradient-to-r from-blue-900 to-green-500">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-screen opacity-90"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[90vh] opacity-95"
                onClick={showSideNavHandler}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-4 py-2 "
      >
        •••
      </button>
      <div
        className="z-50 absolute top-28 md:top-48 mx-2 md:left-32 md:w-[80vw] lg:w-[86vw] xl:w-[86vw] 2xl:w-[60vw]

      "
      >
        <h1
          className="text-5xl md:text-[5.4rem] lg:text-[5.6rem] xl:text-[5.8rem] 2xl:text-[6rem]  leading-[3.4rem] md:leading-[4rem] lg:leading-[5rem] tracking-tighter text-gray-400 font-bold italic"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            fontFamily: '"Inter", sans-serif',
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #1e3a8a, green)",
          }}
        >
          Illuminate your journey with our solar brilliance and expertise
        </h1>
        <p className="text-1xl md:text-2xl leading-[1.2rem] md:leading-[2rem] lg:leading-[2rem] tracking-tighterF text-gray-800 py-2 lowercase font-semibold italic">
          We are committed to harnessing the power of the sun to create
          sustainable and eco-friendly energy solutions for homes, businesses,
          and communities.
        </p>
      </div>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white px-4 py-2 "
      >
        •••
      </button>
    </div>
  );
};

export default Carousel;
