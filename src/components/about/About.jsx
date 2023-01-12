import React from 'react';
import "./About.css";
import Me from "../../assets/me_about.jpeg";
import {TbAward} from "react-icons/tb";
import {FiUser} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";


const About=()=> {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className='about_me-image'>
            <img src={Me} alt="About img" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <TbAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUser className='about_icon'/>
              <h5>Clients</h5>
              <small>500+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, adipisci eius nemo ipsa fugit cum cupiditate laudantium libero. Minima eos sed libero deleniti, consectetur tenetur totam! Minima saepe harum blanditiis?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;