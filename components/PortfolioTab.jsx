import React, { useState } from "react";

const PortfolioTab = ({ handleClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (val) => {
    handleClick(val);
    setActiveTab(val);
  };
  return (
    <div
      className="flex items-center gap-4 flex-wrap justify-center mb-6"
      data-aos="fade-up"
    >
      <button
        className={`px-5 py-2 rounded-full text-dark border border-dark hover:bg-dark hover:text-white transition-colors duration-500 ${
          activeTab === 0 && "bg-dark text-white"
        }`}
        onClick={() => handleActiveTab(0)}
      >
        All
      </button>

      <button
        className={`px-5 py-2 rounded-full text-dark border border-dark hover:bg-dark hover:text-white transition-colors duration-500 ${
          activeTab === 1 && "bg-dark text-white"
        }`}
        onClick={() => handleActiveTab(1)}
      >
        Web
      </button>

      <button
        className={`px-5 py-2 rounded-full text-dark border border-dark hover:bg-dark hover:text-white transition-colors duration-500 ${
          activeTab === 2 && "bg-dark text-white"
        }`}
        onClick={() => handleActiveTab(2)}
      >
        Mobile Apps
      </button>

      <button
        className={`px-5 py-2 rounded-full text-dark border border-dark hover:bg-dark hover:text-white transition-colors duration-500 ${
          activeTab === 3 && "bg-dark text-white"
        }`}
        onClick={() => handleActiveTab(3)}
      >
        web Apps
      </button>
    </div>
  );
};

export default PortfolioTab;
