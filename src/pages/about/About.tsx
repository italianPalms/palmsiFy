import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import webDev from "../../img/webDev-img.webp";

const About = () => {
    return (
        <>
        <div>
            <Header />
                <div className="help-container">
                    <h1>About PalmsiFy</h1>
                    <div className="about-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <img className="img-about" src={webDev} alt="img of a web developer"></img>
                    </div>
                </div>
                {/* TODO: Fix footer */}
            {/* <Footer /> */}
        </div>        
        </>
    )
}
export default About;