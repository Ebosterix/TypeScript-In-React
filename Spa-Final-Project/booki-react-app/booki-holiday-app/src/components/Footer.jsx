import React from "react";
import "../assets/css/style.css";

function Footer(){
  return (
    <footer>
      <div className="first-list">
        <h5>About</h5>
        <ul>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">General Terms and conditions</a></li>
          <li><a href="#">Data and Privacy</a></li>
        </ul>
      </div>

      <div className="second-list">
        <h5>Our accommodations</h5>
        <ul>
          <li><a href="#">Quality Assessment</a></li>
          <li><a href="#">You have a hotel?</a></li>
        </ul>
      </div>

      <div className="third-list">
        <h5>Assistance</h5>
        <ul>
          <li><a href="#">Help Desk</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
