import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import solarthree from "../assets/images/solar-image-three.webp";
import solarfour from "../assets/images/commerial.jpg";

const Products = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner
        title="Solar Solutions for Every Need"
        tagline="Powering Homes and Businesses Towards a Sustainable Future"
      />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Products
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-12 lg:grid-cols-2">
            <div className="flex">
              <div className="ml-4">
                <h3 className="text-2xl pb-5 leading-6 font-medium text-gray-900">
                  Residential Solar
                </h3>
                <img src={solarthree} alt="residential-solar" />
                <p className="mt-2 text-base text-gray-500">
                  Empower your home with our advanced residential solar
                  products, converting sunlight into cost-saving, eco-friendly
                  electricity for unparalleled sustainability.
                </p>
                <br />
                <p>
                  At ENERMAXX we pride ourselves on our specialisation in
                  evolutionising the way you power your home through our
                  fine-tuned solar solutions. We recognise the growing demand
                  for sustainable energy solutions that not only positively
                  impact the environment by reducing greenhouse emissions but
                  also provide real value for homeowners. By bringing this
                  potential of solar energy directly to your door, we can reduce
                  your reliance on the traditional grid power and significantly
                  reduce your expenditure on electricity bills. Our residential
                  solar systems, which are often connected directly to the grid,
                  provide a dependable and continuous power source without a
                  complete dependence on grid power. This grid connected
                  approach not only improves energy efficiency but also provides
                  a strategic solution to protect your home from the increasing
                  cost of living.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="ml-4">
                <h3 className="text-2xl pb-5 leading-6 font-medium text-gray-900">
                  Commercial Solar
                </h3>
                <img src={solarfour} alt="commercial-solar" />
                <p className="mt-2 text-base text-gray-500">
                  Energise your business with our state-of-the-art commercial
                  solar products, turning sunlight into efficient,
                  cost-effective energy for a prosperous future.
                </p>
                <br />
                <p>
                  Join us at ENERMAXX, where we invite you to partner with us in
                  redefining your business’s energy solutions. Now is the time
                  to invest in Solar PV systems for your business to unlock
                  immediate cost savings and enhance your value proposition.
                  Revenues from Solar PV systems are at an all-time high,
                  allowing businesses to reduce overheads, enhance their green
                  credentials, and lock in long-term savings. Incorporating a
                  Solar PV system into your business can help protect your
                  business from increasing electricity costs, while also
                  contributing to a more sustainable future. We offer long-term
                  commercial solar power solutions that can last up to 30 years,
                  and help you save money in the long run. Tax benefits are also
                  available, allowing you to deduct and depreciate your Solar PV
                  system, providing additional value over time. Join ENERMAXX
                  solar revolution and take your business on a journey to a
                  cleaner, more sustainable, and resilient future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
