import React from 'react';
import './projects.css';
import FOOD from '../../assets/Food Ordering App.png';
import YOUTUBE from '../../assets/Youtube_Clone.png';
import NETFLIX from '../../assets/NetFlix Clone.png';

const data = [
    {
        id: 1,
        image: FOOD,
        title: 'Food Ordering App created using React',
        github: 'https://github.com',
        // demo: 'https://github.com'
    },
    {
        id: 2,
        image: YOUTUBE,
        title: 'Youtube Clone developed using React',
        github: 'https://github.com/PallaviChandurkar/Youtube_Clone',
        // demo: 'https://github.com'
    },
    {
        id: 3,
        image: NETFLIX,
        title: 'NetflixGPT created using React',
        github: 'https://github.com/PallaviChandurkar/NetflixGPT',
        // demo: 'https://github.com'
    }
]


const Project = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo}) => {
                        return (
                            <article key={id} className="portfolio__item"> 
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                <a href={github} target='_blank' rel="noreferrer" className="btn">Github</a>
                                {/* <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a> */}
                                </div>
                        </article>
                        )
                    })
                } 
            </div>
        </section>
    )
}

export default Project
