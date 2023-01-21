import './index.scss';
import zelphLogo from '../../../assets/images/zelph_persona.jpg';
import gsap from 'gsap-trial';
import { useEffect, useRef } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
            solidLogoRef.current, {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])
    
    return (
        <div className = "logo-container" ref = {bgRef}>
            <img ref = {solidLogoRef} className = "solid-logo" src = {zelphLogo} alt = "zelph_logo" />
        </div>
    )

};

export default Logo;