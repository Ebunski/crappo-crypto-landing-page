import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import Features from "./components/Features";
import Cta from "./components/Cta";

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Hero />
      <Specs /> 
      <Features />
      <Cta />
    </div>
  );
}
