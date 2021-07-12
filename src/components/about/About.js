import React from 'react'
import "./About.css"
import Selfie from "../../media/me.png" 
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Something about me </h3>
                <p>I'm Engineer In Systems, Software developer with experience in Web Technologies.</p>
                <br/>
                <p>Frontend Developer, specialized in JavaScript, Passionate about Web development, I collaborate with communities sharing my JavaScript knowledge, especially I teach React JS and design.</p>
            </div>

            <div className="about-img">
                <img src={Selfie} alt="selfie"/>
            </div>

        </div>
    )
}

export default About
