import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Hero />
      <Features />
      <Cta />
    </div>
  );
}
