import React from "react";
import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import Info from "./../components/Info";
import Services from "./../components/Services";
import Reasons from "./../components/Reasons";
import CTA from "./../components/CTA";
import Testimonials from "./../components/Testimonials";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Reasons />
      <CTA />
      <Testimonials />
    </main>
  );
};

export default Homepage;
