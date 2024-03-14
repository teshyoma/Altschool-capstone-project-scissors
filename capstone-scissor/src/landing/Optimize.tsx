import React from "react";
import optimizeOne from "../assets/optimize1.svg";
import optimizeTwo from "../assets/optimize2.svg";

const Optimize: React.FC = () => {
  return (
    <section className="optimize">
      <h1>Revolutionizing Link Optimization</h1>
      <div className="optimize-btn">
        <a href="#" className="btn btn-blue optimize-btn">
          Get Started
        </a>
      </div>
      <div className="optimize-bg-left optimize-bg">
        <img
          src={optimizeOne}
          alt="Optimize One"
          className="optimize-one-img"
        />
      </div>
      <div className="optimize-bg-right optimize-bg">
        <img
          src={optimizeTwo}
          alt="Optimize Two"
          className="optimize-two-img"
        />
      </div>
    </section>
  );
};

export default Optimize;
