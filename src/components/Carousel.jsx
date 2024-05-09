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
    <div className="relative top-0 bg-[#232323] h-[90vh]">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300"
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
      <h1
        className="z-50 text-7xl lg:text-9xl font-bold absolute top-60 md:top-64 left-2 md:left-32 text-[#131860] px-4 py-2
      "
      >
        Welcome
      </h1>
      <p className="z-50 text-1xl md:text-2xl absolute top-80 md:top-96 left-10 md:left-40 text-black py-2 w-1/2 lowercase">
        Lorem ipsum dolor elit. Molestias officiis id nulla quod eum?
      </p>
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
