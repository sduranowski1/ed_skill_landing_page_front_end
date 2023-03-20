import React from "react";
import Logo from "../Assets/1677357588335-removebg-preview.png";
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from "./SocialIcons";



const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <SocialIcons href="https://www.linkedin.com/company/edskillacademy/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/edskillindia/">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section-columns">
          <a>242-2424-242</a>
          <a>edskill@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
