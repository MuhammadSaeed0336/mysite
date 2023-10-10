import "./SkillSlider.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
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
  SiNextdotjs,
} from "react-icons/si";
const SkillSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Slider {...settings} className="slider container">
        <div className="item">
          <SiHtml5 className="skill-icon" />
          {/* <p>HTML</p> */}
        </div>
        <div className="item">
          <SiCss3 className="skill-icon" />
          {/* <p>CSS</p> */}
        </div>
        <div className="item">
          <SiTailwindcss className="skill-icon" />
          {/* <p>TAILWIND_CSS</p> */}
        </div>
        <div className="item">
          <SiStyledcomponents className="skill-icon" />
          {/* <p>STYLED_COMPONENTS</p> */}
        </div>
        <div className="item">
          <SiBootstrap className="skill-icon" />
          {/* <p>BOOTSRAP</p> */}
        </div>
        <div className="item">
          <SiMui className="skill-icon" />
          {/* <p>MUI</p> */}
        </div>

        <div className="item">
          <SiJavascript className="skill-icon" />
          {/* <p>JS</p> */}
        </div>

        <div className="item">
          <SiReact className="skill-icon" />
          {/* <p>REACT.JS</p> */}
        </div>

        <div className="item">
          <SiNextdotjs className="skill-icon" />
          {/* <p>NEXT.JS</p> */}
        </div>

        <div className="item">
          <SiNodedotjs className="skill-icon" />
          {/* <p>NODE.JS</p> */}
        </div>

        <div className="item">
          <SiMongoose className="skill-icon" />
          {/* <p>MONGOOSE</p> */}
        </div>

        <div className="item">
          <SiGit className="skill-icon" />
          {/* <p>GIT</p> */}
        </div>

        <div className="item">
          <SiGithub className="skill-icon" />
          {/* <p>GITHUB</p> */}
        </div>

        <div className="item">
          <SiPostman className="skill-icon" />
          {/* <p>POSTMAN</p> */}
        </div>

        <div className="item">
          <SiVisualstudiocode className="skill-icon" />
          {/* <p>VS_CODE</p> */}
        </div>
      </Slider>
    </section>
  );
};

export default SkillSlider;
