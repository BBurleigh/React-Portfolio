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
                        letterClass = {letterClass}
                        strArray = {contactTitle} 
                        idx = {15} />
                    </h1>
                    <p>
                        Here is what I will put above my contact form...
                    </p>
                    <div className = "contact-form">
                        <form>
                            <ul>
                                <li className = "half">
                                    <input type = "text" name = "name" placeholder = "Your full and preferred name" required />
                                </li>
                                <li className = "half">
                                    <input type = "email" name = "email" placeholder = "Your email address" required />
                                </li>
                                <li>
                                    <input placeholder = "Subject" type = "text" name = "Subject of message" required /> 
                                </li>
                                <li>
                                    <textarea placeholder = "Type your message" name = "message" required></textarea>
                                </li>
                                <li>
                                    <input type = "submit" className = "flat-button" value = "Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type = "pacman" />
        </div>
    )

}

export default Contact;