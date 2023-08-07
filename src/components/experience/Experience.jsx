import React from 'react';
import "./Experience.css";
import {BsPatchCheckFill} from "react-icons/bs";

const Experience =() => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
           
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>HTML</h4>
              <small className='text-dark'>Experienced</small>
              </div>
            </article>
           
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>CSS</h4>
              <small className='text-dark'>Intermediate</small>
              </div>
            </article>
          
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-dark'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>MUI</h4>
              <small className='text-dark'>Experienced</small>
              </div>
            </article>
          
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>JavaScript</h4>
              <small className='text-dark'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>React</h4>
              <small className='text-dark'>Experienced</small>
              </div>
             </article>
          
          </div>
        </div>
                  
                  {/* backed section */}
        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Node Js</h4>
              <small className='text-dark'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Express</h4>
              <small className='text-dark'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>Mongodb</h4>
              <small className='text-dark'>Basic</small>
              </div>
            </article>
            
            {/* <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
              <h4>C#</h4>
              <small className='text-dark'>Intermediate</small>
              </div>
            </article> */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;