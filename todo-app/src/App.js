import React, { useEffect, useState } from 'react'
import "./App.css"

import MyComponent from "./MyComp";

import Timer from "./Timer";

function App() {
  const[isVisible, setVisible]=useState(true);



  useEffect(() => {
    console.log("App Comp. is mounting...");
  }, []);

  return(
  <div className='App'>
  { 
   
  isVisible ? <MyComponent /> :<></>}
  <button onClick ={ () => setVisible(!isVisible)}>Toggle</button>
  </div>
  );
}

export default App;