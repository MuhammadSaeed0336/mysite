import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiDribbble} from "react-icons/fi";

function HeaderSocial() {
  return (
    <div className='header_social'>
        <a href="http://linkedIn.com" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com" target="_blank"><FaGithub /></a>
        <a href="http://dribble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocial;