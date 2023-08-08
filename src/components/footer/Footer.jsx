import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";

const Footer = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 250 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <footer>
      <a href="#header" className="footer_logo">
        MUHAMMAD SAEED
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
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
          <FaFacebookF />
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
      <div className={`active ${show && 'hidden'}`}>
        <a href="#header">
          <BiUpArrow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
