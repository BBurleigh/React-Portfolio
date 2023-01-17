import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    
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