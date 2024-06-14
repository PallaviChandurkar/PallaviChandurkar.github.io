import React from "react";
import "./about.css";
import pallavi from "../../assets/pallavi.jpg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pallavi} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Coding Enthusiast</h5>
              {/* <small>1+ Year Working</small> */}
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Team Work</h5>
              {/* <small>1+ Year Working</small> */}
            </article>

            <article className="about__card">
              <BsFolder2 className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
          </div>

          <p>
            I am a software engineer with one year of front-end experience in a
            startup, skilled in HTML, CSS, JavaScript, React.js, and Angular.
            Seeking to leverage and expand my expertise in a software engineer
            role, contributing my problem-solving skills and passion for
            innovative, user-friendly applications in a collaborative team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
