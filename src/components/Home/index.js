import './index.scss';
import { useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['Z', 'e', 'l', 'p', 'h'];
    const jobArray = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e','l', 'o', 'p', 'e', 'r', ' ', '/', ' ', 'E', 'd', 'u', 'c', 'a', 't', 'o', 'r', ' ', '/', ' ', 'W', 'r', 'i', 't', 'e', 'r']

    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>Hello, <br /> I'm 
                <img src = { LogoTitle } alt = "developer" />
                <AnimatedLetters letterClass = {letterClass} strArray />
                Zelph, 
                <br />
                a developing developer.
                </h1>
                <h2>FullStack Web Developer / Educator / Writer </h2>
                <Link to = "/contact" className = "flat-button">Contact me, whether it's to say hello or about a potential project.</Link>
            </div>
        
        </div>
    )

};

export default Home;