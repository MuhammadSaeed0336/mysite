import React from 'react';
import "./Services.css";
import {BiCheck} from "react-icons/bi";

const Services = () =>  {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
          <li>
              <BiCheck className='service_list_icon'/>
              <p>Originality</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Relevance</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Quality</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Creativity</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Visual Elements</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Research</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Longevity</p>
            </li>
          </ul>
        </article>

        {/* Web developmt */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Full-Stack Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>E-commerce Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Mobile-Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Website Maintenance and Support:</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>SEO (Search Engine Optimization)</p>
            </li>
          </ul>
        </article>

        {/* content creation */}
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Originality</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Relevance</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Quality</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Creativity</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Visual Elements</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Research</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Longevity</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;