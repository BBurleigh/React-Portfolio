import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const portfolioTitle = "Portfolio".split("");

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

return (<div>
            <div className = "container portfolio-page">
                <h1 className = "page-title"> 
                    <AnimatedLetters
                        letterClass = {letterClass}
                        strArray = {portfolioTitle}
                        idx = {15}
                    />
                </h1>

            </div>
        <Loader type = "pacman" />
    </div>
    )
}

export default Portfolio;