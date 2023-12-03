import logo from "../img/logo.png";
import airbot from "../img/airobot.png";
import Youtube from "../img/yt_logo_rgb_dark.png";
import X from "../img/logo-white.png"
import Instagram from "../img/Instagram_Glyph_Gradient.png";

export default function Footer() {
  
    return (
        <footer className="sticky-footer fixed bottom-0 w-full bg-black flex justify-between items-center p-6">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-28"></img>
                <p className="font-medium text-2xl">PalmsiFy</p>
            </div>
            <div>
                <img className="w-32" src={airbot} alt="Airbot"></img>
            </div>

            <div>
                <h4 className="text-2xl font-medium italic mb-2">Contact us</h4>
                <p><strong>Email:</strong> c1H9Z@example.com</p>
                <p><strong>Phone:</strong> 123-456-7890</p>
                <div className="flex items-center mt-4">
                    <a href="https://www.youtube.com">
                    <img className="w-20 mr-8" src={Youtube} alt="" />
                    </a>

                    <a href="https://www.x.com">
                    <img className="w-5 mr-8" src={X} alt="" />
                    </a>
                    
                    <a href="https://www.instagram.com">
                    <img className="w-7" src={Instagram} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
