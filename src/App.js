import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import ProductMarquee from "./ProductMarquee/ProductMarquee";
import HowWeBuild from "./HowWeBuild/HowWeBuild";
import Manifesto from "./Manifesto/Manifesto";
import Founders from "./Founders/Founders";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useRevealAll } from "./motion";

function App() {
  const { t, i18n } = useTranslation();
  useRevealAll();

  useEffect(() => {
    document.title = t("meta.title");
  }, [t, i18n.language]);

  return (
    <>
      <a href="#main" className="skip-link">{t("meta.skip")}</a>
      <Nav />
      <main id="main">
        <Hero />
        <ProductMarquee />
        <WhoWeAre />
        <HowWeBuild />
        <Manifesto />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
