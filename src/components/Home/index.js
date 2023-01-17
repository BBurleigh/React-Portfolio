import './index.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['Z', 'e', 'l', 'p', 'h'];
    const jobArray = ['a', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'i', 'n', 'g'];
    const jobArray2 = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
         setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
    <div>
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
                <br />
                <AnimatedLetters letterClass = {letterClass} strArray = {jobArray2} idx = {35} />
                </h1>
                <h2>FullStack Web Developer / Educator / Writer </h2>
                <Link to = "/contact" className = "flat-button">Contact me, whether it's to say hello or about a potential project.</Link>
            </div>
        <Logo />
        </div>

        <Loader type = "pacman" />
    </div>
    )

};

export default Home;