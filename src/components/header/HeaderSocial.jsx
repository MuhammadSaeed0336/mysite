import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaYoutube } from "react-icons/fa";

function HeaderSocial() {

  return (
    <>
    <div className="header_social">
      <a href="https://www.linkedin.com/in/mrsaeedkk/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/MuhammadSaeed0336" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCGwYVAsJ8tQaHUNfBfMl8BQ"
        target="_blank" rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>
    </div>
    </>
  );
}

export default HeaderSocial;
