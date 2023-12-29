import React from 'react';
import './about.css';
import pallavi from '../../assets/pallavi.jpg';
import {TbAward} from 'react-icons/tb';
import {FiUsers} from 'react-icons/fi';
import {BsFolder2} from 'react-icons/bs';

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
                            <TbAward className="about__icon"/>
                            <h5>Coding Enthusiast</h5>
                            {/* <small>1+ Year Working</small> */}
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Team Work</h5>
                            {/* <small>1+ Year Working</small> */}
                        </article>

                        <article className="about__card">
                            <BsFolder2 className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                    </div>

                    <p>I am a dedicated software engineer with one year of experience as a front-end developer in a dynamic startup environment. As a front-end developer, I have acquired strong proficiency in HTML, CSS, and JavaScript, as well as expertise in popular frameworks like React.js and Angular. I am now seeking a role as a software engineer where I can leverage my front-end development skills and expand my knowledge in other areas of software development. I am eager to contribute my problem-solving abilities, attention to detail, and passion for creating innovative and user-friendly applications to a team that values collaboration and embraces cutting-edge technologies.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
