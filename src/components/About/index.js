import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const aboutTitle = "About me".split("");
    
    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

    return (
        <div className = "container about-page">
            <div className = "text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass}
                    strArray = {aboutTitle}
                    idx = {15} 
                    />
                </h1>
                <p>
                    WHAT I'M LOOKING FOR IS... ambition
                </p>
                <p>
                    MY EDUCATION/BACKGROUND... confidence
                </p>
                <p>
                    OUTSIDE OF WORK... creative
                </p>

                <div className = "stage-cube-cont">
                    <div className = "cubespinner">
                        <div className = "face1">
                            <FontAwesomeIcon icon = {faAngular} color = "#DD0031" />
                        </div>
                        <div className = "face2">
                        <FontAwesomeIcon icon = {faHtml5} color = "#F06529" />
                        </div>
                        <div className = "face3">
                        <FontAwesomeIcon icon = {faCss3} color = "#28A4D9" />
                        </div>
                        <div className = "face4">
                        <FontAwesomeIcon icon = {faReact} color = "#5ED4F4" />
                        </div>
                        <div className = "face5">
                        <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D" />
                        </div>
                        <div className = "face6">
                        <FontAwesomeIcon icon = {faGitAlt} color = "#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type = "pacman" />
        </div>
    )
}

export default About;