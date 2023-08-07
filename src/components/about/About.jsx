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
              <small>2+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUser className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Welcome to my portfolio! I am Muhammad Saeed, a passionate Web Development with a deep love for creativity and innovation. I invite you to explore my portfolio, where you will find a collection of my best work and experiences
          </p>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;