import React from "react";
import Heart from '../assets/Heart.webp'
import GitHub from '../assets/GitHub.svg'
import Email from '../assets/Email.webp'

const Navbar = () => {
    return (<>
        <div className="bg-[#FFB5C0] text-white flex items-start w-screen h-[100px] shadow-[0px_4px_15px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-center w-full h-full relative">
                <span className="font-black text-[27px] flex items-center gap-2">
                    Developed with <img src={Heart} className="w-7 h-7" /> by @insipidintegrator
                </span>
                <div className="flex items-center gap-10 absolute right-10">
                    <a href=""><img src={GitHub} alt="" className="w-14 h-14 gap-10" /></a>
                    <a><img src={Email} alt="" className="w-14 h-14 gap-10" /></a>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar