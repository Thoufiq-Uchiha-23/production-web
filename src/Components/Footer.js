import React from "react";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi2";
import { logo } from "../assets";
import { socials } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mx-auto bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-start xl:flex-nowrap flex-wrap md:items-start md:justify-between w-full h-auto px-10 md:px-20 lg:px-40 py-10 gap-5 lg:gap-10">
        <div className="flex flex-col items-center md:items-start justify-center lg:w-full w-full md:w-auto">
          <div className="flex items-center justify-center w-[60px] md:w-[70px] lg:w-[100px] relative">
            <img src={logo} alt="Logo" className="w-full top-0 relative" />
          </div>
          <div className="text-center md:text-start">
            <p className="text-base md:text-sm lg:text-base font-light py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit. Donec in porttitor elit. Suspendisse
              accumsan iaculis tincidunt. placerat velit.
            </p>
            <p className="text-sm lg:text-base font-light font-robot">
              All Rights Reserved 2024
            </p>
          </div>
        </div>
        <div className="xl:w-full w-full md:w-auto text-center md:text-start">
          <h1 className="text-[21px] md:text-lg lg:text-xl text-yellow-500 font-light">
            Get in Touch
          </h1>
          <div className="text-base md:text-sm lg:text-base font-light font-robot py-2 text-center md:text-start lg:py-5 leading-7 lg:leading-10">
            <p className="gap-2 flex items-center justify-center md:justify-start whitespace-nowrap">
              <GrLocation className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]" />
              Shahre Naow, Kabul Afghanistan
            </p>
            <p className="gap-2 flex items-center justify-center md:justify-start whitespace-nowrap">
              <LuMail className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]" />
              production.com
            </p>
            <p className="gap-2 flex items-center justify-center md:justify-start whitespace-nowrap">
              <HiOutlinePhone className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]" />
              +93 73 112 8880
            </p>
          </div>
        </div>
        <div className="xl:w-full w-full md:w-auto text-center md:text-start">
          <h1 className="text-[21px] md:text-lg lg:text-xl text-yellow-500 font-light">
            Quick Links
          </h1>
          <div className="text-base md:text-sm lg:text-base font-light text-center md:text-start font-robot py-2 lg:py-5 leading-7 lg:leading-10">
            <h4>Services</h4>
            <h4>Portfolios</h4>
            <h4>Contact us</h4>
          </div>
        </div>
        <div className="xl:w-full w-full md:w-auto text-center md:text-start">
          <h1 className="text-[21px] md:text-lg lg:text-xl text-yellow-500 font-light">
            Legal Information
          </h1>
          <div className="py-2 lg:py-5 text-base md:text-sm text-center md:text-start lg:text-base font-light font-robot leading-7 lg:leading-10">
            <h4>Terms of Service</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
      </div>
      <div className="flex gap-5 md:gap-10 items-center justify-center py-5">
        {socials.map((social) => (
          <div key={social.id} className="bg-white text-black rounded-full p-1 md:p-2 flex items-center justify-center">
            {social.element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
