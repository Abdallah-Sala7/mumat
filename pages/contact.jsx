import React from "react";
import ServicesSelect from "../components/ServicesSelect";

const Contact = () => {
  return (
    <section className="pb-6">
      <div className="container">
        <div className="mb-5 md:mb-8">
          <h1
            className="text-2xl mb-2 font-bold text-dark capitalize md:text-3xl"
            data-aos="fade-right"
          >
            Looking for a specific service?
          </h1>

          <p className="text-dark md:text-lg" data-aos="fade-right">
            Contact us at MUMAT and select the service you want..
          </p>
        </div>

        <div className="flex gap-10 flex-wrap-reverse">
          <div className="w-full md:flex-1">
            <form action="">
              <div className="mb-4" data-aos="fade-right">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 text-lg text-dark border border-dark border-opacity-20 focus:border-opacity-60 transition rounded-md outline-none"
                />
              </div>
              <div className="mb-4" data-aos="fade-right">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 text-lg text-dark border border-dark border-opacity-20 focus:border-opacity-60 transition rounded-md outline-none"
                />
              </div>
              <div className="mb-4" data-aos="fade-right">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 text-lg text-dark border border-dark border-opacity-20 focus:border-opacity-60 transition rounded-md outline-none"
                />
              </div>
              <div className="mb-4" data-aos="fade-right">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="w-full p-3 text-lg text-dark border border-dark border-opacity-20 focus:border-opacity-60 transition rounded-md outline-none resize-none h-52"
                ></textarea>
              </div>
              <div data-aos="fade-up">
                <a
                  href="#"
                  className={`
                  relative z-10 bg-dark p-3 rounded-xl overflow-hidden 
                  text-primary font-medium text-lg justify-center ransition-colors flex
                  after:absolute after:inset-0 after:-z-10 after:opacity-20 
                  after:from-dark after:to-primary after:bg-gradient-to-r
                  after:translate-x-full after:transition-all hover:after:translate-x-0
                  after:duration-700
                `}
                >
                  Send message
                </a>
              </div>
            </form>
          </div>

          <div className="w-full md:flex-1">
            <ServicesSelect />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
