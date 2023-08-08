import "./SkillSlider.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMui,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";
const SkillSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Slider {...settings} className="slider container">
        <div className="item">
          <SiHtml5 />
        </div>
        <div className="item">
          <SiCss3 />
        </div>
        <div className="item">
          <SiBootstrap />
        </div>
        <div className="item">
          <SiMui />
        </div>

        <div className="item">
          <SiJavascript />
        </div>

        <div className="item">
          <SiReact />
        </div>

        <div className="item">
          <SiNodedotjs />
        </div>

        <div className="item">
          <SiMongoose />
        </div>

        <div className="item">
          <SiGit />
        </div>

        <div className="item">
          <SiGithub />
        </div>

        <div className="item">
          <SiPostman />
        </div>

        <div className="item">
          <SiVisualstudiocode />
        </div>
      </Slider>
    </section>
  );
};

export default SkillSlider;
