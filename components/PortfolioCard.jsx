import Image from "next/image";
import React from "react";
import { glassesIcon, pervieoImg } from "../assets";

const PortfolioCard = () => {
  return (
    <div
      className="relative h-56 rounded-md overflow-hidden group"
      data-aos="fade-up"
    >
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-evenly p-5 group opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition duration-300"
      >
        <h1 className="font-semibold text-white text-xl capitalize transition -translate-y-12 opacity-0 duration-700 group-hover:opacity-100 group-hover:translate-y-0">
          project name
        </h1>

        <span className="transition translate-y-12 duration-700 group-hover:opacity-100 group-hover:translate-y-0">
          <Image
            src={glassesIcon}
            alt="pervieo glasses"
            width={500}
            height={500}
            className="w-14 h-14 object-contain invert"
          />
        </span>
      </a>

      <Image
        src={pervieoImg}
        alt=""
        className="w-full h-full object-cover object-top transition-all duration-[3s] group-hover:object-bottom"
      />
    </div>
  );
};

export default PortfolioCard;
