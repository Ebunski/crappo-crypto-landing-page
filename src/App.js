import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import WhyUs from "./components/WhyUs";
import ProfitCalc from "./components/ProfitCalc";
import Services from "./components/Services";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useAos } from "./utils/aos";

export default function App() {
  useAos();
  return (
    <>
      <Navbar />
      <Hero />
      <Specs />
      <WhyUs />
      <ProfitCalc />
      <Services />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}
