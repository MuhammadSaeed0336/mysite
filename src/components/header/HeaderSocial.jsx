import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function HeaderSocial() {
  // const { dispatch, darkMode } = useContext(DarkModeContext);

  return (
    <>
    {/* {darkMode === true ? (
      <a>
      <MdLightMode
        className="icon"
        onClick={() => dispatch({ type: "TOGGLE" })}
      />
    </a>
    ) : (
      <a>
      <CiDark
        className="icon"
        onClick={() => dispatch({ type: "TOGGLE" })}
      />
    </a>
    )} */}
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
