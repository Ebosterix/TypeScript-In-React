import React from "react";
import "../assets/css/style.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <a href="#">
            <img
              src="/src/assets/images/logo/Booki.png"
              alt="Booki Logo"
              className="logo-reservia"
            />
          </a>
        </div>
        <a href="#accomodation" className="nav-item1">
          Accommodations
        </a>
        <a href="#activity" className="nav-item2">
          Activities
        </a>
        <a href="#signup" className="nav-item3">
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Header;
