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
          Hello! My name is Muhammad Saeed, and I am thrilled to welcome you to my portfolio.Thank you for taking the time to explore my portfolio. I look forward to connecting with you and discussing how I can contribute to your next project. Let's collaborate and create something extraordinary together!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;