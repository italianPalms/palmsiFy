import React, { useEffect, useRef, useState } from "react";
import logo from "../img/logo.png";
import airbot from "../img/airobot.png";
import Youtube from "../img/yt_logo_rgb_dark.png";
import X from "../img/logo-white.png"
import Instagram from "../img/Instagram_Glyph_Gradient.png";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            const documentHeight = document.body.scrollHeight - window.innerHeight;

            setIsVisible(scrollPosition >= documentHeight);
        }

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer-container ${isVisible ? 'visible' : ''}`}>
            <div className="footer-logo_name">
                <img src={logo} alt="logo" className="footer-logo"></img>
                <p className="footer-text">PalmsiFy</p>
            </div>
            <div>
                <img className="footer-img" src={airbot} alt="Airbot"></img>
            </div>

            <div>
                <h4><strong>Contact us</strong></h4>
                <p><strong>Email:</strong> c1H9Z@example.com</p>
                <p><strong>Phone:</strong> 123-456-7890</p>
                <div className="">
                    <a href="https://www.youtube.com">
                    <img className="youtube-logo-homePage" src={Youtube} alt="" />
                    </a>

                    <a href="https://www.x.com">
                    <img className="x-logo-homePage" src={X} alt="" />
                    </a>
                    
                    <a href="https://www.instagram.com">
                    <img className="instagram-logo-homePage" src={Instagram} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;