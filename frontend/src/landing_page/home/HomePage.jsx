import React from "react";
import Hero from "../home/Hero.jsx";
import Education from "../home/Education.jsx";
import Stats from "../home/Stats.jsx";
import Pricing from "../home/Pricing.jsx";
import Awards from "../home/Awards.jsx";
import OpenAccount from "../OpenAccount.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
export default HomePage;
