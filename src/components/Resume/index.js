import './index.scss';
import React, {useEffect, useState} from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Resume = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const resumeTitle = "My Resume".split("");

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

        return (
            <div>
                <div className = "container resume-page">
                    <h1 className = "resume-title">
                        <AnimatedLetters
                        letterClass = {letterClass}
                        strArray = {resumeTitle}
                        idx = {15}
                        />
                    </h1>
                    <iframe className = "resume-container" src="https://drive.google.com/file/d/1leCnSuOcqdlvZ2yvqocCEFwQCludWt9y/preview" width="800" height="500" allow="autoplay"></iframe>
                </div>
            <Loader type = "pacman" />
        </div>    
    )
}

export default Resume;