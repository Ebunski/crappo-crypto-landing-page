import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
