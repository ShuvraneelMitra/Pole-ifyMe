import React from "react";
import Heart from '../assets/Heart.webp';
import GitHub from '../assets/GitHub.svg';
import Email from '../assets/Email.webp';

const Navbar = () => {
    return (
        <div className="bg-[#FFB5C0] text-white flex items-start w-screen h-[100px] shadow-[0px_4px_15px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-center w-full h-full relative">
                <span className="font-black text-[27px] flex items-center gap-2">
                    Developed with
                    <a href="https://www.youtube.com/watch?v=td2O06HfhDY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-all duration-200 w-8 h-8 hover:w-10 hover:h-10 active:scale-95">
                        <img src={Heart} />
                    </a> by
                    <a href="https://github.com/ShuvraneelMitra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-all duration-200 hover:scale-105 active:scale-95
                        hover:text-pink-600">
                        @insipidintegrator</a>
                </span>
                <div className="flex items-center gap-10 absolute right-10">
                    <a
                        href="https://github.com/ShuvraneelMitra/Pole-ifyMe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-all duration-200 hover:scale-110 active:scale-90"
                    >
                        <img src={GitHub} alt="GitHub" className="w-14 h-14" />
                    </a>
                    <a
                        href="mailto:mitrashuvraneel@gmail.com"
                        className="transform transition-all duration-200 hover:scale-110 active:scale-90"
                    >
                        <img src={Email} alt="Email" className="w-14 h-14" />
                    </a>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
