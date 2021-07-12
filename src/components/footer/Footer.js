import React from 'react'
import Html from "../../media/html.png"
import Css from "../../media/css.png"
import Jaavascript from "../../media/javascript.png"
import Booostrap from "../../media/boostrap.png"
import ReactJS from "../../media/react.svg.png"
import Git from "../../media/git.svg.png"
import Github from "../../media/github.png"
import Webpack from "../../media/webpack.png"
import "./Footer.css"
const footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h4>Knowledge:</h4>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/HTML">
                            <img src={Html} alt="HTML" title="HTML"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada">
                            <img src={Css} alt="CSS" title="CSS3"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/JavaScript">
                            <img src={Jaavascript} alt="JAVASCRIPT" title="Javascript"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Bootstrap_(framework)">
                            <img src={Booostrap} alt="BOOSTRAP" title="Boostrap"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/React">
                            <img src={ReactJS} alt="Reactjs" title="React JS"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Git">
                            <img src={Git} alt="Git" title="Git"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/GitHub">
                            <img src={Github} alt="Github" title="Github"/>
                        </a>
                    </div>
                </div>

                <div className="skill-container">
                    <div className="container-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Webpack">
                            <img src={Webpack} alt="Webpack" title="Webpack"/>
                        </a>
                    </div>
                </div>

            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let´s get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design By Gerardo G.
                </div>
                <div className="sns-links">
                    <a target="_blank" href="https://www.linkedin.com/in/gerardo-gomez-4b19571b4/" rel="noopener noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>

                    <a  target="_blank" href="https://www.facebook.com/gerardo.andres.940/" rel="noopener noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>

                    <a  target="_blank" href="https://www.instagram.com/jackdeamon/" rel="noopener noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default footer
