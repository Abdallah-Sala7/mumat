import Image from "next/image";
import React from "react";
import { about1Gif, about2Gif, about3Gif, starIcon } from "../assets";
import ClaintsCard from "../components/ClaintsCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const About = () => {
  return (
    <section className="pb-6">
      <div className="container">
        <div className="mb-5 md:mb-8">
          <h1
            className="text-2xl mb-2 font-bold text-dark capitalize md:text-4xl"
            data-aos="fade-right"
          >
            About MUMAT
          </h1>

          <p className="text-dark md:text-lg" data-aos="fade-right">
            Get to know us better and see what we can do for you
          </p>
        </div>

        <div className="flex gap-5 flex-wrap items-center mb-8 ">
          <div className="w-full md:flex-1" data-aos="fade-up">
            <h2 className="text-xl mb-1 font-medium text-dark capitalize md:text-2xl md:mb-3">
              why choose us ?
            </h2>

            <p className="text-slate-500  md:text-lg md:leading-8">
              we are a team of highly skilled and experienced developers who are
              capable of developing any kind of software. We are a team of
              highly skilled and experienced developers who are capable of
              developing any kind of software.
            </p>
          </div>

          <div className="w-full md:flex-1" data-aos="fade-up">
            <Image
              src={about3Gif}
              alt="about"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex gap-5 flex-wrap-reverse items-center mb-8">
          <div className="w-full md:flex-1" data-aos="fade-up">
            <Image
              src={about1Gif}
              alt="about"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:flex-1" data-aos="fade-up">
            <h2 className="text-xl mb-1 font-medium text-dark capitalize md:text-2xl md:mb-3">
              Unlimited skills for your projects
            </h2>

            <p className="text-slate-500  md:text-lg md:leading-8">
              The MUMAT is a software development company that provides
              high-quality software services to enterprises with skilled
              developers. We help our clients to build custom software
              applications and assist them throughout the entire software
              development life cycle, including project management, systems
              analysis and design, development, implementation, training and
              application maintenance.
            </p>
          </div>
        </div>

        <div className="mb-8" data-aos="fade-up">
          <h2 className="text-xl font-medium text-dark capitalize md:text-2xl">
            claints say about us
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              // when window width is >= 640px
              668: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            pagination={true}
            modules={[Pagination]}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <ClaintsCard />
            </SwiperSlide>

            <SwiperSlide>
              <ClaintsCard />
            </SwiperSlide>

            <SwiperSlide>
              <ClaintsCard />
            </SwiperSlide>

            <SwiperSlide>
              <ClaintsCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
