import React from 'react';
import CV from "../../assets/cv.pdf";

import { BsMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function CTA() {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn'>Let's Talk</a>
        <div className='theme-icon-container'>
        {darkMode === true ? (
      <MdLightMode
        className="theme-icon"
        onClick={() => dispatch({ type: "TOGGLE" })}
      />
    ) : (
      <BsMoonFill
        className="theme-icon"
        onClick={() => dispatch({ type: "TOGGLE" })}
      />
    )}
    </div>
    </div>
  )
}

export default CTA;