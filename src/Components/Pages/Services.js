import React from "react";
import { service } from "../../assets";
import { services } from "../../constants";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto overflow-x-hidden">
      <div
        className="relative flex flex-col justify-center items-center w-full h-[14vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
        style={{ backgroundImage: `url(${service})` }}
      >
        <h1 className="text-center text-[21px] font-normal leading-[172%] text-primary-yellow md:text-[47px]">
          Discover Our Services
        </h1>
        <p className="text-xs md:text-sm lg:text-[21px] text-white font-extralight px-5 md:font-semilight lg:leading-8">
          Explore our Services in production, marketing, and consulting
        </p>
      </div>
      <div className="flex justify-center flex-col items-center w-full h-auto px-10 md:px-20 py-10 lg:px-40 lg:py-20">
              <h1 className="text-[21px] md:text-2xl lg:text-4xl font-light py-4 text-center">Our Services</h1>
              <div className="w-full flex justify-between items-center">
                <div className="w-full py-7 h-auto flex items-center justify-evenly md:flex-nowrap lg:justify-center gap-3 lg:gap-7 flex-wrap relative">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg text-center w-[120px] md:w-[190px] lg:w-[380px] h-auto duration-500 transition-all ease-in-out gap-2 p-2 lg:p-4 rounded-[10px]`}
                    >
                      <img src={service.src} alt={service.title} />
                      <h4 className="text-base md:text-sm lg:text-3xl font-light">{service.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <button className="bg-yellow-500 mt-3 px-6 py-1 lg:px-9 lg:py-2 rounded text-sm lg:text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
                Explore All
              </button>
            </div>
    </div>
  );
};

export default Services;
