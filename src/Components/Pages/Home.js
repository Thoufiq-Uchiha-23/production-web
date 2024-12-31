import React from "react";
import { home } from "../../assets";
import { portfolios, services, stats } from "../../constants";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mx-auto">
      {/* HEADER SECTION */}
      <div
        className="text-center w-full flex justify-center items-center h-[600px] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="flex flex-col items-center justify-center gap-5 w-full relative z-10">
          <h1 className="text-4xl font-light capitalize text-yellow-500">
            Crafting Stories That Matter
          </h1>
          <p className="text-xl text-white font-semilight leading-8">
            <p>
              From planning to delivery, we’re here to turn your ideas into
              impactful productions.
            </p>
            <p>Your journey starts here.</p>
          </p>
          <button className="bg-yellow-500 px-7 py-2 rounded text-base hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
            Explore
          </button>
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex items-center justify-between w-full h-auto px-40 py-20 mt-[70px] gap-10">
        <div className="w-full">
          <h1 className="text-4xl font-light py-4">About Us</h1>
          <p className="text-xl pb-7 leading-8 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit. Donec in porttitor elit. Suspendisse accumsan
            iaculis tincidunt. placerat velit. Donec in porttitor elit.
            Suspendisse accumsan iaculis tincidunt.{" "}
          </p>
          <button className="bg-yellow-500 px-5 py-2 rounded text-lg hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
            Read More
          </button>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-[340px] h-auto flex items-center justify-between flex-wrap relative">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center relative justify-evenly rounded text-center w-[150px] h-auto bg-[#D9D9D92E]/18 border-[2px] border-[#0000001A] hover:border-none hover:shadow-md hover:bg-white duration-500 transition-all ease-in-out gap-2 p-4 even:mt-7`}
              >
                <h4 className="text-4xl font-light">{stat.title}</h4>
                <p className="text-sm w-[80px]">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <div className="flex justify-center flex-col items-center w-full h-auto px-40 py-20">
        <h1 className="text-4xl font-light py-4 text-center">Our Services</h1>
        <div className="w-full flex justify-between items-center">
          <div className="w-full py-7 h-auto flex items-center justify-between flex-wrap relative">
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg text-center w-[380px] h-auto duration-500 transition-all ease-in-out gap-2 p-4 rounded-[10px]`}
              >
                <img src={service.src} alt={service.title} />
                <h4 className="text-3xl font-light">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 mt-3 px-9 py-2 rounded text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore All
        </button>
      </div>
      {/* PORTFOLIO */}
      <div className="flex justify-center flex-col items-center w-full h-auto px-40 py-20">
        <h1 className="text-4xl font-light py-4 text-center">Portfolio</h1>
        <div className="w-full flex justify-between items-center">
          <div className="w-full py-7 h-auto flex items-center justify-between flex-wrap relative">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className={`flex flex-col border items-center relative justify-evenly hover:shadow-lg overflow-hidden hover:scale-125 duration-500 transition-all ease-in-out gap-2 rounded-[10px]`}
              >
                <img src={portfolio.src} alt={portfolio.title} className="object-fit w-[300px] h-[200px] object-center object-cover"/>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-yellow-500 mt-3 px-9 py-2 rounded text-xl hover:shadow-md hover:bg-black hover:text-yellow-500 duration-500 transition-all ease-in-out">
          Explore All
        </button>
      </div>
    </div>
  );
};

export default Home;
