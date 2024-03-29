import React from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquare} from "react-icons/bi";

const Nav =() => {
  return (
    <nav>
      <a href='#header'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><BiBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiMessageSquare /></a>
    </nav>
  )
}

export default Nav;