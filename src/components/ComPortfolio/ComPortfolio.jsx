import './ComPortfolio.css'
import IMG6 from "../../assets/porfolio6.jpg";
import IMG8 from "../../assets/porfolio8.jpg";
import IMG9 from "../../assets/porfolio9.jpg";
import IMG10 from "../../assets/porfolio10.jpg";

const data = [
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

const ComPortfolio = () => {
    return (
      // <section id='portfolio'>
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
                  <a href={github} className='btn'>Source Code</a>
                  <a href={demo} className='btn' target='blank'>Live Demo</a>
                  </div>  
              </article>
              )
            })
          }
        </div>
      // </section>
    )
  }

export default ComPortfolio
