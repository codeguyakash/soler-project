import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import imagefour from "../assets/images/faq-banner.jpg";
import SolarAdvantage from "./../components/SolarAdvantage";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

const WhyGoSolar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const contentArray = [
    {
      id: 1,
      title: "Save Money",
      description:
        "Save up to 50% on electricity bills with   solar panels. Cost savings are substantial, with residential customers saving over Rs 10 lakh+ and MSMEs saving over Rs 2 Cr+.",
      image: image1,
    },
    {
      id: 2,
      title: "Long Lifetime",
      description:
        "Solar power systems have a long lifetime, lasting over 25 years.",
      image: image7,
    },
    {
      id: 3,
      title: "Quick Payback",
      description:
        "Experience quick payback on your investment, with a typical payback period of 4-5 years.",
      image: image3,
    },
    {
      id: 4,
      title: "Grid Independence",
      description:
        "Beat the ever-increasing electricity tariffs and achieve grid independence.",
      image: image4,
    },
    {
      id: 5,
      title: "Minimal Maintenance",
      description:
        "Solar panels require minimal maintenance as they have no moving parts, resulting in low maintenance costs.",
      image: image5,
    },
    {
      id: 6,
      title: "Scalable Design",
      description:
        "Enjoy easy upgrades for evolving energy needs with  's scalable solar panel design.",
      image: image6,
    },
    {
      id: 7,
      title: "Tax Benefits",
      description:
        "Businesses can benefit from up to 40% accelerated tax depreciation in the first year of commissioning the solar plant.",
      image: image2,
    },
    {
      id: 8,
      title: "Clean & Green Energy",
      description:
        "Solar plants provide clean and green energy for MSMEs, homes, and large enterprises. They can potentially abate thousands of tons of CO2 emissions annually, equivalent to planting thousands of trees.",
      image: image8,
    },
    {
      id: 9,
      title: "Green Building Certification",
      description:
        "Earn crucial points for sustainable building design certifications like IGBC and LEED by incorporating solar power.",
      image: image9,
    },
  ];
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner
        title="Empowering Tomorrow: Discover the Solar Advantage"
        tagline="Unleash Savings, Embrace Sustainability, Go Solar Today!"
      />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <div
        className="h-96 bg-center bg-cover bg-no-repeat relative flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${imagefour})` }}
      >
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Benefits Of Going Solar
        </h2>
        <div className="absolute bg-black w-full h-full opacity-25"></div>
      </div>
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  items-center justify-center gap-5">
          {contentArray.map((content) => (
            <div
              key={content.id}
              className="shadow-lg p-10 min-h-64 border rounded-lg"
            >
              <h2 className="text-2xl font-semibold my-2">{content.title}</h2>
              <img
                src={content.image}
                alt={`Image of ${content.title}`}
                width="100%"
                height={200}
                className="rounded"
              />
              <p className="text-lg my-2">{content.description}</p>
            </div>
          ))}
        </div>
      </section>
      <SolarAdvantage />
      <Footer />
    </>
  );
};

export default WhyGoSolar;
