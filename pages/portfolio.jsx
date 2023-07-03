import React, { useState } from "react";
import PortfolioTab from "../components/PortfolioTab";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const getActiveTab = (val) => {
    setActiveTab(val);
  };

  return (
    <section className="pb-6">
      <div className="container">
        <div className="mb-5 md:mb-8">
          <h1
            className="text-2xl mb-2 font-bold text-dark capitalize md:text-4xl"
            data-aos="fade-right"
          >
            our portfolio
          </h1>

          <p className="text-dark md:text-lg" data-aos="fade-right">
            Check out our portfolio and see what we can do for you!
          </p>
        </div>

        <PortfolioTab handleClick={getActiveTab} />

        <div className="min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeTab === 0 ? (
              <>
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
              </>
            ) : activeTab === 1 ? (
              <>
                <PortfolioCard />
                <PortfolioCard />
              </>
            ) : activeTab === 2 ? (
              <>
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
              </>
            ) : (
              <PortfolioCard />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
