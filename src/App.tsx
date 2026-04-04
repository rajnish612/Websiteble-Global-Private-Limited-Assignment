import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSection2 />
      <Service />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
