import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./style/dark.scss";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import SkillSlider from "./components/skillSlider/SkillSlider";
import BlogSlider from "./components/blogSlider/BlogSlider";

function App() {
  const {mode} = useSelector((state)=>state.darkMode)
  
  return (
      <div className={mode ? "app dark" : "app"}>
      <BrowserRouter>
        <Header />
        <Nav />
        <About />
        <Experience />
        <SkillSlider />
        <Services />
        {/* <BlogSlider /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;
