import React from "react";
import "./header.css";
import img2 from "../../assets/img2.png";
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
// import Pallavi_Chandurkar from '../../assets/Pallavi_Chandurkar .pdf';
import Pallavi_Chandurkar from '../../assets/Pallavi_Chandurkar.pdf';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pallavi Chandurkar</h1>
        <h5 className="text-light">Web Developer</h5>
        <div className="cta">
          <a href={Pallavi_Chandurkar} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="header__socials">
            <a href="https://linkedin.com" className="social__icon" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com" className="social__icon" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        </div>
        <div className="me">
          <img src={img2} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
