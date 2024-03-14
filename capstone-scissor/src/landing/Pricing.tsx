import React from "react";
import checkcircleBlue from "../assets/check-circle-blue.svg";
import checkCircle from "../assets/check-circle.svg";

const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="section pricing-center">
        <div className="pricing-title-container">
          <div className="section-title-bar"></div>
          <h1 className="features-title pricing-title">
            A <span className="primary-blue-400">price perfect</span> for your
            needs.
          </h1>
        </div>
        <p className="pricing-para">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
        <div className="prices">
          {/* FIRST PRICE */}
          <article className="price">
            <h3 className="price-plan">Basic</h3>
            <h2 className="price-type">Free</h2>
            <p className="price-text">Free plan for all users</p>
            <ul className="price-lists">
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Unlimited URL Shortening
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Unlimited Basic Link Analytics
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Unlimited Customizable Short Links
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Unlimited Standard Support
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Unlimited Ad-Supported
              </li>
            </ul>
          </article>

          {/* SECOND PRICE */}
          <article className="price price-active">
            <h3 className="price-plan">Professional</h3>
            <h2 className="price-type">$15/ month</h2>
            <p className="price-text">Ideal for business creators</p>
            <ul className="price-lists">
              <li className="price-option">
                <img
                  src={checkCircle}
                  alt="Check Circle"
                  className="check-circle-img"
                />
                Enhanced Link Analytics
              </li>
              <li className="price-option">
                <img
                  src={checkCircle}
                  alt="Check Circle"
                  className="check-circle-img"
                />
                Custom Branded Domains
              </li>
              <li className="price-option">
                <img
                  src={checkCircle}
                  alt="Check Circle"
                  className="check-circle-img"
                />
                Advanced Link Customization
              </li>
              <li className="price-option">
                <img
                  src={checkCircle}
                  alt="Check Circle"
                  className="check-circle-img"
                />
                Priority Support
              </li>
              <li className="price-option">
                <img
                  src={checkCircle}
                  alt="Check Circle"
                  className="check-circle-img"
                />
                Ad-free Experience
              </li>
            </ul>
          </article>

          {/* THIRD PRICE */}
          <article className="price">
            <h3 className="price-plan">Teams</h3>
            <h2 className="price-type">$25/ month</h2>
            <p className="price-text">Share with up to 10 users</p>
            <ul className="price-lists">
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Team Collaboration
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                User Roles and Permissions
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Enhance Security
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                API Access
              </li>
              <li className="price-option">
                <img
                  src={checkcircleBlue}
                  alt="Check Circle Blue"
                  className="check-circle-blue-img"
                />
                Dedicated Account Manager
              </li>
            </ul>
          </article>
        </div>
        <div className="pricing-btns">
          <a href="#" className="btn pricing-btn btn-white">
            Get Customer Pricing
          </a>
          <a href="#" className="btn pricing-btn btn-blue">
            Select Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
