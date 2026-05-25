/**
 * TOPIC: PROPS IN REACT
 * Source: Piyush Garg (React Tutorial Series)
 * * WHAT ARE PROPS?
 * - 'Props' stands for Properties.
 * - They are like arguments passed to a JavaScript function. [00:00:52]
 * - Props make your components "Generic" and reusable by allowing them to display 
 * different data without changing the component code itself.
 */

import React from 'react';

/**
 * 1. DEFINING A COMPONENT WITH PROPS
 * - Props are received as an object in the function parameter. [00:02:45]
 */
function TodoItem(props) {
  return (
    <li className="todo-item">
      <span>
        {/* Conditional Rendering using Props [00:07:32] */}
        {/* If 'completed' prop is NOT true, show the checkbox */}
        {!props.completed && <input type="checkbox" />}
        
        {/* Using a prop value (dynamic text) [00:04:23] */}
        <span className="todo-item-text">{props.text}</span>
      </span>
      {/* Passing data to a nested element [00:09:57] */}
      <p>{props.customTag || "..."}</p>
    </li>
  );
}

/**
 * 2. PASSING PROPS TO COMPONENTS
 * - You pass props like HTML attributes.
 * - Key/Value pairs: attributeName="value"
 */


function App() {
  return (
    <div className="todo-container">
      <h1>My Tasks</h1>
      
      {/* Passing a string prop named 'text' [00:05:05] */}
      <TodoItem text="Eat" />
      
      {/* Passing different text to the SAME component (Reusability) [00:05:14] */}
      <TodoItem text="Code" />
      
      {/* Passing multiple props (text and a boolean) [00:08:21] */}
      <TodoItem text="Sleep" completed={true} />
      
      {/* Passing a custom prop for the end icon/tag [00:10:03] */}
      <TodoItem text="Repeat" customTag="Done" />
    </div>
  );
}

/**
 * WHY DO WE NEED PROPS? [00:00:39]
 * 1. Avoid Hardcoding: Without props, every 'TodoItem' would show the same text.
 * 2. Control from Parent: The Parent (App.js) decides what the Child (TodoItem) 
 * should display or how it should behave.
 * 3. Functional Logic: Just like passing 'a' and 'b' to an add(a, b) function, 
 * we pass data to components to get specific UI outputs. [00:01:42]
 */

export default App;


/*

Bina props ke, React component ek aisi photo copy machine ki tarah hai jo sirf ek hi document print kar sakti hai. Props us machine ko smart banate hain taaki aap har baar naya text de sakein aur wo naya document print kare.

1. Props Ka Asli Matlab Kya Hai? (What are Props?)
Video ke [00:00:52] timestamp par bataya gaya hai ki Props = Function Arguments.

Jab aap JavaScript mein koi normal function banate hain:

JavaScript
function greet(name) {
  console.log("Hello " + name);
}
greet("Ishan"); // Output: Hello Ishan
greet("Nitish"); // Output: Hello Nitish
Yahan name ek argument hai jo function ko reusable (generic) banata hai. React mein bhi bilkul yahi hota hai. Yahan function ek component hota hai (TodoItem), aur usme jo data hum bhejte hain (text, completed), unhe hum Props kehte hain.

2. Parent Se Data Bhejna (Passing Props)
Code mein App() component "Parent" hai. Parent hi decide karta hai ki Child (TodoItem) kya dikhayega.

Aap App component mein dekhiye:

JavaScript
<TodoItem text="Eat" />
<TodoItem text="Code" />
<TodoItem text="Sleep" completed={true} />
Humne ek hi TodoItem ko 3 baar use kiya hai, par har baar usko HTML attributes ki tarah alag-alag data (props) diya hai.

Pehle wale ko humne sirf text diya.

Teesre wale ko humne text bhi diya aur ek boolean value completed={true} bhi di.

3. Child Mein Data Receive Karna (Receiving Props)
Video ke [00:02:45] par Piyush sir sikhate hain ki jo component call ho raha hai, wo is data ko kaise pakdega.

JavaScript
function TodoItem(props) {
  // ...
}
React automatically parent se aane wale saare attributes ko ek Object mein pack kar deta hai, jise hum by convention props naam dete hain.
Teesre TodoItem ke liye, props object kuch aisa dikhega:
{ text: "Sleep", completed: true }

Ab is data ko use kaise karna hai? JSX (HTML jaisa syntax) ke andar JavaScript ka variable likhne ke liye humein curly braces {} ka use karna hota hai [00:04:23]:

JavaScript
<span className="todo-item-text">{props.text}</span>
4. Props Se Smart Decisions Lena (Conditional Rendering)
Props sirf text dikhane ke kaam nahi aate, inki madad se component khud decisions bhi le sakta hai [00:07:32].

Is line ko dhyan se dekhiye:

JavaScript
{!props.completed && <input type="checkbox" />}
Yahan React check kar raha hai:

Kya props.completed true NAHI hai? Agar true nahi hai (jaise "Eat" aur "Code" wale tasks mein), tabhi ye check box dikhayega.

Agar Parent ne explicitly bola hai ki completed={true} (jaise "Sleep" task mein), to wahan checkbox render hi nahi hoga.

Iska matlab aapne parent se child ke UI ka design change kar diya!

5. Default Values [00:09:57]
Agar parent koi prop bhejna bhool jaye, to kya hoga? Iske liye aapke code mein ye smart trick use hui hai:

JavaScript
<p>{props.customTag || "..."}</p>
Agar App ne customTag bheja hai (jaise 4th item mein "Done" bheja hai), to wo dikhega. Varna (|| logical OR operator ki wajah se) wo default value "..." dikha dega.

Summary: Props (Properties) Parent component se Child component tak data pass karne ka ek raasta hain. Ye components ko hardcoded hone se bachate hain aur unhe "Generic" banate hain taaki aap ek hi UI structure ko alag-alag data ke sath baar-baar use kar sakein.

Agar props ki value update ho, to kya component dobara render hota hai?

Yes


*/