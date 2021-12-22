import React from "react";

import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import StartSeason from "../components/Home/StartSeason";
import Services from "../components/Home/Services";
import Gallery from "../components/Home/Gallery";
import Testimonials from "../components/Home/Testimonials";
import NextGame from "../components/Home/NextGame";
import Events from "../components/Home/Events";
import Partners from "../components/Home/Partners";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Hero />
      <About />
      <StartSeason />
      <Services />
      <Gallery />
      <Testimonials />
      <NextGame />
      <Events />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
