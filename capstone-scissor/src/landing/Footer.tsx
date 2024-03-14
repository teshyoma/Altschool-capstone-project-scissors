import React from "react";
import socialTwitter from "../assets/i.fi-social-twitter.svg";
import socialFeather from "../assets/svg.feather.svg";
import socialLinkedin from "../assets/i.fi-social-linkedin.svg";
import socialFacebook from "../assets/i.fi-social-facebook.svg";
import blackLogo from "../assets/black-logo.svg";
import footerLeft from "../assets/footer-left.svg";
import footerRight from "../assets/footer-right.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="section">
        <div className="footer-center">
          <div className="logo-socials">
            <img src={blackLogo} alt="Black Logo" className="black-logo-img" />
            <ul className="footer-socials">
              <li>
                <img
                  src={socialTwitter}
                  alt="Social Twitter"
                  className="social-twitter-img"
                />
              </li>
              <li>
                <img
                  src={socialFeather}
                  alt="Social Feather"
                  className="social-feather-img"
                />
              </li>
              <li>
                <img
                  src={socialLinkedin}
                  alt="Social Linkedin"
                  className="social-linkedin-img"
                />
              </li>
              <li>
                <img
                  src={socialFacebook}
                  alt="Social Facebook"
                  className="social-facebook-img"
                />
              </li>
            </ul>
          </div>
          {/* single link container */}
          <div className="logo-links">
            <h4>Why Scissor ?</h4>
            <ul>
              <li>
                <a href="#">Scissors 101</a>
              </li>
              <li>
                <a href="#">Integrations and API</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* end of cont */}
          {/* single link container */}
          <div className="logo-links">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">For Developers</a>
              </li>
            </ul>
          </div>
          {/* end of cont */}
          {/* single link container */}
          <div className="logo-links">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#">Link Management</a>
              </li>
              <li>
                <a href="#">QR Codes</a>
              </li>
              <li>
                <a href="#">Link-in-bio</a>
              </li>
            </ul>
          </div>
          {/* end of cont */}
          {/* single link container */}
          <div className="logo-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Scissor</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          {/* end of cont */}
          {/* single link container */}
          <div className="logo-links footer-second-line">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Resource Library</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">App Connectors</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Trust Center</a>
              </li>
              <li>
                <a href="#">Browser Extension</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
            </ul>
          </div>
          {/* end of cont */}
          {/* single link container */}
          <div className="logo-links">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Mobile Links</a>
              </li>
              <li>
                <a href="#">Campaign</a>
              </li>
              <li>
                <a href="#">Management &amp; Analytics</a>
              </li>
              <li>
                <a href="#">QR Code generation</a>
              </li>
            </ul>
          </div>
          {/* end of cont */}
          {/* single link container */}
          <div className="logo-links">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Acceptable Use Policy</a>
              </li>
              <li>
                <a href="#">Code of Conduct</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-text">
          Terms of Service | Security | Scissor
          <span className="footer-date">2023</span>
        </p>
      </div>
      <div className="footer-bg-left footer-bg">
        <img src={footerLeft} alt="Footer Left" className="footer-left-img" />
      </div>
      <div className="footer-bg-right footer-bg">
        <img
          src={footerRight}
          alt="Footer Right"
          className="footer-right-img"
        />
      </div>
    </footer>
  );
};

export default Footer;
