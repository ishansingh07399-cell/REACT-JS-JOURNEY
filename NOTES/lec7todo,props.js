/**
 * TOPIC: REACT EVENT HANDLING (In Continuation with Todo Project)
 * Source: Piyush Garg (React Tutorial Series) - Video #7
 * 
 * * WHAT IS EVENT HANDLING IN PRACTICE? [00:00:45]
 * - Jab hum real projects (jaise humare Todo App) mein kaam karte hain, toh humein user ke 
 *   interactions (click, type, submit) ko capture karna padta hai.
 * - Is code mein hum pichle wale TodoItem aur App component ko aage badha rahe hain aur usme 
 *   Events (`onClick` aur `onChange`) ko integrate kar rahe hain.
 */

import React, { useState } from 'react';

/**
 * 1. CHILD COMPONENT: TodoItem
 * - Yeh component ab props mein ek function (`onDelete`) bhi receive karega parent se.
 */
function TodoItem(props) {
  
  // Custom function jo delete click hone par chalega [00:03:20]
  const handleItemClick = () => {
    alert(`Aapne "${props.text}" task par click kiya!`);
  };

  return (
    <li className="todo-item" style={{ margin: '10px 0', listStyle: 'none' }}>
      <span onClick={handleItemClick} style={{ cursor: 'pointer' }}>
        {!props.completed && <input type="checkbox" />}
        <span className="todo-item-text" style={{ marginLeft: '10px' }}>{props.text}</span>
      </span>

      {/* 
         VARIATION 1: Passing Arguments on Click [00:08:15]
         - Agar hamein click hone par item ka naam ya ID parent function ko bhejni hai, 
           toh hum inline arrow function `() =>` ka use karte hain.
         - Yeh parent ke 'onDelete' function ko call karega aur usme 'props.text' bhej dega.
      */}
      <button 
        onClick={() => props.onDelete(props.text)} 
        style={{ marginLeft: '20px', color: 'red' }}
      >
        Delete
      </button>
    </li>
  );
}

/**
 * 2. PARENT COMPONENT: App
 * - Yahan hum Naya Todo type karne ke liye Input lagayenge aur lists ko manage karenge.
 */
function App() {
  // Input box ki state ko manage karne ke liye useState [00:12:40]
  const [newTodo, setNewTodo] = useState("");

  /**
   * VARIATION 2: Input Change Handler (The 'e' Object) [00:14:10]
   * - Jab bhi user input box mein kuch type karega, browser ek Event Object `e` generate karta hai.
   * - `e.target.value` se hume wo text milta hai jo user ne abhi-abhi type kiya hai.
   */
  const handleInputChange = (e) => {
    setNewTodo(e.target.value); // State update ho rahi hai har ek keystroke par
  };

  // Todo delete hone par chalne wala function [00:09:55]
  const handleTodoDelete = (todoName) => {
    alert(`Parent Component: "${todoName}" ko delete kiya jaa raha hai.`);
  };

  return (
    <div className="todo-container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>My Tasks & Events</h1>
      
      {/* Input Field Form For Event Handling */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={newTodo} 
          onChange={handleInputChange} // Event trigger on typing
          placeholder="Naya task yahan likho..."
          style={{ padding: '8px', width: '70%' }}
        />
        <p style={{ fontSize: '12px', color: 'gray' }}>Typing Mirror: {newTodo}</p>
      </div>

      {/* Rendering Todo Items and passing functions as props */}
      <ul>
        {/* Case A: Simple todo without completion */}
        <TodoItem text="Eat" onDelete={handleTodoDelete} />
        
        {/* Case B: Todo with completed status */}
        <TodoItem text="Code" completed={true} onDelete={handleTodoDelete} />
        
        {/* Case C: Custom tag ke sath */}
        <TodoItem text="Sleep" customTag="Urgent" onDelete={handleTodoDelete} />
      </ul>
    </div>
  );
}

/**
 * KEY CONCEPTS & INTERCONNECTION (Props + Events):
 * 
 * 1. Functions Passed as Props:
 *    React mein hum sirf data (strings, booleans) hi nahi, balki pure ke pure **Functions** 
 *    bhi prop ke roop mein child ko bhej sakte hain (jaise humne `onDelete={handleTodoDelete}` bheja). 
 *    Isse Child ka event direct Parent ki state ya logic ko trigger kar sakta hai.
 * 
 * 2. Function Execution Pitfall [00:06:40]:
 *    - `onChange={handleInputChange}` -> ✅ SAHI (Sirf naam likha hai, type karne par hi chalega).
 *    - `onChange={handleInputChange()}` -> ❌ GALAT (Brackets lagane se yeh page load hote hi bina type kiye chal jayega).
 * 
 * 3. Synthetic Event Layer [00:16:20]:
 *    React mein `e.target.value` ka jo `e` hai, wo browser ka raw event nahi hota. Wo React ka 
 *    'SyntheticEvent' hota hai, jo har ek browser (Chrome, Safari, Firefox) par bina kisi cross-browser bug ke 
 *    bilkul ek jaisa behave karta hai.
 */

export default App;