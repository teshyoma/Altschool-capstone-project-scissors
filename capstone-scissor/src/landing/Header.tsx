import React from "react";
import { useNavigate } from "react-router-dom";
import circleLayer from "../assets/circle-layer.svg";
import chainLayer from "../assets/chain.svg";
import underlineLayer from "../assets/underline.svg";
import vectorLayer from "../assets/Vector 2.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <header>
      <div className="header">
        <h1 className="header-title">
          Optimize Your Online Experience with Our Advanced{" "}
          <span className="primary-blue-400 header-bold">URL Shortening</span>{" "}
          Solution
          <br />
          <span className="header-bold-underline">
            <img
              src={underlineLayer}
              alt="Underline Layer"
              className="underline-layer-img"
            />
          </span>
        </h1>
        <p className="header-text">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div className="header-btns">
          <button className="header-btn btn-blue btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="header-btn bg-none primary-blue-300 btn">
            Learn more
          </button>
        </div>
        <div className="chain-container">
          <div className="chain">
            <img
              src={chainLayer}
              alt="Chain Layer"
              className="chain-layer-img"
            />
            <p className="chain-text">
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
          <div className="chain-bg">
            <img
              src={vectorLayer}
              alt="Vector Layer"
              className="vector-layer-img"
            />
          </div>
        </div>
      </div>
      <div className="circle-layer">
        <img
          src={circleLayer}
          alt="Circle Layer"
          className="circle-layer-img"
        />
      </div>
    </header>
  );
};

export default Header;
