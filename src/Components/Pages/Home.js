import React from "react";
import { designdot, home } from "../../assets";
import { portfolios, services, stats } from "../../constants";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mx-auto overflow-x-hidden">
      {/* HEADER SECTION */}
      <div
        className="text-center w-full flex justify-evenly items-center h-[200px] md:h-[400px] lg:h-[600px] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="flex justify-between items-center md:gap-10 lg:gap-52">
          <IoIosArrowBack className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] text-white" />
          <div className="flex flex-col items-center justify-center gap-5 w-full relative z-10">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-normal capitalize text-yellow-500">
              Crafting Stories That Matter
            </h1>
            <p className="text-xs md:text-sm lg:text-xl text-white font-extralight px-5 md:font-semilight lg:leading-8">
              <p>
                From planning to delivery, we’re here to turn your ideas into
                impactful productions.
              </p>
              <p>Your journey starts here.</p>
            </p>
            <button className="bg-yellow-500 px-3 md:px-5 lg:px-7 py-1 lg:py-2 rounded text-xs lg:text-base hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
              Explore
            </button>
          </div>
          <IoIosArrowForward className="w-[16px] h-[16px] md:w-[50px] md:h-[50px] text-white" />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex items-center justify-center w-full mx-auto relative px-7 md:px-20 py-10 lg:px-40 lg:py-20 gap-10">
        <div className="w-[450px] md:w-[600px] lg:w-[1000px] absolute left-0 top-[-50px] lg:top-[-120px] z-0">
          <img
            src={designdot}
            alt="design background"
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center justify-center h-auto z-10">
          <div className="w-full justify-evenly flex flex-col-reverse md:flex-row items-center md:flex-nowrap flex-wrap">
            <div className="w-full lg:w-[950px] text-center md:text-start px-3 md:px-0">
              <h1 className="text-[21px] md:text-2xl lg:text-4xl font-light py-4">
                About Us
              </h1>
              <p className="text-xs md:text-sm lg:text-xl pb-7 lg:leading-8 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dapibus placerat velit. Donec in porttitor elit. Suspendisse
                accumsan iaculis tincidunt. placerat velit. Donec in porttitor
                elit. Suspendisse accumsan iaculis tincidunt.{" "}
              </p>
              <button className="bg-yellow-500 px-3 py-1 lg:px-5 lg:py-2 rounded text-sm lg:text-lg hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
                Read More
              </button>
            </div>

            <div className="w-full flex justify-end items-center">
              <div className="w-full md:w-[270px] lg:w-[340px] gap-3 md:gap-0 md:h-auto flex items-center justify-between flex-wrap relative">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className={`flex flex-col items-center relative justify-evenly rounded text-center w-[152px] h-[129px] md:w-[120px] lg:w-[150px] md:h-auto bg-[#D9D9D92E]/18 border-[2px] border-[#0000001A] hover:border-none hover:shadow-md hover:bg-white duration-500 transition-all ease-in-out lg:gap-2 p-4 top-mar ${
                      stat.id === 1 && "bg-white"
                    }`}
                  >
                    <h4 className="text-3xl md:text-2xl lg:text-4xl font-medium md:font-light">
                      {stat.title}
                    </h4>
                    <p className="text-xs lg:text-sm w-[80px]">
                      {stat.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <div className="flex justify-center flex-col items-center w-full h-auto px-10 md:px-20 py-10 lg:px-40 lg:py-20">
        <h1 className="text-[21px] md:text-2xl lg:text-4xl font-light py-4 text-center">
          Our Services
        </h1>
        <div className="w-full flex justify-between items-center">
          <div className="w-full py-7 h-auto flex items-center justify-evenly md:flex-nowrap lg:justify-center gap-3 lg:gap-7 flex-wrap relative">
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg text-center w-[120px] md:w-[190px] lg:w-[380px] h-auto duration-500 transition-all ease-in-out gap-2 p-2 lg:p-4 rounded-[10px]`}
              >
                <img src={service.src} alt={service.title} />
                <h4 className="text-base md:text-sm lg:text-3xl font-light">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 mt-3 px-6 py-1 lg:px-9 lg:py-2 rounded text-sm lg:text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore All
        </button>
      </div>
      {/* PORTFOLIO */}
      <div className="flex justify-center relative flex-col items-center w-full h-auto px-20 py-10 lg:px-40 lg:py-20">
        <h1 className="text-2xl lg:text-4xl font-light py-4 text-center">
          Portfolio
        </h1>
        <div className="flex justify-between items-center w-full lg:gap-20 z-10">
          <IoIosArrowBack className="w-[30px] h-[30px]" />

          <div className="w-full py-7 h-auto flex items-center justify-evenly gap-7 lg:gap-10 flex-wrap relative">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className={`flex flex-col items-center relative justify-evenly hover:shadow-lg overflow-hidden hover:scale-125 duration-500 transition-all ease-in-out gap-2 rounded-[10px]`}
              >
                <img
                  src={portfolio.src}
                  alt={portfolio.title}
                  className="object-fit w-[200px] h-[130px] lg:w-[300px] lg:h-[200px] object-center object-cover"
                />
              </div>
            ))}
          </div>

          <IoIosArrowForward className="w-[30px] h-[30px]" />
        </div>
        <button className="bg-yellow-500 mt-3 px-6 py-1 lg:px-9 lg:py-2 rounded text-sm lg:text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore All
        </button>
        <div className="w-[600px] lg:w-[1000px] absolute right-0 bottom-0 -z-10 rotate-180">
          <img
            src={designdot}
            alt="design background"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
