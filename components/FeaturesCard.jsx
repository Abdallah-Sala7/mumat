import Image from "next/image";
import React from "react";

const FeaturesCard = ({ img, color, title, desc }) => {
  return (
    <div
      className={`flex-auto w-52 border border-neutral-50 rounded-lg py-5 px-4 transition-transform hover:-translate-y-1 ${color}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={img}
          alt="security"
          width={500}
          height={500}
          className="w-8 h-8 object-contain"
        />

        <h2 className="text-xl font-bold text-dark capitalize">{title}</h2>
      </div>

      <p className="text-dark text-sm">{desc}</p>
    </div>
  );
};

export default FeaturesCard;
