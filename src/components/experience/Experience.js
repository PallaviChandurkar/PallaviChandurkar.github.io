import React from 'react';
import './experience.css';
import {HiBadgeCheck} from 'react-icons/hi';

const Experience = () => {
    return (
        <section id='experience'>
            <h2>What Skills I Have</h2>
            {/* <h2>My Experience</h2> */}
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                           <div>
                           <h4>JavaScript</h4>
                           </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                           <div>
                           <h4>Bootstrap</h4>
                           </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>Tailwind</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>React</h4>
                            </div>
                        </article>
                    </div>
                </div>

                {/* ----------------------END OF FRONTEND---------------------------- */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>Node JS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>Express JS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <HiBadgeCheck className="experience__details-icon"/>
                            <div>
                            <h4>MySql</h4>
                            </div>
                        </article>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Experience
