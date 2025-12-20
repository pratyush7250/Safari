import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("destinations");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); 

  return (
    <>
      <div className="nav-up-content">
        <ul className="nav-info">
          <li>Contact us</li>
          <li>Tanzania Travel Guide</li>
          <li>Kilimanjaro Guide</li>
        </ul>
      </div>

      <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />

        <ul className="navbar-menu">
          <a href="#destination" onClick={() => setMenu("destinations")} className={menu === "destinations" ? "active" : ""}>
            DESTINATIONS
          </a>
          <a href="#safari" onClick={() => setMenu("safari")} className={menu === "safari" ? "active" : ""}>
            SAFARI
          </a>
          <a href="#kilimanzaro" onClick={() => setMenu("kilimanjaro")} className={menu === "kilimanjaro" ? "active" : ""}>
            KILIMANJARO
          </a>
          <a href="#zanzibar" onClick={() => setMenu("zanzibar")} className={menu === "zanzibar" ? "active" : ""}>
            ZANZIBAR
          </a>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("travel")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            TRAVEL STYLES <FaAngleDown />
            <ul className={`dropdown-menu ${openDropdown === "travel" ? "show" : ""}`}>
              <li>Luxury Safaris</li>
              <li>Family Safaris</li>
              <li>Honeymoon Safaris</li>
              <li>Group Safaris</li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            ABOUT IMARA <FaAngleDown />
            <ul className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Our Team</li>
              <li>Reviews</li>
            </ul>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="icon">
            <FaWhatsapp size={18} />
          </div>

          <button className="desktop-btn">VIEW TRIP</button>

          <div className="menu-icon" onClick={() => setDrawerOpen(true)}>
            <FaBars size={22} />
          </div>
        </div>
      </div>

      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <FaTimes size={22} onClick={() => setDrawerOpen(false)} />
        </div>

        <ul className="drawer-menu">
          <a href="#destination" >DESTINATIONS</a>
          <a href="#safari" >SAFARI</a>
          <a href="#kilimanzaro" >KILIMANJARO</a>
          <a href="#zanzibar" >ZANZIBAR</a>

          <li
            className="drawer-dropdown"
            onClick={() =>
              setMobileDropdown(mobileDropdown === "travel" ? null : "travel")
            }
          >
            TRAVEL STYLES <FaAngleDown />
          </li>
          {mobileDropdown === "travel" && (
            <ul className="drawer-submenu">
              <li>Luxury Safaris</li>
              <li>Family Safaris</li>
              <li>Honeymoon Safaris</li>
              <li>Group Safaris</li>
            </ul>
          )}

          <li
            className="drawer-dropdown"
            onClick={() =>
              setMobileDropdown(mobileDropdown === "about" ? null : "about")
            }
          >
            ABOUT IMARA <FaAngleDown />
          </li>
          {mobileDropdown === "about" && (
            <ul className="drawer-submenu">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Our Team</li>
              <li>Reviews</li>
            </ul>
          )}
        </ul>

        <button className="drawer-btn">VIEW TRIP</button>
      </div>

      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />}
    </>
  );
};

export default Navbar;
