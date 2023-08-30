import React, {useState, useEffect} from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/porfolio1.jpg";
import IMG2 from "../../assets/porfolio2.jpg";
import IMG3 from "../../assets/porfolio3.jpg";
import IMG4 from "../../assets/porfolio4.png";
import IMG5 from "../../assets/porfolio5.jpg";
import IMG7 from "../../assets/porfolio7.jpg";
import IMG6 from "../../assets/porfolio6.jpg";
import IMG8 from "../../assets/porfolio8.jpg";
import IMG9 from "../../assets/porfolio9.jpg";
import IMG10 from "../../assets/porfolio10.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Auto Gemz",
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    // demo: 'https://dribbble.com/shots/19773322-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: "E-Commerce App",
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: 'https://ecom-site-pi.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: "Socail App",
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    // demo: 'https://dribbble.com/shots/19773311-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: "Personal Portfolio Site",
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: "https://muhammadsaeed0336.github.io/mysite/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Notes App",
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: "https://notes-7hha12f1v-muhammadsaeed0336.vercel.app/",
  },
  {
    id: 6,
    image: IMG7,
    title: "Pomodoro App",
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: "https://pomodoro-app-lac.vercel.app/",
  },
  {
    id: 7,
    image: IMG6,
    title: 'Crud App',
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: 'https://crud-with-rt.vercel.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Cars Filter App',
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: 'https://carsfilter.vercel.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Booking App',
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: 'https://bookingapp-pied.vercel.app/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Booking App',
    github: "https://patreon.com/MrSKK?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link",
    demo: 'https://video-sharing-app-wheat.vercel.app/'
  }
];

function Portfolio() {
  const [count, setCount] = useState(3)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(data.slice(0, count))
  }, [count])

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {items && items.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className='btn'>Source Code</a>
                <a href={demo} className="btn" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="container see-more-btn">
        {count < data.length && (
          <div
            className="btn"
            onClick={() => setCount(count + 3)}
          >
            See more
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
