import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const contactTitle = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])
    
    return (
        <div>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <h1>
                        <AnimatedLetters
                        strArray = {contactTitle} 
                        idx = {15} />
                    </h1>
                </div>
            </div>
            <Loader type = "pacman" />
        </div>
    )

}

export default Contact;