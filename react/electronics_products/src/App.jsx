import React from "react";
import Navbar from "./CustomComponents/Navbar";
import HeroSection from "./CustomComponents/HeroSection";
import FlashSalesAll from "./CustomComponents/FlashProducts/FlashSalesAll";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FlashSalesAll />
    </>
  );
};

export default App;
