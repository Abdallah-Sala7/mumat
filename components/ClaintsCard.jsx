import React from "react";
import { businessmanImg, starIcon } from "../assets";
import Image from "next/image";

const ClaintsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 rounded-lg from-gray-50 via-gray-100 to-gray-200 bg-gradient-to-br border-gray-200 border transition-transform duration-1000 hover:-translate-y-2">
      <div className="flex gap-1.5 items-center mb-4">
        {Array(3)
          .fill()
          .map((_, i) => (
            <Image
              key={i}
              src={starIcon}
              alt="star"
              width={20}
              height={20}
              className="w-4 h-4 object-contain"
            />
          ))}
      </div>

      <p className="text-dark text-sm text-center mb-4">
        The MUMAT is a software development company that provides high-quality
        software services to enterprises with skilled
      </p>

      <div className="flex items-center gap-3 w-full">
        <Image
          src={businessmanImg}
          alt="ceo"
          width={500}
          height={500}
          className="w-14 h-14 object-contain rounded-full"
        />

        <div>
          <h1 className="font-bold text-dark capitalize">John Doe</h1>

          <h2 className="text-sm text-slate-600">software engineer</h2>
        </div>
      </div>
    </div>
  );
};

export default ClaintsCard;
