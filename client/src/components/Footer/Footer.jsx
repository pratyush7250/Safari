import React from "react";
import "./Footer.css";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links-wrapper">
          <div className="footer-col">
            <h4>Help & Info</h4>
            <ul>
              <li>Who We Are</li>
              <li>WE MAKE TRAVEL MATTER®</li>
              <li>Become an Affiliate</li>
              <li>Frequently Asked Questions</li>
              <li>Travel Updates</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Travel Planning</h4>
            <ul>
              <li>Get Your Free Brochure</li>
              <li>Travel Insurance</li>
              <li>Booking Conditions</li>
              <li>Trip Deposit Level</li>
              <li>Recommendations</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Travel Planning</h4>
            <ul>
              <li>Get Your Free Brochure</li>
              <li>Travel Insurance</li>
              <li>Booking Conditions</li>
              <li>Trip Deposit Level</li>
              <li>Recommendations</li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Save up to $2,034*!</h4>
          <p>
            Plus receive latest offers, travel inspiration, and discover how your
            travels will make a positive impact. Together, WE MAKE TRAVEL MATTER®.
          </p>

          <a href="/" className="offer-link">Offer Terms</a>

          <form>
            <div className="name-row">
              <input type="text" placeholder="First Name *" required/>
              <input type="text" placeholder="Last Name *" required/>
            </div>

            <input
              type="email"
              placeholder="Email *"
              className="email-input"
              required
            />

            <label className="checkbox-row">
              <input type="checkbox" required/>
              <span>
                By checking this box, you accept the Trafalgar{" "}
                <a href="/" className="privacy-policy">privacy policy</a>
              </span>
            </label>

            <button type="submit" className="footer-btn">
              VIEW ALL TRIPS
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Imara Kileleni Safaris is a proud member of{" "}
          <a href="/">The Travel Corporation</a> portfolio of brands.
        </p>
        <p># Imara Kileleni Safaris</p>
        <p>
          Travel House, Rue du Manoir St Peter Port, Guernsey, GY1 2JH
        </p>
      </div>
      <FooterBottom/>
    </footer>
  );
};

export default Footer;
