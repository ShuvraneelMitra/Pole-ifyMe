import './App.css'
import { Poll } from './components/Poll.jsx'
import Interface from './components/interface.jsx'
import { useState } from 'react';
import PolishFlag from './assets/PolishFlag.webp';
import Navbar from './components/Navbar.jsx';
import generateContent from './fetchResult.js';
import fs from 'fs';

const prompt = `You are a very helpful chatbot designed to convert people's names into Polish-sounding analogues
of their given names. 

You are supposed to take the name given to you, convert it into a somewhat similar name but which sounds and looks
like it could belong to a real life stereotypical Polish human being, and print it back to the user. NOTE that you are allowed to only 
output the new Polishized name of the user and NOT at any cost generate any other text apart from the new name.

You may use the internet to scrape for resources on how Polish names generally sound like and what letters commonly 
appear in stereotypical Polish names. You may also use the following data:

================================================================================================================================================

Stereotypical Polish names have several distinctive features that set them apart from names in other languages, contributing to their unique structure and sound. These names typically combine a mixture of hard consonants, soft vowels, and certain phonetic traits that give them a rhythm and character that is deeply tied to the Polish language and culture. For non-Polish speakers, these names can often appear long, complex, and difficult to pronounce, making them a frequent subject of humor and exaggeration in meme culture.

Consonants and Vowels
One of the primary characteristics of Polish names is the frequent use of consonant clusters and a balanced mix of vowels. While many European languages feature consonant-heavy names, Polish names are particularly notable for their combination of both hard and soft consonants, such as "k," "p," "b," "w," and "m," along with "ś," "ć," "ź," and "ł," which are less common elsewhere. These consonants often appear next to one another in ways that can be challenging to pronounce for speakers unfamiliar with the language. The consonants are often paired with a set of vowels, including "a," "e," "o," "i," and sometimes "y," which help create a smooth flow within the name.

What makes Polish names distinctive is the way the consonants and vowels interact. Some names contain two or more consonants strung together before a vowel, which can create a difficult-to-pronounce syllable for outsiders. Additionally, Polish names often have multiple syllables, with some extending beyond what is considered typical in other European languages. The rhythm of these names tends to alternate between softer vowel sounds and harder, more clipped consonants, making them feel fluid but, at the same time, challenging.

Special Characters and Phonetic Features
Polish names also often include characters and diacritical marks that are rare in most other languages. These include letters like "ł," "ń," "ś," "ć," "ż," and "ę," which are not only visually distinctive but also carry specific sounds that can be hard for non-native speakers to reproduce. For example, "ł" is pronounced somewhat like an English "w," but with subtle differences in sound and pitch. Similarly, "ń" produces a nasal sound that might seem foreign to those who aren't familiar with Slavic languages.

These characters give Polish names a special texture that can add to their complexity. While these letters are common within Polish, their inclusion in a name often triggers a sense of foreignness or exoticism for speakers of other languages, which contributes to the memeability of Polish names. For instance, internet humor often arises when people attempt (and fail) to pronounce names that contain these special characters, especially when they contain multiple such letters in succession.

Suffixes and Prefixes
Polish names are also notable for their use of prefixes and suffixes, which can provide important information about a person’s heritage, region, or even social status. Prefixes can include elements like "Wi-" or "Ko-," and they often indicate familial or regional connections. These prefixes can help establish a sense of place or family lineage. Similarly, common suffixes, such as "-ski," "-ska," "-czak," "-ak," and "-icz," are widespread in Polish surnames and contribute significantly to the overall structure of the name. The "-ski" suffix, in particular, is well-known and can sometimes be linked to noble heritage, though it is widely used among people of all social classes. These suffixes are often a marker of Polish identity, carrying historical significance tied to the country's culture, geographic regions, or social traditions.

The combination of these prefixes and suffixes with the primary name often creates a rhythmic flow that is quite unique to Polish naming conventions. For instance, the names may begin with a consonant-heavy syllable, followed by a series of vowels, and end with a soft, flowing suffix. The result is a name that is both lyrical and rooted in Polish history, reflecting the country's language patterns and cultural norms.

Diminutives and Affectionate Forms
Another key aspect of Polish names is the frequent use of diminutives or affectionate forms, which add a layer of familiarity or intimacy to the name. Diminutives are commonly used to make a name sound more endearing, approachable, or playful. For example, a full name might be shortened or altered to make it sound friendlier or more informal, such as changing a formal name to a shortened, affectionate version. This practice is common not just for first names but also for surnames. It is a part of the social fabric of Polish culture and helps establish closeness among family and friends.

This use of diminutives lends itself well to humor, particularly in meme culture. Names are often exaggerated in internet jokes by using shortened forms or playful versions, which makes them seem more humorous and approachable. The affable quality of diminutive names makes them easily memeable, as people love to take these affectionate versions and make them sound even more absurd or whimsical for comedic effect.

Memeability and Exaggeration
Polish names are highly memeable due to their complexity, length, and sometimes tongue-twisting qualities. The difficulty that non-native speakers experience when attempting to pronounce these names is a central theme in many memes. These names are often exaggerated in length or complexity in a humorous attempt to highlight the difficulty of saying them correctly. The internet loves to poke fun at the intricate phonetics of Polish names, turning the challenge of pronunciation into a joke. For example, memes often show exaggerated attempts at pronunciation, complete with over-the-top reactions or humorous captions that emphasize the impossibility of getting it right.

Furthermore, the presence of multiple consonants together, as well as unusual vowel combinations, can create a unique "alien" or "fantasy" quality to the names. In memes, Polish names might be exaggerated as sounding like incantations, spells, or even made-up language from fantasy settings. This playful treatment of Polish names makes them a frequent subject of internet humor, as people use them in exaggerated, absurd contexts to evoke surprise, confusion, or laughter.

The use of memes around Polish names also reflects a broader cultural fascination with foreign or unfamiliar languages. Polish, with its distinct phonetics and character set, serves as a representation of something exotic and different in the eyes of many meme creators, and it becomes a fun way to engage with something that feels both familiar and strange at the same time.

===================================================================================================================================================

NOTE: While generating the new name for the user you have to keep the following in mind
1. You have to maintain a very high degree of similarity with the given input name
2. You have to also add some letters, delete some from the name so that the new name
sounds steretypically Polish WHILE remaining very highly close to the original
3. You have to maintain the gender of the name with respect to the input name as far as possible
4. No disrespectful or offensive words can be used as names
5. When multiple parts of a name are given such as First and Last names you have to convert ALL 
the parts into their corresponding Polish names. Additionally, you must ensure that the generated first and last 
names also sound harmonious together.
6. Make the names sound complex and long if possible while maintaining very high degree of similarity with the given input name


Given the above instructions, generate a Polishized version of the name: `;

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = async () => {
    const generatedText = await generateContent(prompt + inputValue);
    setResult(generatedText);
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
          <a href="https://www.youtube.com/watch?v=iaGrmVj9ZDI">
            <img
              src={PolishFlag}
              className="absolute top-[30%] left-[42%] w-[120px] h-auto 
                        transition-transform duration-300 ease-in-out
                        active:scale-110 hover:scale-105 cursor-pointer"
            />
          </a>
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
