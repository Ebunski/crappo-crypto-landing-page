import React from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import WhyUs from "./components/WhyUs";
import ProfitCalc from "./components/ProfitCalc";
import Services from "./components/Services";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useAos } from "./utils/aos";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faXmark, faBars);

export default function App() {
  useAos();

  return (
    <>
      <Navbar />
      <SideMenu />
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
