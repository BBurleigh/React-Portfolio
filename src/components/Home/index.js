import './index.scss';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['Z', 'e', 'l', 'p', 'h'];
    const jobArray = ['a', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'i', 'n', 'g', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    <span className = "letterClass">H</span>
                    <span className = {`${letterClass} _10`}>e</span>
                    <span className = {`${letterClass} _11`}>l</span>
                    <span className = {`${letterClass} _12`}>l</span>
                    <span className = {`${letterClass} _13`}>o,</span>
                    <br />
                    <span className = {`${letterClass} _14`}>I</span>
                    <span className = {`${letterClass} _15`}>'m</span>
                <img src = { LogoTitle } alt = "developer" />
                <AnimatedLetters letterClass = {letterClass} strArray = {nameArray} idx = {16} />
                <br />
                <AnimatedLetters letterClass = {letterClass} strArray = {jobArray} idx = {22} />
                </h1>
                <h2>FullStack Web Developer / Educator / Writer </h2>
                <Link to = "/contact" className = "flat-button">Contact me, whether it's to say hello or about a potential project.</Link>
            </div>
        
        </div>
    )

};

export default Home;