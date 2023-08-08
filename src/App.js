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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComPortfolio from "./components/ComPortfolio/ComPortfolio";
import { useSelector } from "react-redux";

function App() {
  const {mode} = useSelector((state)=>state.darkMode)
  
  return (
      <div className={mode ? "app dark" : "app"}>
      <BrowserRouter>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Routes>
          <Route path="/comportfolio" element={<ComPortfolio />} />
        </Routes>
        <Testimonials />
        <Contact />
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;
