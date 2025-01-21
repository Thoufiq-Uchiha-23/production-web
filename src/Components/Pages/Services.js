import React from "react";
import { service } from "../../assets";
import { consults, markets, productions } from "../../constants";

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
      {/* Digital Marketing */}
      <div className="flex justify-center flex-col items-center w-full h-auto px-10 md:px-20 py-10 lg:px-40 lg:py-20">
        <h1 className="text-[21px] md:text-2xl lg:text-4xl font-light py-4 text-center">
          Digital Marketing
        </h1>
        <div className="w-full flex justify-between items-center">
          <div className="w-full py-7 h-auto flex items-center justify-evenly flex-wrap lg:justify-center gap-3 lg:gap-7 relative">
            {markets.map((market) => (
              <div
                key={market.id}
                className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg text-center w-[120px] md:w-[190px] lg:w-[380px] h-auto duration-500 transition-all ease-in-out gap-2 p-2 lg:p-4 rounded-[10px]`}
              >
                <img src={market.src} alt={market.title} />
                <h4 className="text-base md:text-sm lg:text-[27px] py-2 font-light">
                  {market.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 mt-3 px-6 py-1 lg:px-9 lg:py-2 rounded text-sm lg:text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore
        </button>
      </div>
      {/* Creative Productions */}
      <div className="flex justify-center flex-col items-center w-full h-auto px-10 md:px-20 py-10 lg:px-40 lg:py-20">
        <h1 className="text-[21px] md:text-2xl lg:text-4xl font-light py-4 text-center">
          Creative Productions
        </h1>
        <div className="w-full flex justify-between items-center">
          <div className="w-full py-7 h-auto flex items-center justify-evenly flex-wrap lg:justify-center gap-3 lg:gap-7 relative">
            {productions.map((product) => (
              <div
                key={product.id}
                className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg text-center w-[120px] md:w-[190px] lg:w-[380px] h-auto duration-500 transition-all ease-in-out gap-2 p-2 lg:p-4 rounded-[10px]`}
              >
                <img src={product.src} alt={product.title} />
                <h4 className="text-base md:text-sm lg:text-[27px] py-2 font-light">
                  {product.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 mt-3 px-6 py-1 lg:px-9 lg:py-2 rounded text-sm lg:text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore
        </button>
      </div>
      {/* Consulting */}
      <div className="flex justify-center flex-col items-center w-full h-auto px-10 md:px-20 py-10 lg:px-40 lg:py-20 lg:mb-20">
        <h1 className="text-[21px] md:text-2xl lg:text-4xl font-light py-4 text-center">
          Consulting
        </h1>
        <div className="w-full flex justify-between items-center">
          <div className="w-full py-7 h-auto flex items-center justify-evenly flex-wrap lg:justify-center gap-3 lg:gap-7 relative">
            {consults.map((consult) => (
              <div
                key={consult.id}
                className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg text-center w-[120px] md:w-[190px] lg:w-[380px] h-auto duration-500 transition-all ease-in-out gap-2 p-2 lg:p-4 rounded-[10px]`}
              >
                <img src={consult.src} alt={consult.title} />
                <h4 className="text-base md:text-sm lg:text-[27px] py-2 font-light whitespace-nowrap">
                  {consult.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 mt-3 px-6 py-1 lg:px-9 lg:py-2 rounded text-sm lg:text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Services;
