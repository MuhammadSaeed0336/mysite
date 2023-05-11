import React from 'react';
import "./Testimonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from  "../../assets/avatar2.jpg";
import Avatar3 from  "../../assets/avatar3.jpg";
import Avatar4 from  "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: Avatar1,
    name: 'Fazle Khaliq',
    review: 'Thank You so much'
  },
  {
    avatar: Avatar2,
    name: 'David',
    review: 'Great work'
  },
  {
    avatar: Avatar3,
    name: 'SMC',
    review: 'Nice to work with you'
  },
  {
    avatar: Avatar4,
    name: 'Ahmad',
    review: 'Impressive work, keep it up'
  },
]
const Testimonials =() => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container" 
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      speed={2000}
      pagination={{ clickable: true }}
        >
          {
              data.map(({avatar, name, review}) => {
                return(
                  <SwiperSlide className='testimonial'>
                    <div className="client_avatar">
                      <img src={avatar} />
                    </div>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                  </SwiperSlide>
                )
              })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials;