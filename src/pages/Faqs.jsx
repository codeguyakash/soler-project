import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import imagefour from "../assets/images/faq-banner.jpg";

const Faqs = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const faqs = [
    {
      question: "What is a Grid Connected Rooftop Solar PV System?",
      answer:
        "In a grid-connected rooftop SPV system, solar energy is converted to AC power and fed into the grid.",
    },
    {
      question:
        "What are the main components of a Grid Connected Rooftop SPV system?",
      answer:
        "Components include Solar PV Modules, Inverter, Module mounting structure, Bi-direction Meters, and Balance of System.",
    },
    {
      question:
        "How much area is required for a One kWp rooftop Solar PV system?",
      answer: "Approximately 10-12 Sq.mt of shadow-free area.",
    },
    {
      question:
        "What types of roofs are suitable for Rooftop Solar (RTS) system?",
      answer: "Any roof with sufficient load-bearing capacity.",
    },
    {
      question:
        "What is the daily energy generated from a One kWp Solar power plant?",
      answer: "4 to 5.5 units on a clear sunny day.",
    },
    {
      question: "What are the advantages of Grid Connected Rooftop SPV system?",
      answer:
        "Advantages include saving on electricity bills, utilizing vacant roof space, and long-term energy security.",
    },
    {
      question:
        "What is the average cost of a Grid Connected Rooftop SPV system?",
      answer: "Current benchmark costs can be found on the provided website.",
    },
    {
      question:
        "What subsidies/ capital support are available from the Government?",
      answer:
        "Central Financial Assistance is available for residential sector projects.",
    },
    {
      question: "Is there any Subsidy/Support from State Government?",
      answer:
        "Information on state subsidies can be found on the respective electricity distribution company websites.",
    },
    {
      question: "What is the gross potential of solar power in the country?",
      answer:
        "India has a vast solar energy potential, estimated to be around 750 GW.",
    },
    {
      question: "What is the potential for rooftop solar power in the country?",
      answer: "Estimated at 43 GW by the National Institute of Solar Energy.",
    },
    {
      question:
        "What targets has the Government set for installation of Rooftop Solar Plants?",
      answer: "40,000 MW by 2022.",
    },
    {
      question: "What is net-metering?",
      answer:
        "Net-metering allows self-consumption of generated power with excess exported to the grid.",
    },
    {
      question: "What is net-billing?",
      answer:
        "In net-billing, excess energy is purchased by the DISCOM at a pre-decided tariff.",
    },
    {
      question: "How can I apply for installation of solar rooftop system?",
      answer:
        "Residential consumers and Group Housing Societies can apply through the DISCOMs' online portal.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner
        title="Solar FAQ Hub"
        tagline="Illuminate Your Knowledge: Answers to Your Solar Questions"
      />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />

      <section className="bg-gray-100 pb-16 lg:pb-24">
        <div className="container mx-auto ">
          <div
            className="h-96 flex items-center justify-center flex-col px-5 md:px-20 relative bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${imagefour})` }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            {/* <div className="absolute bg-black w-full h-full opacity-25"></div> */}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mt-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <button
                      className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <strong>{faq.question}</strong>
                      <svg
                        className={`h-6 w-6 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-lg text-gray-700 text-start">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    // <>
    //   <Nav showSideNavHandler={showSideNavHandler} />
    //   <Banner title="From FAQs Page" />
    //   <SideNav
    //     showSideNavHandler={showSideNavHandler}
    //     showSideNav={showSideNav ? "block" : "none"}
    //   />
    //   <section className="bg-gray-100 py-16 lg:py-24">
    //     <div className="container mx-auto px-4 relative">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="text-center">
    //           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    //             under maintenance...
    //           </h2>
    //           <div className="border-red-200 border">
    //             {faqs.map((faq, index) => (
    //               <div key={index}>
    //                 <strong>{faq.question}</strong>
    //                 <p>{faq.answer}</p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <Footer />
    // </>
  );
};

export default Faqs;
