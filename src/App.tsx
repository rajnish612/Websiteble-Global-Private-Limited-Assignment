import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSection2 />
      <Service />
    </div>
  );
};

export default App;
