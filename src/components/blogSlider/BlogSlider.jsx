import "./blogSlider.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import me from "../../assets/porfolio1.jpg";

const SkillSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="blog">
      {/* <h5>subtitle</h5> */}
      <h2>Blogs</h2>
      <Slider {...settings} className="slider container">
        <div className="item">
          <div className="card">
            <div className="card-head">
              <img src={me} alt='' />
            </div>
            <div className="card-body">
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur adipisicing elit amet consectetur adipisicing elit. Consectetur repudiandae iure aspernatur, voluptates consequuntur nesciunt vitae ea ducimus unde magnam?</p>
            </div>
            <span>2023-09-13</span>
          </div>

        </div>
        <div className="item">
        <div className="card">
            <div className="card-head">
              <img src={me} alt='' />
            </div>
            <div className="card-body">
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur adipisicing elit amet consectetur adipisicing elit. Consectetur repudiandae iure aspernatur, voluptates consequuntur nesciunt vitae ea ducimus unde magnam?</p>
            </div>
            <span>2023-09-13</span>
          </div>
        </div>
        <div className="item">
        <div className="card">
            <div className="card-head">
              <img src={me} alt='' />
            </div>
            <div className="card-body">
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur adipisicing elit amet consectetur adipisicing elit . Consectetur repudiandae iure aspernatur, voluptates consequuntur nesciunt vitae ea ducimus unde magnam?</p>
            </div>
            <span>2023-09-13</span>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SkillSlider;
