import Image from "next/image";
import React from "react";
import { rightArrowIcon } from "../assets";

const ProjectCard = ({ right, img }) => {
  return (
    <div
      className={`flex items-center flex-wrap gap-4 justify-center mb-10 last-of-type:mb-0 lg:gap-0 ${
        right && "flex-row-reverse"
      }`}
      data-aos={right ? "fade-left" : "fade-right"}
    >
      <div
        className={`w-48 h-full z-10 md:w-auto md:max-w-xs lg:w-1/3 lg:max-w-max ${
          right ? "-ml-px" : "-mr-px"
        }`}
      >
        <Image
          src={img}
          alt="projectImg"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className={`from-dark to-blue-900 bg-gradient-to-br text-white rounded-xl p-3 md:rounded-3xl md:py-7 md:px-8  xl:my-10 xl:flex-1 ${
          right ? "xl:rounded-r-none" : "xl:rounded-l-none"
        }`}
      >
        <h1 className="text-2xl font-bold text-primary capitalize mb-2 md:text-4xl">
          project one
        </h1>

        <p className="text-gray-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex vitae
          amet, ipsam blanditiis tempora laudantium qui dolores error, illo
          temporibus molestiae atque sunt assumenda, et at vel dolorum dolore
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        </p>

        <div className="my-5 flex flex-wrap gap-y-3 md:my-7">
          <div className="w-1/2 flex-auto">
            <p>Downloads</p>
            <p className="text-lg font-bold"> 161k </p>
          </div>

          <div className="w-1/2 flex-auto">
            <p>Region </p>
            <p className="text-lg font-bold"> 161k </p>
          </div>

          <div className="w-1/2 flex-auto">
            <p>Platforms</p>
            <p className="text-lg font-bold"> 161k </p>
          </div>

          <div className="w-1/2 flex-auto">
            <p>Technology</p>
            <p className="text-lg font-bold"> 161k </p>
          </div>
        </div>

        <a
          href="#"
          className="relative z-10 w-fit flex items-center rounded-md border border-primary px-4 py-2 overflow-hidden group 
          [ after:absolute after:-z-10 after:top-1/2 after:left-1/2 after:transition-all after:duration-300 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:rounded-full after:bg-primary hover:after:w-96 hover:after:h-96 ]"
        >
          <span className="text-primary mr-2 transition font-semibold group-hover:text-dark">
            show more about {"app"}
          </span>

          <Image
            src={rightArrowIcon}
            alt="arrow right"
            className="w-5 h-5 object-contain filterPrimary transition group-hover:invert-0"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
