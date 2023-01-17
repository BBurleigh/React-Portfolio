import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const form = useRef();

    const contactTitle = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_lis3x97', e.target, 'h71gAcwrk3I-zQSU2')
    .then(
        () => {
            alert("Your message has been sent, and I'll follow up with you in at most 24 hours!");
            window.location.reload(false)
            },
        () => {
            alert("There was an issue sending this. Please try again.")
              }
        )
   }
    
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
                        <form ref = {form} onSubmit = {sendEmail}>
                            <ul>
                                <li className = "half">
                                    <input type = "text" name = "name" placeholder = "Your preferred name" required />
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