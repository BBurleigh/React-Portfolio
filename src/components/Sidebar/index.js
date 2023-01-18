import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/zelph_logo.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,  faPaperclip, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className = "navbar">
        <Link className = "logo" to = "/">
            <img src ={LogoS} alt = "logo" />
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#2e3138" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "about-link" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "#2e3138" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "portfolio-link" to = "/portfolio">
                <FontAwesomeIcon icon = {faSuitcase} color = "#2e3138" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "resume-link" to = "/resume">
                <FontAwesomeIcon icon = {faPaperclip} color = "#2e3138" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#2e3138" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/brayden-burleigh-a893b91b3">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#2e3138" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://github.com/BBurleigh">
                    <FontAwesomeIcon icon = {faGithub} color = "#2e3138" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;