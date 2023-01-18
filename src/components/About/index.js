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
                I have always found myself drawn to discovering and 
understanding patterns, correlations, and why something is the
way it is. It's one of the reasons I love mathematics and the
analytical side of writing. And it's why I've been fascinated
with coding and am looking for a position somewhere in the 
coding world.
                </p>
                <p>
                Given my educational background, I have never been one
to shy away from challenges. For the past 5 years, I have 
taught high school math, ranging from Geometry to Probability
and Statistics. Prior to this, I graduated from college with 
degrees in mathematics secondary education as well as English:
literary studies. And during my fifth year of teaching, I
earned my full stack flex certification.
                </p>
                <p>
                Outside of work, I balance my passion for being active
exercising with satisfying my creative desires. I'm an avid
runner, and beyond that, I'm a fiction/fantasy writer who 
regularly works with different writing groups. And beyond
myself, I volunteer regularly at an animal shelter.
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