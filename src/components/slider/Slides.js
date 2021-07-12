import React from 'react'
import "./Slider.css"
const slidesInfo = [
    {
        src:"https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg",
        alt: "Project 1" ,
        desc: "El Bosque encantado",
        link: "https://gerardo1990.github.io/Geniodelalampara/"
    },

    {
        src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "Project 2" ,
        desc: "Cursos Sliverscript",
        link: "https://gerardo1990.github.io/Sliverscript/"
    },

    {
        src:"https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
        alt: "Project 3" ,
        desc: "Fitness website",
        link: "https://gerardo1990.github.io/Fitness/#/"
    }


]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a target="_blank" href={slide.link} rel="noopener noreferrer">
        <img  src={slide.src} alt={slide.alt} />
        </a>
        
        <a target="_blank" href={slide.link} rel="noopener noreferrer">
        <div className="slide-desc">
            <span >{slide.desc}</span>
        </div>
        </a>
    </div>
))

export default slides 