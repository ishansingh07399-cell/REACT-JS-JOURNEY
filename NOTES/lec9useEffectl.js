/**
 * TOPIC: REACT useEffect HOOK
 * Source: Piyush Garg (React Tutorial Series) - Video #9
 * 
 * * SIDE EFFECT KYA HAI? [00:01:05]
 * - Koi bhi aisa kaam jo component ke UI render hone ke bahar ka ho.
 * - Examples: API se data lekar aana (Data Fetching), Timers lagana (setInterval), 
 *   ya browser ke DOM ko manually change karna.
 * 
 * * useEffect KYA HAI? [00:02:15]
 * - Yeh functional components mein side effects ko manage karne ka tareeka hai.
 * - Yeh akele hi three purane lifecycle methods ka kaam kar deta hai: 
 *   componentDidMount, componentDidUpdate, aur componentWillUnmount.
 */

import React, { useState, useEffect } from 'react';



function EffectLearningComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  /**
   * 1. VARIATION 1: NO DEPENDENCY ARRAY (Koi array nahi hai) [00:03:45]
   * - Yeh component ke pehli baar screen par aane (Mount) par chalta hai...
   * - Aur uske baad jab bhi KOI BHI state badalogi aur component RE-RENDER hoga, yeh phir chalega.
   * ⚠️ PITFALL WARNING: Iske andar kabhi bhi bina condition ke same state update (`setCount`) mat karna, 
   *    nahi toh INFINITE LOOP chal jayega aur browser crash ho jayega!
   */
  useEffect(() => {
    console.log("VARIATION 1: Main har single render aur re-render par chalunga!");
  });

  /**
   * 2. VARIATION 2: EMPTY DEPENDENCY ARRAY ([]) (Khali dabaa) [00:07:20]
   * - Yeh poore component ke life cycle mein SIRF EK BAAR chalta hai, jab component pehli baar screen par load hota hai (Mount).
   * - Iske baad component mein chahe jo badlaav ho, React is block ko dobara kabhi haath nahi lagayega.
   * - Best Use Case: Jab page load hote hi backend API se data lekar aana ho.
   */
  useEffect(() => {
    console.log("VARIATION 2: Component pehli baar screen par aaya! (Main sirf ek baar chalunga)");
  }, []);

  /**
   * 3. VARIATION 3: WITH DEPENDENCY VALUES ([count]) (Variable ke sath) [00:12:10]
   * - Yeh pehli baar (Mount) par toh chalega hi, par uske baad SIRF tabhi chalega jab array ke andar ka variable (`count`) badlega.
   * - Agar aap 'text' wale input mein kuch bhi type karoge, toh yeh waala effect bilkul nahi chalega kyunki iska 'text' se koi lena-dena nahi hai.
   */
  useEffect(() => {
    console.log(`VARIATION 3: 'count' ki value badal kar ${count} ho gayi. Isliye main chal raha hoon.`);
  }, [count]);

  /**
   * 4. VARIATION 4: THE CLEANUP FUNCTION (Safai karne waala function) [00:18:55]
   * - Agar aap useEffect ke andar se ek function return karte ho, toh use 'Cleanup Function' kehte hain.
   * - React ise do cases mein chalata hai: 
   *   1. Component ke screen se gayab hone (Unmount) par.
   *   2. Agli baar is effect ke dobara chalne se just pehle (taaki purana kachra saaf ho sake).
   * - Best Use Case: Kisi chalte hue timer (setInterval) ko rokne ya event listeners ko remove karne ke liye.
   */
  useEffect(() => {
    console.log("Ek fake Event Listener setup ho gaya...");

    // Yeh hai aapka Cleanup Function
    return () => {
      console.log("VARIATION 4: Safai chalu! Purana event listener delete kar diya gaya.");
    };
  }, [count]);

  return (
    <div style={{ padding: '20px', border: '1px solid #333', textAlign: 'center' }}>
      <h2>useEffect ke logs dekhne ke liye Browser Console (F12) check karo!</h2>
      
      {/* Is button se 'count' badlega (Isse Variation 1, 3, aur 4 trigger honge) */}
      <button onClick={() => setCount(count + 1)}>
        Count Badhao ({count})
      </button>

      <br /><br />

      {/* Is input se 'text' badlega (Isse SIRF Variation 1 trigger hoga) */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Yahan kuch type karo..." 
        style={{ padding: '8px', width: '250px' }}
      />
      <p>Aapne type kiya: {text}</p>
    </div>
  );
}

/**
 * IMPORTANT RULES SUMMARY (Dhyaan rakhne yogya baatein):
 * 
 * 1. Performance Bachao: [00:14:30]
 *    Agar aap bina dependency array ke har jagah code likh doge, toh har chote click ya type par 
 *    faltoo mein heavy code chalega. Isliye sahi array parameter dena zaroori hai taaki server par load na pade.
 * 
 * 2. Dependency Array Cheat Sheet (Ratta maar lo):
 *    - `useEffect(() => {})`       -> Har render par chalega (No array).
 *    - `useEffect(() => {}, [])`   -> Sirf EK BAAR chalega page load hone par (Empty array).
 *    - `useEffect(() => {}, [x])`  -> Sirf tab chalega jab 'x' ki value badlegi.
 * 
 * 3. Cleanup Kab Chalta Hai? [00:20:15]
 *    Cleanup function sirf component ke marne par nahi chalta, balki har naye update effect ke 
 *    chalne se just pehle purane data ko wipe-out karne ke liye bhi chalta hai.
 */

export default EffectLearningComponent;