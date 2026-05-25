/**
 * TOPIC: REACT HOOKS & useState
 * Source: Piyush Garg (React Tutorial Series) - Video #8
 * 
 * * HOOKS KYA HAIN? [00:11:32]
 * - Hooks special functions hote hain jo aapko React ke features se "hook into" karne ki permission dete hain.
 * - Inki wajah se hum Functional Components ke andar bhi 'State' aur 'Lifecycle' features ka use kar sakte hain.
 * 
 * * THE COMPONENT LIFECYCLE (Component Ka Jeevan Chakra): [00:01:16]
 * 1. Mounting: Jab component pehli baar banta hai aur DOM/screen par dikhai deta hai. [00:01:16]
 * 2. Updating: Jab component ka data (State ya Props) badalta hai aur wo fir se refresh (Re-render) hota hai. [00:01:31]
 * 3. Unmounting: Jab component screen se hat jata hai ya gayab ho jata hai. [00:02:42]
 */

import React, { useState } from 'react';

/**
 * UNDERSTANDING STATE (State Kya Hai?): [00:03:00]
 * - State ek component ki apni personal "local memory" ya "variable" hoti hai.
 * - Normal variables ke badalne par React screen ko refresh nahi karta, par jab 'State' badalti hai, 
 *   toh React automatically poore component ko RE-RENDER karta hai taaki naya data screen par dikhe. [00:15:18]
 */

function CounterComponent() {
  /**
   * useState HOOK SYNTAX: [00:05:42]
   * const [state, setState] = useState(initialValue);
   * 
   * 1. 'count': Current state ki value (abhi iski value starting waali hai). [00:09:51]
   * 2. 'setCount': Ek special function jo is 'count' ki value ko update karega. [00:06:00]
   * 3. '0': Initial starting value (Yeh sirf sabse pehli baar/Mounting par use hoti hai). [00:21:46]
   */
  const [count, setCount] = useState(0);

  // Ek hi component ke andar hum multiple independent states bhi bana sakte hain [00:16:36]
  const [name, setName] = useState("ishan");

  // Increment handle karne ki logic [00:13:35]
  const handleIncrement = () => {
    /**
     * ⚠️ PITFALL WARNING (Sabse Badi Galti):
     * Hum kabhi bhi state ko directly change nahi karte (e.g., `count = count + 1` likhna bilkul GALAT hai). [00:12:23]
     * Hamesha React ke diye gaye setter function (`setCount`) ka hi istemal karna hoga.
     */
    setCount(count + 1);
  };

  // Decrement handle karne ki logic
  const handleDecrement = () => {
    // Zero se neeche na jaye isliye condition lagayi hai
    if (count > 0) setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', border: '2px solid #4CAF50', padding: '20px' }}>
      
      {/* 1. State ko screen par dikhana */}
      <h2>Count is: {count}</h2>
      
      {/* 
        2. State ke basis par Conditional Rendering [00:19:11] 
        - Yeh Piyush Garg ka video mini-challenge hai.
        - Agar count 2 se perfectly divide ho jaye toh "Even", nahi toh "Odd".
      */}
      <p>Number is: <b>{count % 2 === 0 ? "Even" : "Odd"}</b></p>

      {/* 3. Click hone par State ko update karna [00:10:21] */}
      <button onClick={handleIncrement}>Increment (+)</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>
        Decrement (-)
      </button>

      <hr />
      <p>User Name: {name}</p>
      <button onClick={() => setName("Piyush Garg")}>Change Name</button>
    </div>
  );
}

/**
 * KEY CONCEPTS (Video Ka Asli Nichod):
 * 
 * 1. Independent State (Azaad State): [00:23:34]
 *    Agar aap is <CounterComponent /> ko App.js mein 3 baar use karoge, toh teeno counters 
 *    apna alag-alag count maintain karenge. Ek ka button dabane se dusre par koi asar nahi padega.
 * 
 * 2. Re-rendering Mechanism: [00:15:18]
 *    Jaise hi `setCount` call hota hai, React back-end mein is pure `CounterComponent()` function ko 
 *    DOBARA RUN karta hai taaki naya data HTML ke sath mix ho kar screen par refresh ho sake.
 * 
 * 3. Initial Value Rule: [00:21:46]
 *    useState(0) ke andar jo `0` hai, wo sirf pehli baar (Mounting ke waqt) kaam aata hai. 
 *    Uske baad jab bhi component re-render hota hai, React purani starting value ko ignore
 *    karke naye updated count ko yaad rakhta hai.
 */

export default CounterComponent;