import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Foot from '../src/assets/SwLogo.jpg'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
      <img src={Foot} alt=""  />
        {/* <div className="footer-logo-container">
          <img src={Foot} alt=""  style={{height:'100px',width:'200px'}}/>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Quantity</span>
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
          <span><BsTwitter /><br></br>
          <SiLinkedin /><br></br>
          <BsYoutube /><br></br>
          <FaFacebookF /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;