import React from 'react';
import "./Portfolio.css";
import IMG1 from "../../assets/porfolio1.webp";
import IMG2 from "../../assets/porfolio2.webp";
import IMG3 from "../../assets/porfolio3.webp";
import IMG4 from "../../assets/porfolio4.webp";
import IMG5 from "../../assets/porfolio5.webp";
import IMG6 from "../../assets/porfolio6.webp";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'htttp://github.com',
    demo: 'https://dribbble.com/shots/19773322-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Orion UI kit for Figma',
    github: 'htttp://github.com',
    demo: 'https://dribbble.com/shots/19773375-Orion-UI-kit-for-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'htttp://github.com',
    demo: 'https://dribbble.com/shots/19773311-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Orion UI kit for Figma',
    github: 'htttp://github.com',
    demo: 'https://dribbble.com/shots/19773358-Orion-UI-kit-for-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'htttp://github.com',
    demo: 'https://dribbble.com/shots/19773303-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'htttp://github.com',
    demo: 'https://dribbble.com/shots/19773287-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item_image'>
                  <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className='portfolio_item_cta'>
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>  
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;