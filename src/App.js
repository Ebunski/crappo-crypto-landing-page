import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Hero />
      <Specs /> 
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
