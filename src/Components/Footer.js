import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mx-auto bg-black text-white">
      <div className="flex items-start justify-evenly w-full h-auto px-40 py-10 gap-10">
        <div className="flex flex-col items-start justify-center w-full">
          <h1 className="text-4xl text-yellow-500">Logo</h1>
          <p className="text-base font-light py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit. Donec in porttitor elit. Suspendisse accumsan
            iaculis tincidunt. placerat velit.
          </p>
          <p className="text-base font-light font-robot">
            All Rights Reserved 2024
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-xl text-yellow-500 font-light">Get in Touch</h1>
          <div className="text-base font-light font-robot py-5 leading-10">
            <p>Shahre Naow, Kabul Afghanistan</p>
            <p>production.com</p>
            <p>+93 73 112 8880</p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl text-yellow-500 font-light">Quick Links</h1>
          <div className="text-base font-light font-robot py-5 leading-10">
            <h4>Services</h4>
            <h4>Portfolios</h4>
            <h4>Contact us</h4>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl text-yellow-500 font-light">
            Legal Information
          </h1>
          <div className="py-5 text-base font-light font-robot leading-10">
            <h4>Terms of Service</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
