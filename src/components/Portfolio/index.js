import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

return (<div>
            <div className = "container portfolio-page">
                <h1 className = "page-title"> 
                    <AnimatedLetters
                        strArray = {"Portfolio".split("")}
                        idx = {15}
                    />
                </h1>

            </div>
        <Loader type = "pacman" />
    </div>
    )
}

export default Portfolio;