import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../Data/portfolio.json';

const Portfolio = () => {

    // console.log(portfolioData);

    const [letterClass, setLetterClass] = useState('text-animate');

    const portfolioTitle = "Portfolio".split("");

    const renderPortfolio = (portfolio) => {
        return (<div images-container>
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className = "image-box" key = {idx}>
                            <img className = "portfolio-image" src = {port.cover_image} alt = "portfolio image" />
                        </div>
                    )
                })
            }
        </div>)
    };

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
                    <div>
                        {renderPortfolio(portfolioData.portfolio)}
                    </div>
                </h1>

            </div>
        <Loader type = "pacman" />
    </div>
    )
}

export default Portfolio;