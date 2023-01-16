import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>Hello, <br /> I'm 
                <img src = { LogoTitle } alt = "developer" />
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