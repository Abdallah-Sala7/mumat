import React from "react";
import ServicesCard from "../../components/ServicesCard";
import { mobileAppImg, onlineShopImg, webDevImg } from "../../assets";

const Services = () => {
  return (
    <section className="pb-6">
      <div className="container">
        <div className="mb-5 md:mb-8">
          <h1
            className="text-2xl mb-2 font-bold text-dark capitalize md:text-4xl"
            data-aos="fade-right"
          >
            our services
          </h1>

          <p
            className="text-dark md:text-lg"
            data-aos="fade-right"
          >
            Explore our all services we offer to customers
          </p>
        </div>

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
