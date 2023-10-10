import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BiUpArrow } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

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
      <Link href="https://www.linkedin.com/in/mrsaeedkk/" >
        <BsLinkedin />
      </Link>
      <Link href="https://github.com/MuhammadSaeed0336" >
        <FaGithub />
      </Link>
        <Link to="mailto:muhammadsaeed033696@gmail.com">
          <MdAttachEmail />
        </Link>
        <Link to="http://api.whatsapp.com/send?phone+923369682471">
          <RiWhatsappFill />
        </Link>
      </div>

      <div className="footer_copyright">
        <small>&copy; Muhammad Saeed. All Right Reserved</small>
      </div>
      <div className={`active ${show && "hidden"}`}>
        <a href="#header">
          <BiUpArrow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
