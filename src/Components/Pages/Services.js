import React from "react";
import { Outlet, Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <Outlet />
    </div>
  );
};

export default Services;
