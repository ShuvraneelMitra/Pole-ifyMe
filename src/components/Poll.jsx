import { useState, useEffect } from "react";
import GermanFlag from '../assets/GermanFlag.png'; // Import SVGs (or use URLs)
import MexicanFlag from '../assets/MexicanFlag.png';
import VietnameseFlag from '../assets/VietnameseFlag.png';
import DutchFlag from '../assets/DutchFlag.png';

const flagMap = {
    German: GermanFlag,
    Mexican: MexicanFlag,
    Vietnamese: VietnameseFlag,
    Dutch: DutchFlag,
};

export function Poll() {
    const [votes, setVotes] = useState({
        German: 20,
        Mexican: 15,
        Vietnamese: 5,
        Dutch: 12
    });

    const [totalVotes, setTotalVotes] = useState(52);
    const [selectedLanguage, setSelectedLanguage] = useState("German");

    const handleVote = (language) => {
        const newVotes = { ...votes, [language]: votes[language] + 1 };
        const newTotalVotes = totalVotes + 1;

        setVotes(newVotes);
        setTotalVotes(newTotalVotes);

        localStorage.setItem("votes", JSON.stringify(newVotes));
        localStorage.setItem("totalVotes", newTotalVotes);
    };

    const calculatePercentage = (language) => {
        return ((votes[language] / totalVotes) * 100).toFixed(2);
    };

    useEffect(() => {
        const savedVotes = localStorage.getItem("votes");
        const savedTotalVotes = localStorage.getItem("totalVotes");

        if (savedVotes && savedTotalVotes) {
            setVotes(JSON.parse(savedVotes));
            setTotalVotes(parseInt(savedTotalVotes, 10));
        }
    }, []);

    return (
        <div className="space-y-4 mt-6">
            {["German", "Mexican", "Vietnamese", "Dutch"].map((language) => (
                <div
                    key={language}
                    className={`cursor-pointer p-3 rounded-lg ${selectedLanguage === language ? "bg-blue-500" : "bg-gray-300"
                        } flex items-center gap-4`}
                    onClick={() => {
                        handleVote(language);
                        setSelectedLanguage(language);
                    }}
                >
                    <img src={flagMap[language]} alt={`${language} flag`} className="w-16 h-auto m-2" />
                    <p className={`text-center font-bold ${selectedLanguage === language ? "text-white" : "text-black"}`}>{language}</p>
                    <p className={`text-center text-sm ${selectedLanguage === language ? "text-white" : "text-black"}`}>
                        {totalVotes > 0
                            ? `${calculatePercentage(language)}%`
                            : "No votes yet"}
                    </p>
                </div>
            ))
            }
            <div className="mt-6 text-center">
                {selectedLanguage && (
                    <p className="text-white font-bold">
                        You selected: <span className="underline">{selectedLanguage}</span>
                    </p>
                )}
                <p className="text-white mt-2">
                    Total votes: <span className="underline">{totalVotes}</span>
                </p>
            </div>
        </div >
    );
}
