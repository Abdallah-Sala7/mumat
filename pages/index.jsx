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
  heroGif,
  xdImg,
  figmaImg,
  illustratorImg,
} from "../assets";
import ServicesCard from "../components/ServicesCard";
import ToolsCard from "../components/ToolsCard";

export default function Home() {
  return (
    <>
      <header className="min-h-screen flex items-center py-24">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex-1 text-center px-5 md:pl-0 md:pr-10 md:text-left">
              <h1 className="text-5xl font-bold leading-tight text-dark capitalize mb-8">
                We Can Make Your Ideas A{" "}
                <span className="text-transparent from-dark to-primary bg-gradient-to-br bg-clip-text">
                  Reality
                </span>
              </h1>

              <p className="text-dark text-lg leading-8 mb-8">
                We turn your ideas into reality. Participate with us to make
                your project digital through innovation and technology.
              </p>

              <a
                href="#"
                className={`
                  relative z-10 bg-dark px-8 py-4 rounded-xl shadow-lg overflow-hidden 
                  text-primary font-medium text-lg ransition-colors flex w-fit mx-auto md:mx-0
                  after:absolute after:inset-0 after:-z-10 after:opacity-20 
                  after:from-dark after:to-primary after:bg-gradient-to-r
                  after:translate-x-full after:transition-all hover:after:translate-x-0
                `}
              >
                Get Started
              </a>
            </div>

            <div className="w-full md:flex-1">
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
          <div className="mb-12 m-auto md:w-1/2">
            <h1 className="text-4xl font-bold text-center text-dark capitalize mb-3">
              Why cooperate with MUMAT
            </h1>

            <p className="text-dark text-center">
              Designing your project with MUMAT will certainly be creative,
              different and the reason why you are at the top of your business.{" "}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex-auto w-52 border border-neutral-50 rounded-lg  bg-blue-50 bg-opacity-50 py-5 px-4 transition-transform hover:shadow-sm hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={securityImg}
                  alt="security"
                  width={500}
                  height={500}
                  className="w-8 h-8 object-contain"
                />

                <h2 className="text-xl font-bold text-dark capitalize">
                  security
                </h2>
              </div>

              <p className="text-dark text-sm">
                We strive to provide innovative and effective technological
                solutions to our customers, where we care about their security
                and follow the highest security standards to protect their data.
              </p>
            </div>

            <div className="flex-auto w-52 border border-neutral-50 rounded-lg  bg-dark bg-opacity-5 py-5 px-4 transition-transform hover:shadow-sm hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={deadlineImg}
                  alt="security"
                  width={500}
                  height={500}
                  className="w-8 h-8 object-contain"
                />

                <h2 className="text-xl font-bold text-dark capitalize">
                  Speed
                </h2>
              </div>

              <p className="text-dark text-sm">
                Technology can help improve businesses. Therefore, we are
                committed to providing fast and efficient services to our
                customers to meet their needs as quickly as possible.
              </p>
            </div>

            <div className="flex-auto w-52 border border-neutral-50 rounded-lg  bg-primary bg-opacity-10 py-5 px-4 transition-transform hover:shadow-sm hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={ideaImg}
                  alt="security"
                  width={500}
                  height={500}
                  className="w-8 h-8 object-contain"
                />

                <h2 className="text-xl font-bold text-dark capitalize">
                  innovative solutions
                </h2>
              </div>

              <p className="text-dark text-sm">
                We are distinguished in the field of design and development with
                innovative solutions that we provide to make our projects of the
                highest degree of efficiency and quality
              </p>
            </div>

            <div className="flex-auto w-52 border border-neutral-50 rounded-lg  bg-dark bg-opacity-10 py-5 px-4 transition-transform hover:shadow-sm hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={technicalImg}
                  alt="security"
                  width={500}
                  height={500}
                  className="w-8 h-8 object-contain"
                />

                <h2 className="text-xl font-bold text-dark capitalize">
                  technical support
                </h2>
              </div>

              <p className="text-dark text-sm">
                Always ready to serve our customers and answer all questions and
                inquiries as quickly as possible
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="mb-12 m-auto md:w-1/2">
            <h1 className="text-4xl font-bold text-center text-dark capitalize mb-3">
              Discover Our Services
            </h1>

            <p className="text-dark text-center">
              Turning your ideas into cutting-edge technologies. Turning your
              ideas into cutting-edge technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
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

      <section className="py-6 my-6 bg-dark bg-opacity-5">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="w-full md:w-2/5">
              <h1 className="text-4xl font-bold capitalize mb-8">
                <span className="text-dark">We are </span>
                <span className="from-dark to-primary bg-gradient-to-br bg-clip-text text-transparent">
                  MUMAT
                </span>
              </h1>

              <p className="text-dark mb-8 text-lg leading-8">
                We are a team of professional developers and designers who
                provide the best solutions for your business. We are a team of
                professional developers and designers who provide the best
                solutions for your business.
              </p>

              <p className="text-dark mb-8 text-lg leading-8">
                Our team of specialized experts always succeeds in helping
                clients reach their goals. We’re following the best practice
                framework in software industry to guarantee the best results in
                what our clients get at the end.
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  className={`
                  relative z-10 bg-dark px-8 py-4 rounded-xl shadow-lg overflow-hidden 
                  text-primary font-medium text-lg ransition-colors flex w-fit mx-auto md:mx-0
                  after:absolute after:inset-0 after:-z-10 after:opacity-20 
                  after:from-dark after:to-primary after:bg-gradient-to-r
                  after:translate-x-full after:transition-all hover:after:translate-x-0
                `}
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="w-full md:w-3/5">
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
          <div className="mb-12 m-auto md:w-1/2">
            <h1 className="text-4xl font-bold text-center text-dark capitalize mb-3">
              Technologies and Tools
            </h1>

            <p className="text-dark text-center">
              We use the latest technologies and tools to provide the best
              solutions for our customers
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                design
              </h2>

              <div className="flex flex-wrap gap-8">
                <ToolsCard name={"Adobe XD"} img={xdImg} />
                <ToolsCard img={figmaImg} name={"Figma"} />

                <ToolsCard img={illustratorImg} name={"Illustrator"} />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                design
              </h2>

              <div className="flex flex-wrap gap-8">
                <ToolsCard name={"Adobe XD"} img={xdImg} />
                <ToolsCard img={figmaImg} name={"Figma"} />

                <ToolsCard img={illustratorImg} name={"Illustrator"} />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                design
              </h2>

              <div className="flex flex-wrap gap-8">
                <ToolsCard name={"Adobe XD"} img={xdImg} />
                <ToolsCard img={figmaImg} name={"Figma"} />

                <ToolsCard img={illustratorImg} name={"Illustrator"} />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-xl font-bold text-dark capitalize mb-8">
                design
              </h2>

              <div className="flex flex-wrap gap-8">
                <ToolsCard name={"Adobe XD"} img={xdImg} />
                <ToolsCard img={figmaImg} name={"Figma"} />

                <ToolsCard img={illustratorImg} name={"Illustrator"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
