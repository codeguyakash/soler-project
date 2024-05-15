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
      id: 1,
      question: "What is a Grid Connected Rooftop Solar PV System?",
      answer:
        "In grid connected rooftop small Solar Photo Voltaic (SPV) system, the DC (Direct Current) power generated from solar panel is converted to AC (Alternating Current) power using power conditioning unit/Inverter and is fed to the grid. Conversion to AC is desirable as AC is the most commonly used and most preferred electric power for household equipment, office, and buildings, etc. The major use of DC is to supply power to electrical devices and also to charge batteries.",
    },
    {
      id: 2,
      question:
        "What are the main components of a Grid Connected Rooftop SPV system?",
      answer:
        "Solar PV Modules/Solar Panels, Inverter, Module mounting structure, Bi-direction Meters, Balance of System.",
    },
    {
      id: 3,
      question:
        "How much area is required for a One kWp (kilowatt peak) rooftop Solar PV system?",
      answer:
        "About 10-12 Sq.mt of shadow-free area is required to set up One kWp Grid Connected Rooftop Solar PV System.",
    },
    {
      id: 4,
      question:
        "What types of roofs are suitable for Rooftop Solar (RTS) system?",
      answer:
        "Rooftop SPV systems can be installed on any type of roof having sufficient load bearing capacity.",
    },
    {
      id: 5,
      question:
        "What is the daily energy generated from a One kWp Solar power plant?",
      answer:
        "On a clear sunny day, One kWp solar power plant can generate 4 to 5.5 units in a day.",
    },
    {
      id: 6,
      question: "What are the advantages of Grid Connected Rooftop SPV system?",
      answer:
        "Saving on electricity bill by the consumer, Utilization of available vacant roof space; no additional land required, Low gestation period, No additional requirement of transmission and distribution (T&D) lines, Long-term energy and ecological security by reduction in carbon emission, Better management of daytime peak loads by DISCOM/ utility.",
    },
    {
      id: 7,
      question:
        "What is the average cost of a Grid Connected Rooftop SPV system?",
      answer:
        "The current benchmark cost of grid connected rooftop solar systems can be seen in notification section at https://solarrooftop.gov.in/notifications/view.",
    },
    {
      id: 8,
      question:
        "What are the subsidies/ capital support available from the Government?",
      answer:
        "Central Financial Assistance (CFA) is available only for residential sector grid connected solar rooftop projects. For other sectors e.g. government, institutional, social, commercial, industrial etc., CFA is not available.",
    },
    {
      id: 9,
      question: "Is there any Subsidy/Support from State Government?",
      answer:
        "Information on state subsidies can be seen on the website of the concerned electricity distribution company. The rooftop solar portals of electricity distribution companies can be assessed at: https://solarrooftop.gov.in/grid_others/discomPortalLink.",
    },
    {
      id: 10,
      question: "What is the gross potential of solar power in the country?",
      answer:
        "India is endowed with vast solar energy potential. About 5,000 trillion kWh per year energy is incident over India’s land area with most parts receiving 3-5 kWh per sq. m per day. Based upon the availability of land and solar radiation, the potential of solar power in the country has been assessed to be around 750 GW.",
    },
    {
      id: 11,
      question: "What is the potential for rooftop solar power in the country?",
      answer:
        "National Institute of Solar Energy (NISE), an autonomous institute under the Ministry of New and Renewable Energy, has estimated a potential of 43 GW for Grid Connected Rooftop Solar in the country.",
    },
    {
      id: 12,
      question:
        "What targets has the Government kept for installation of Rooftop Solar Plants in the country?",
      answer:
        "Government of India has set the target of installing 40,000 MW of Rooftop Solar Power by the year 2022. For State-wise tentative targets, click here.",
    },
    {
      id: 13,
      question:
        "What is the State-wise breakup of sanctioned capacity under the Phase-II RTS scheme?",
      answer:
        "To know about the details on capacity sanctioned under Phase-II of RTS scheme, click here.",
    },
    {
      id: 14,
      question: "What is net-metering?",
      answer:
        "All SPV systems generate power only during daytime when sun is available. In net-metered systems, the generated power is utilized for self-consumption, and excess power is exported to the grid as long as grid is available. In case, where solar power is not sufficient due to cloud cover etc., power is drawn from the grid to power the loads. A bi-directional or net meter records the energy flow in both the directions and at the end of billing period net energy used is calculated. The beneficiary has to pay for only the net energy used.",
    },
    {
      id: 15,
      question: "What is net-billing?",
      answer:
        "Connections in net-billing RTS are similar to net-metering. However, at the end of the billing cycle (normally a month) any excess energy in the grid shall not be carried forward like in net metering, but shall be purchased by the DISCOM as per pre-decided tariff. Therefore, energy banking in the grid is only within a billing cycle.",
    },
    {
      id: 16,
      question: "How can I apply for installation of solar rooftop system?",
      answer:
        "Residential consumers and Group Housing Society can apply for installation of solar rooftop system through the online portal of DISCOMs. The link for the online portal of DISCOMs is https://solarrooftop.gov.in/grid_others/discomPortalLink.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <>
      <div className="bg-gray-100">
        <Nav showSideNavHandler={showSideNavHandler} />
        <Banner
          title="Solar FAQ Hub"
          tagline="Illuminate Your Knowledge: Answers to Your Solar Questions"
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
            Frequently Asked Questions
          </h2>
          <div className="absolute bg-black w-full h-full opacity-25"></div>
        </div>
        <section className="bg-gray-100 pb-16 lg:pb-24 w-auto px-4">
          {/* <div
          className="h-96 flex items-center justify-center flex-col relative bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${imagefour})` }}
        >

        </div> */}
          <div className="container mx-auto ">
            <div className="max-w-7xl mx-auto ">
              <div className="text-center">
                <div className="mt-8">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="mb-4 rounded-lg shadow-md bg-white p-4"
                    >
                      <button
                        className="flex justify-between items-center w-full bg-white rounded-lg focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                      >
                        <strong className="text-[18px]">{faq.question}</strong>
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
                            d="M12 5v14m-7-7h14"
                          />
                        </svg>
                      </button>
                      {openIndex === index && (
                        <p className="mt-2 text-[16px] text-gray-700 text-start">
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
      </div>
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
