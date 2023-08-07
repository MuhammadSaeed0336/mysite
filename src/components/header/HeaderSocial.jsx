import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaYoutube } from "react-icons/fa";
import {Link} from "react-router-dom"

function HeaderSocial() {

  return (
    <>
    <div className="header_social">
      <Link to="https://www.linkedin.com/in/mrsaeedkk/">
        <BsLinkedin />
      </Link>
      <Link to="https://github.com/MuhammadSaeed0336">
        <FaGithub />
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCGwYVAsJ8tQaHUNfBfMl8BQ">
        <FaYoutube />
      </Link>
    </div>
    </>
  );
}

export default HeaderSocial;
