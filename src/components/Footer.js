import React from "react";

// importing logo from local
import Logo from "../Assets/Logo.svg";

//importing icons
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://www.youtube.com/" target="_blank"><BsYoutube /></a>
          <a href="https://www.youtube.com/" target="_blank"><SiLinkedin /></a>
          <a href="https://www.youtube.com/" target="_blank"><FaFacebookF /></a>
          <a href="https://www.youtube.com/" target="_blank"><BsTwitter /></a> 
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
