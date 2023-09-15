import React, { useState } from "react";
import "./Testimonials.css";
import Pic1 from "../../assets/pic1.jpeg";
import Pic2 from "../../assets/pic2.jpg";
import Pic3 from "../../assets/pic3.jpg";
import Pic4 from "../../assets/pic4.jpg";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

const data = [
  {
    avatar: Pic1,
    name: "Fazle Khaliq",
    review: "Great work, keep it up",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    avatar: Pic2,
    name: "David",
    review: "Nice to work with you",
    rating: "⭐⭐⭐⭐",
  },
  {
    avatar: Pic3,
    name: "Ahmad",
    review: "Thank you so much, great work",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    avatar: Pic4,
    name: "Maaz",
    review: "Appreciated for time mangement",
    rating: "⭐⭐⭐⭐",
  },
];
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 10) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Testimonials = () => {

  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        speed={2000}
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {data.map(({ avatar, name, review, rating }, i) => {
          return (
            <SwiperSlide className="testimonial" key={i}>
              <div className="client_avatar">
                <img src={avatar} alt="avatar"/>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">
                <ReadMore>{review}</ReadMore>
              </small>
              <div className="client_rating">{rating}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
