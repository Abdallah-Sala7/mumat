import Image from 'next/image';
import React from 'react'

const ServicesCard = ({servicesImg, desc, title}) => {
  return (
    <a
      href="#"
      className="relative border border-blue-50 rounded-lg bg-primary bg-opacity-5 py-5 px-4 transition-colors hover:bg-opacity-10 group"
      data-aos="fade-up"
    >
      <div className="mb-6">
        <Image
          src={servicesImg}
          alt={title}
          width={500}
          height={500}
          className="w-16 h-16 object-contain"
        />
      </div>

      <h2 className="text-xl font-bold text-dark capitalize mb-3">{title}</h2>

      <p className="text-dark text-sm">{desc}</p>

      <div className="absolute top-4 right-4 opacity-20 scale-0 transition-transform duration-300 group-hover:scale-100">
        <Image
          src={servicesImg}
          alt={title}
          width={500}
          height={500}
          className="w-24 h-24 object-contain"
        />
      </div>
    </a>
  );
}

export default ServicesCard