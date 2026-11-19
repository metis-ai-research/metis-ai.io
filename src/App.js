import React from "react";
import Ambient from "./Ambient/Ambient";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import ProductMarquee from "./ProductMarquee/ProductMarquee";
import HowWeBuild from "./HowWeBuild/HowWeBuild";
import Manifesto from "./Manifesto/Manifesto";
import Founders from "./Founders/Founders";
import BackedBy from "./BackedBy/BackedBy";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Ambient />
      <Nav />
      <Hero />
      <WhoWeAre />
      <ProductMarquee />
      <HowWeBuild />
      <Manifesto />
      <Founders />
      <BackedBy />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
