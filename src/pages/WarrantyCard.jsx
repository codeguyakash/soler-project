import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import backgroundImage from "../assets/images/bg-line-2.png";

const WarrantyCard = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = `/path/to/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner
        title="Comprehensive Solar Warranty Information"
        tagline="Protecting Your Investment in Solar Technology"
      />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />

      <section
        className="bg-gray-100 py-16 lg:py-24 bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="max-w-4xl mx-auto my-2 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Warranty Card</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="flex items-start justify-between border">
                <th className="py-2 px-4 ">Component</th>
                <th className="py-2 px-4 ">File</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex items-center justify-between border">
                <td className="py-2 px-4">Solar Module</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => handleDownload("solar-module.pdf")}
                  >
                    Download PDF
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDownload("solar-module.jpeg")}
                  >
                    Download JPEG
                  </button>
                </td>
              </tr>
              <tr className="flex items-center justify-between border">
                <td className="py-2 px-4">Inverter</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => handleDownload("inverter.pdf")}
                  >
                    Download PDF
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDownload("inverter.jpeg")}
                  >
                    Download JPEG
                  </button>
                </td>
              </tr>
              <tr className="flex items-center justify-between border">
                <td className="py-2 px-4">Battery</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => handleDownload("battery.pdf")}
                  >
                    Download PDF
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDownload("battery.jpeg")}
                  >
                    Download JPEG
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WarrantyCard;
