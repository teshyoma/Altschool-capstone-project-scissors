import React from "react";
import Header from "./Header";
import Views from "./Views";
import Features from "./Features";
import Pricing from "./Pricing";
import Form from "./Form";
import Questions from "./Questions";
import Optimize from "./Optimize";
import Footer from "./Footer";
import "./Landing.css";

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <Views />
      <Features />
      <Pricing />
      <Form />
      <Questions />
      <Optimize />
      <Footer />
    </div>
  );
};

export default Landing;
