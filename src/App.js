import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Services,
  Projects,
  Blogs,
  Contact,
  DigitalMarketing,
  CreativeProduction,
  Consulting,
  Navbar,
  Sidebar,
} from "./Components/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="creative-production" element={<CreativeProduction />} />
          <Route path="consulting" element={<Consulting />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
