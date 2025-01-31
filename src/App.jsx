import './App.css'
import { Poll } from './components/Poll.jsx'
import Interface from './components/interface.jsx'
import { useState } from 'react';
import PolishFlag from './assets/PolishFlag.webp'
import Navbar from './components/Navbar.jsx'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = () => {
    setResult(`Hello, ${inputValue}!`);
  };

  return (
    <div>
      <div className='w-screen h-screen bg-[image:linear-gradient(135deg,#f8c8dc_0%,#f8c8dc_50%,#c2b4e2_50%,#c2b4e2_100%)] 
      flex items-center justify-center relative'>
        <div className='absolute top-0 left-0'>
          <Navbar />
        </div>
        <div className='relative w-[45%] h-3/4 bg-[#e0bbe4] mr-20 rounded-3xl shadow-[0px_40px_50px_rgba(0,0,0,0.7)]'>
          <Interface />
          <img src={PolishFlag} className='absolute top-[30%] left-[42%] w-[120px] h-auto'></img>
          <div className='absolute top-[50%] left-[15%] flex items-center justify-center bg-[#e0bbe4] gap-8'>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='w-80 h-20 rounded-3xl text-center py-2 px-4 border-2 text-lg bg-white'
            />
            <button
              className="px-8 py-4 bg-gradient-to-br from-pink-300 via-pink-400 to-purple-600 text-white font-bold font-fredoka rounded-full shadow-lg
               hover:from-pink-500 hover:via-pink-600 hover:to-purple-500 transition-all duration-300"
              onClick={handleButtonClick}
            >
              Pole-ify My Name!
            </button>
          </div>
          {result && (
            <div>
              <div className='absolute top-[66%] left-[15%] text-left text-[30px] font-fredoka
                              font-extrabold text-[#800080]'>
                Your Pole-ified name is now:
              </div>
              <div className='absolute top-[76%] left-[15%] flex items-center justify-center
                            w-[66%] h-[16%] border-dashed border-4 border-red-300 p-4 rounded-xl bg-white
                            text-[30px] font-black'
                style={{ boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                {result}
              </div>
            </div>
          )}
        </div>

        <div className='w-[30%] h-[64%] bg-black ml-20 rounded-3xl shadow-[0px_20px_30px_rgba(0,0,0,0.7)]'>
          <p className='text-white p-11 font-black text-3xl font-mono'>
            Which language should I make this for next?
            <Poll />
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
