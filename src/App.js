import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Designs from "./components/Designs";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Designs />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
