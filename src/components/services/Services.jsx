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
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li> */}
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
              <p>Front-end Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Full-stack Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>E-commerce Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Custom Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Search Engine Optimization (SEO)</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Web Hosting and Deployment</p>
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
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;