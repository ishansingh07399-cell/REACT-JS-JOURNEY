/**
 * TOPIC: PROPS IN REACT (Properties)
 * Source: Piyush Garg (React Tutorial Series)
 * 
 * * PROPS KYA HAIN? [00:00:52]
 * - 'Props' ka matlab hota hai Properties.
 * - Yeh bilkul waise hi kaam karte hain jaise kisi normal JavaScript function mein arguments pass kiye jaate hain.
 * - Props hamare components ko "Generic" aur reusable banate hain, jisse hum ek hi component 
 *   ka use karke alag-alag data screen par render kar sakte hain bina uske core code ko badle.
 */

import React from 'react';

/**
 * 1. DEFINING A COMPONENT WITH PROPS (Component mein props receive karna)
 * - Jab bhi hum parent se koi data bhejte hain, toh child component use apne function ke 
 *   pehle parameter mein ek 'Object' ke roop mein receive karta hai. [00:02:45]
 */
function TodoItem(props) {
  // Background mein 'props' ek aisa object dikhta hai: { text: "Eat", completed: true }
  
  return (
    <li className="todo-item">
      <span>
        {/* 
           Conditional Rendering using Props [00:07:32] 
           - Agar parent component ne 'completed' prop ko true NAHI bheja hai (!props.completed), 
             tabhi yeh checkbox (<input />) screen par dikhega.
           - Jab completed={true} aayega, toh '!true' false ban jayega aur checkbox gayab ho jayega.
        */}
        {!props.completed && <input type="checkbox" />}
        
        {/* 
           Using a prop value (Dynamic Text) [00:04:23] 
           - Object se value nikalne ke liye hum curly braces {} ke andar 'props.text' likhenge.
           - Isse har ek TodoItem mein alag aur dynamic naam print hoga (jaise Eat, Code, Sleep).
        */}
        <span className="todo-item-text">{props.text}</span>
      </span>

      {/* 
         Passing data to a nested element (Default value using OR `||`) [00:09:57] 
         - Agar parent ne 'customTag' bheja hai, toh wo dikhao. 
         - Agar nahi bheja (undefined hai), toh default backup ke taur par "..." dikha do.
      */}
      <p>{props.customTag || "..."}</p>
    </li>
  );
}

/**
 * 2. PASSING PROPS TO COMPONENTS (Parent se data pass karna)
 * - Hum HTML attributes ki tarah hi child components ke andar props pass karte hain.
 * - Yeh hamesha Key/Value pairs ke roop mein hote hain: attributeName="value"
 */
function App() {
  return (
    <div className="todo-container">
      <h1>My Tasks</h1>
      
      {/* Variation 1: Sirf ek string prop pass kiya jiska naam 'text' hai [00:05:05] */}
      <TodoItem text="Eat" />
      
      {/* Variation 2: SAME component ko bilkul alag text bheja (Isi ko Reusability kehte hain) [00:05:14] */}
      <TodoItem text="Code" />
      
      {/* Variation 3: Ek se zyada props pass karna (Ek String aur ek Boolean value) [00:08:21] */}
      <TodoItem text="Sleep" completed={true} />
      
      {/* Variation 4: Ek custom tag banna extra feature ya styling ke liye [00:10:03] */}
      <TodoItem text="Repeat" customTag="Done" />
    </div>
  );
}

/**
 * WHY DO WE NEED PROPS? & KEY CONCEPTS (Video Ka Asli Nichod): [00:00:39]
 * 
 * 1. Hardcoding Se Bachao (Avoid Hardcoding): 
 *    Agar props nahi hote, toh har ek 'TodoItem' ke andar ek hi fixed text likha hota, 
 *    jisse saare ke saare tasks bilkul copy-paste lagte. Props se har item unique banta hai.
 * 
 * 2. Control From Parent (Baap ka control): 
 *    Main component (App.js) hi yeh tay karta hai ki uska child component (TodoItem) 
 *    screen par kya data dikhane wala hai aur uska behavior kaisa hoga.
 * 
 * 3. Props are Read-Only (Immutable): 
 *    Child component (`TodoItem`) ko jo props mile hain, wo unhe apne andar directly 
 *    change nahi kar sakta (e.g., `props.text = "New"` likhna sakht mana hai). Data hamesha 
 *    Parent se Child ki taraf ek hi direction mein behta hai (Unidirectional Data Flow).
 * 
 * 4. Functional Logic Alignment: [00:01:42]
 *    Jaise ek JavaScript function `add(a, b)` alag-alag inputs lekar alag-alag answers deta hai, 
 *    waise hi React components alag-alag props lekar alag-alag UI outputs render karte hain.
 */

export default App;