import logo from "../img/logo.png";
import airbot from "../img/airobot.png";
import React, {useEffect, useRef} from "react";

export default function Footer() {
  
    return (
        <footer className="sticky-footer fixed bottom-0 w-full bg-gray-800 flex justify-between items-center p-6">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-28"></img>
                <p className="font-medium text-2xl">PalmsiFy</p>
            </div>
            <div>
                <img className="w-32" src={airbot} alt="Airbot"></img>
            </div>

            <div>
                <h4 className="text-2xl font-medium italic">Contact us</h4>
                <p><strong>Email:</strong> c1H9Z@example.com</p>
                <p><strong>Phone:</strong> 123-456-7890</p>
            </div>
        </footer>
    )
}
