import React from 'react';

const Interface = ({ selectedLanguage }) => {
    const textMap = new Map([
        ["None", "Pole-ify Me!"],
        ["German", "Germanise Me!"],
        ["Mexican", "Make Me a Latina!"],
        ["Vietnamese", "Make me good at math!"],
        ["Dutch", "Let's go Dutch!"]
    ]);

    return (
        <>
            <div className='flex items-center justify-center'>
                <svg
                    className="w-[85%] h-auto"
                    viewBox="0 0 200 180"
                >
                    <path id="curve" d="M10,120 A90,70 0 0,1 190,120" fill="transparent" />

                    <text className="font-bold text-2xl font-fredoka" fill="#590042">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            {textMap.get(selectedLanguage)}
                        </textPath>
                    </text>
                    <text className="font-bold text-2xl font-fredoka" fill="#96005A" dx="1" dy="1">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            {textMap.get(selectedLanguage)}
                        </textPath>
                    </text>
                    <text className="font-bold text-2xl font-fredoka" fill="#D90166" dx="2" dy="2">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            {textMap.get(selectedLanguage)}
                        </textPath>
                    </text>
                    <text className="font-bold text-2xl font-fredoka" fill="white" dx="3" dy="3">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            {textMap.get(selectedLanguage)}
                        </textPath>
                    </text>
                </svg>
            </div>
        </>
    );
}

export default Interface;
