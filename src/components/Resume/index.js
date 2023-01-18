import './index.scss';
import React, {useEffect, useState} from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Resume = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const resumeTitle = "My Resume".split("");

    const renderResume = () => {
        return (<div className = "container resume-page">
            "BLOB BLOB ResumeUME UME USER
        </div>
            
        )
    }
}

export default Resume;