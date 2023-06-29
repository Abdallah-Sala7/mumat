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
      <div className={`max-w-xs h-full z-10 lg:w-1/3 lg:max-w-max ${right ? "-ml-px": "-mr-px"}`}>
        <Image
          src={img}
          alt="projectImg"
          className="w-full h-full object-contain"
        />
      </div>

      <div
        className={`from-dark to-blue-900 bg-gradient-to-br text-white py-7 px-8 rounded-3xl xl:my-10 xl:flex-1 ${
          right ? "xl:rounded-r-none" : "xl:rounded-l-none"
        }`}
      >
        <h1 className="text-4xl font-bold text-primary capitalize mb-2">
          project one
        </h1>

        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex vitae
          amet, ipsam blanditiis tempora laudantium qui dolores error, illo
          temporibus molestiae atque sunt assumenda, et at vel dolorum dolore
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nobis sed quidem sit obcaecati optio nam totam, esse non debitis
          fugiat est dignissimos, harum, qui at id minus odio porro.
        </p>

        <div className="my-7 flex flex-wrap gap-y-3">
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
