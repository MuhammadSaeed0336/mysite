import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaYoutube } from "react-icons/fa";

function HeaderSocial() {

  return (
    <>
    <div className="header_social">
      <a href="https://www.linkedin.com/in/mrsaeedkk/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/MuhammadSaeed0336" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCGwYVAsJ8tQaHUNfBfMl8BQ"
        target="_blank"
      >
        <FaYoutube />
      </a>
    </div>
    </>
  );
}

export default HeaderSocial;
