import React from "react";
import CV from "../../assets/cv.pdf";
import { BsMoonFill } from "react-icons/bs";
import {MdLightMode} from "react-icons/md";
import { FaFileDownload} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../feature/darkModeSlice";

function CTA() {
  const {mode} = useSelector((state)=> state.darkMode)
  const dispatch = useDispatch();

  return (
    <div className="cta">
      <a href={CV} download="MSaeedCV.pdf" className="btn">CV
        <FaFileDownload className="down-icon"/>
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
      <div className="theme-icon-container">
        {mode === true ? (
          <MdLightMode
            className="theme-icon"
            onClick={()=>dispatch(toggleDarkMode())}
          />
        ) : (
          <BsMoonFill
            className="theme-icon"
            onClick={()=>dispatch(toggleDarkMode())}
          />
        )}
      </div>
    </div>
  );
}

export default CTA;
