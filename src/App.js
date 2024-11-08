import React from "react";
import '@fontsource/inter';
import Services from "./Services/Services";
import Vision from "./Vision/Vision";
import Product from "./Product/Product";
import Solution from "./Solution/Solution";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Vision />
      <Product />
      <Solution />
      <Footer />
    </>
  );
}

export default App;
