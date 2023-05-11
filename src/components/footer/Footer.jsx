import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillCaretUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer" >
        <a href="#" className="footer_logo">
          <b><i>MrSKK</i></b>
        </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonails">Testimonails</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socail">
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
        <a href="http://instagram.com">
          <BsInstagram />
        </a>
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; MrSKK Chanel. All Right Reserved</small>
      </div>

      <div className="up">
        <a href="#" className="scroll_up">
          <AiFillCaretUp />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
