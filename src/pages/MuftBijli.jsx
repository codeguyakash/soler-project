import { useState } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";

const MuftBijli = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const banks = [
    "State Bank of India (SBI)",
    "Central Bank of India",
    "Punjab & Sindh Bank",
    "Canara Bank",
    "Union Bank of India",
    "Punjab National Bank (PNB)",
    "ICICI Bank",
    "HDFC Bank",
    "UCO Bank",
    "IDBI Bank",
    "Choice Fiserv",
    "Bank of Baroda",
    "Indian Bank",
    "Dhanlaxmi Bank",
    "Metafin Cleantech",
    "CreditFair",
  ];
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Muft Bijli Yojana" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="bg-primary ">
        <div className="text-white flex items-center justify-center flex-col py-16 lg:py-24">
          <h1 className="text-3xl font-bold">
            PM Surya Ghar: Muft Bijli Yojana
          </h1>
          <p className="mt-2">
            Lighting up 1 crore households by providing up to 300 units of free
            electricity every month.
          </p>
        </div>
        <div className="App bg-gray-100 text-gray-800">
          <main className="p-6">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Overview
              </h2>
              <p className="max-w-4xl mx-auto">
                With an investment of over Rs. 75,000 crores, the PM Surya Ghar:
                Muft Bijli Yojana aims to promote sustainable development and
                enhance people's wellbeing by providing substantial subsidies
                for the installation of rooftop solar plants.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Subsidy Structure
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">
                  Subsidy for Residential Households
                </h3>
                <ul className="list-disc list-inside bg-blue-100 p-4 rounded-lg mb-4">
                  <li>Rs. 30,000/- per kW up to 2 kW</li>
                  <li>
                    Rs. 18,000/- per kW for additional capacity up to 3 kW
                  </li>
                  <li>
                    Total subsidy for systems larger than 3 kW capped at Rs
                    78,000
                  </li>
                </ul>
                <table className="w-full text-center border-collapse mb-4">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="p-2 border">
                        Average Monthly Electricity Consumption (units)
                      </th>
                      <th className="p-2 border">
                        Suitable Rooftop Solar Plant Capacity
                      </th>
                      <th className="p-2 border">Subsidy Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="p-2 border">0-150</td>
                      <td className="p-2 border">1 – 2 kW</td>
                      <td className="p-2 border">Rs 30,000 to Rs 60,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border">150-300</td>
                      <td className="p-2 border">2 – 3 kW</td>
                      <td className="p-2 border">Rs 60,000 to Rs 78,000</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-2 border">300</td>
                      <td className="p-2 border">Above 3 kW</td>
                      <td className="p-2 border">Rs 78,000</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="text-xl font-semibold mb-2">
                  Subsidy for Group Housing Society/Resident Welfare Association
                  (GHS/RWA)
                </h3>
                <p className="bg-green-100 p-4 rounded-lg">
                  Rs. 18,000 per kW for common facilities, including EV
                  charging, up to 500 kW capacity (@3 kW per house) with the
                  upper limit being inclusive of individual rooftop plants
                  installed by individual residents in the GHS/RWA.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Bank Finance
              </h2>
              <p className="max-w-4xl mx-auto mb-4">
                Choose a bank to view the loan details for PM Surya Ghar Yojana:
              </p>
              <div className="max-w-4xl mx-auto">
                <select className="w-full p-2 border rounded-lg">
                  {banks.map((bank, index) => (
                    <option key={index} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>
              <a
                className="text-center mt-5 font-bold text-primary block"
                href="#"
              >
                👉Click here
              </a>
            </section>
          </main>
        </div>
      </section>
    </>
  );
};

export default MuftBijli;
