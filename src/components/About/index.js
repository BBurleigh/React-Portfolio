import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 5000)
   }, [])

    return (
        <div className = "container about-page">
            <div className = "text-zone">
                <h1>
                    <AnimatedLetters
                    strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
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
            </div>
        </div>
    )
}

export default About;