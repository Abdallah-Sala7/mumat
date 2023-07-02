import React from "react";
import ServicesCard from "../../components/ServicesCard";
import { mobileAppImg, onlineShopImg, webDevImg } from "../../assets";

const Services = () => {
  return (
    <section className="pb-6">
      <div className="container">
        <h1
          className="text-2xl mb-2 font-bold text-dark capitalize md:text-4xl"
          data-aos="fade-right"
        >
         Services
        </h1>

        <h2
          className="text-lg mb-5 font-medium text-dark capitalize md:mb-8 md:text-xl"
          data-aos="fade-right"
        >
          Explore Our All Services We Offer to customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServicesCard
            title={"Web Applications"}
            desc={
              "There is no doubt that websites are the key component for any company to reach its targeted markets and ....           "
            }
            servicesImg={webDevImg}
          />

          <ServicesCard
            title={"Mobile Applications"}
            desc={
              "Mobile applications are the easiest way to communicate with your clients. With the rapidly increasing life pace, mobile applications ...."
            }
            servicesImg={mobileAppImg}
          />

          <ServicesCard
            title={"E-Commerce"}
            desc={
              "We develop E-Commerce portals in open source platforms such as PHP, WordPress and other platforms with custom User Interfaces ...."
            }
            servicesImg={onlineShopImg}
          />
          <ServicesCard
            title={"Web Applications"}
            desc={
              "There is no doubt that websites are the key component for any company to reach its targeted markets and ....           "
            }
            servicesImg={webDevImg}
          />

          <ServicesCard
            title={"Mobile Applications"}
            desc={
              "Mobile applications are the easiest way to communicate with your clients. With the rapidly increasing life pace, mobile applications ...."
            }
            servicesImg={mobileAppImg}
          />

          <ServicesCard
            title={"E-Commerce"}
            desc={
              "We develop E-Commerce portals in open source platforms such as PHP, WordPress and other platforms with custom User Interfaces ...."
            }
            servicesImg={onlineShopImg}
          />
          <ServicesCard
            title={"Web Applications"}
            desc={
              "There is no doubt that websites are the key component for any company to reach its targeted markets and ....           "
            }
            servicesImg={webDevImg}
          />

          <ServicesCard
            title={"Mobile Applications"}
            desc={
              "Mobile applications are the easiest way to communicate with your clients. With the rapidly increasing life pace, mobile applications ...."
            }
            servicesImg={mobileAppImg}
          />

          <ServicesCard
            title={"E-Commerce"}
            desc={
              "We develop E-Commerce portals in open source platforms such as PHP, WordPress and other platforms with custom User Interfaces ...."
            }
            servicesImg={onlineShopImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
