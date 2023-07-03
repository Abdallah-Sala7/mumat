import Image from "next/image";

import {
  securityImg,
  technicalImg,
  deadlineImg,
  ideaImg,
  heroImg,
  mobileAppImg,
  webDevImg,
  onlineShopImg,
  webDevGif,
  xdImg,
  figmaImg,
  illustratorImg,
  reactImg,
  vueImg,
  javaScriptImg,
  flutterImg,
  dotnetImg,
  pythonImg,
  androidStudio,
  projectImg,
  project2Img,
} from "../assets";
import ServicesCard from "../components/ServicesCard";
import ToolsCard from "../components/ToolsCard";
import FeaturesCard from "../components/FeaturesCard";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <header className="pb-6">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex-1 text-center md:pl-0 md:pr-10 md:text-left">
              <h1
                className="text-3xl mb-5 font-bold text-dark capitalize md:mb-8 md:text-5xl"
                data-aos="fade-right"
              >
                We Can Make Your Ideas A{" "}
                <span
                  className="text-transparent from-dark to-primary bg-gradient-to-br bg-clip-text"
                  data-aos="fade-right"
                >
                  Reality
                </span>
              </h1>

              <p
                className="mb-5 text-dark leading-7 md:text-lg md:mb-8"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                We turn your ideas into reality. Participate with us to make
                your project digital through innovation and technology.
              </p>

              <a
                href="#"
                data-aos="fade-right"
                data-aos-delay="600"
                className={`
                  relative z-10 bg-dark px-6 py-3  rounded-xl shadow-lg overflow-hidden 
                  text-primary font-medium text-lg ransition-colors flex w-fit mx-auto md:mx-0
                  md:px-8 md:py-4 after:absolute after:inset-0 after:-z-10 after:opacity-20 
                  after:from-dark after:to-primary after:bg-gradient-to-r
                  after:translate-x-full after:transition-all hover:after:translate-x-0 after:duration-700
                `}
              >
                Get Started
              </a>
            </div>

            <div className="w-full md:flex-1" data-aos="fade-up">
              <Image
                src={heroImg}
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-6">
        <div className="container">
          <div className="mb-12 m-auto md:w-1/2" data-aos="zoom-in">
            <h1 className="text-2xl font-bold text-center text-dark capitalize mb-4 md:text-4xl">
              Why cooperate with MUMAT
            </h1>

            <p className="text-dark text-center text-sm sm:text-base">
              Designing your project with MUMAT will certainly be creative,
              different and the reason why you are at the top of your business.{" "}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <FeaturesCard
              img={securityImg}
              color="bg-blue-50 bg-opacity-50"
              title="security"
              desc="We strive to provide innovative and effective technological solutions to our customers, where we care about their security and follow the highest security standards to protect their data."
            />

            <FeaturesCard
              img={deadlineImg}
              color="bg-dark bg-opacity-5"
              title="Speed"
              desc="Technology can help improve businesses. Therefore, we are
                committed to providing fast and efficient services to our
                customers to meet their needs as quickly as possible."
            />

            <FeaturesCard
              img={ideaImg}
              color="bg-primary bg-opacity-10"
              title="innovative solutions"
              desc="We are distinguished in the field of design and development with
                innovative solutions that we provide to make our projects of the
                highest degree of efficiency and quality"
            />

            <FeaturesCard
              img={technicalImg}
              color="bg-dark bg-opacity-10"
              title="technical support"
              desc="Always ready to serve our customers and answer all questions and
                inquiries as quickly as possible"
            />
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="mb-12 m-auto md:w-1/2" data-aos="zoom-in">
            <h1 className="text-2xl font-bold text-center text-dark capitalize mb-4 md:text-4xl">
              Discover Our Services
            </h1>

            <p className="text-dark text-center text-sm sm:text-base">
              Turning your ideas into cutting-edge technologies. Turning your
              ideas into cutting-edge technologies
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
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="mb-12 m-auto md:w-1/2" data-aos="zoom-in">
            <h1 className="text-2xl font-bold text-center text-dark capitalize mb-4 md:text-4xl">
              Discover Our Services
            </h1>

            <p className="text-dark text-center text-sm sm:text-base">
              Turning your ideas into cutting-edge technologies. Turning your
              ideas into cutting-edge technologies
            </p>
          </div>

          <ProjectCard img={projectImg} />
          <ProjectCard img={project2Img} right />
          <ProjectCard img={projectImg} />
        </div>
      </section>

      <section className="py-6 my-6 bg-dark bg-opacity-5">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="w-full md:w-2/5">
              <h1
                className="text-4xl font-bold capitalize mb-5 md:mb-8"
                data-aos="fade-right"
              >
                <span className="text-dark">We are </span>
                <span className="from-dark to-primary bg-gradient-to-br bg-clip-text text-transparent">
                  MUMAT
                </span>
              </h1>

              <p
                className="text-dark mb-5 md:mb-8 md:text-lg md:leading-8"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                We are a team of professional developers and designers who
                provide the best solutions for your business. We are a team of
                professional developers and designers who provide the best
                solutions for your business.
              </p>

              <p
                className="text-dark mb-5 md:mb-8 md:text-lg md:leading-8"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Our team of specialized experts always succeeds in helping
                clients reach their goals. We’re following the best practice
                framework in software industry to guarantee the best results in
                what our clients get at the end.
              </p>

              <a
                href="#"
                data-aos="fade-right"
                data-aos-delay="450"
                className={`
                  relative z-10 bg-dark px-6 py-3  rounded-xl shadow-lg overflow-hidden 
                  text-primary font-medium text-lg ransition-colors flex w-fit
                  md:px-8 md:py-4 after:absolute after:inset-0 after:-z-10 after:opacity-20 
                  after:from-dark after:to-primary after:bg-gradient-to-r
                  after:translate-x-full after:transition-all hover:after:translate-x-0 after:duration-700
                `}
              >
                Get Started
              </a>
            </div>

            <div className="w-full md:w-3/5" data-aos="fade-left">
              <Image
                src={webDevGif}
                alt="about"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="mb-12 m-auto md:w-1/2" data-aos="zoom-in">
            <h1 className="text-2xl font-bold text-center text-dark capitalize mb-4 md:text-4xl">
              Technologies and Tools
            </h1>

            <p className="text-dark text-center text-sm sm:text-base">
              We use the latest technologies and tools to provide the best
              solutions for our customers
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                design
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard name={"Adobe XD"} img={xdImg} />
                <ToolsCard img={figmaImg} name={"Figma"} />
                <ToolsCard img={illustratorImg} name={"Illustrator"} />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                web development
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard name={"react"} img={reactImg} />
                <ToolsCard img={vueImg} name={"vue"} />

                <ToolsCard img={javaScriptImg} name={"javascript"} />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                mobile development
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard name={"flutter"} img={flutterImg} />
                <ToolsCard img={reactImg} name={"react native"} />
                <ToolsCard img={androidStudio} name={"android studio"} />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                backend development
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard name={"dot net"} img={dotnetImg} />
                <ToolsCard img={pythonImg} name={"python"} />

                <ToolsCard img={illustratorImg} name={"Illustrator"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
