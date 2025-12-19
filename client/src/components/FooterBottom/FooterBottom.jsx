import React from "react";
import "./FooterBottom.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <>
      {/* PEACH SECTION */}
      <div className="footer-peach">
        {/* LEFT */}
        <div className="footer-region">
          <span className="flag">🏴</span>
          <div>
            <p className="label">Selected Region</p>
            <p className="value">United States</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <div className="cards">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcDiscover />
          </div>

          <p className="copyright">
            Copyright 2025 Imara Kileleni Safaris. All rights reserved.
          </p>

          <p className="trademark">
            SAFARI MARKETING PRO® is a trademark of The TravelRight Foundation,
            registered in the U.S. and other countries and regions, and is being
            used under license.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
          </div>

          <div className="footer-links">
            <a href="/">Accessibility</a>
            <a href="/">Cookie Policy</a>
            <a href="/">Sitemap</a>
          </div>

          <div className="footer-links">
            <a href="/">Terms and Conditions</a>
            <a href="/">Booking Conditions</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* ORANGE SECTION */}
      <div className="footer-orange">
        <div className="logos">
          <span>IATA</span>
          <span>CATO</span>
          <span>IATA</span>
          <span>CATO</span>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
