import React, {useState} from "react";

const CounterComponent= () => {
    const[count, setCount]= useState(13); // In the place of function's name setCount we can 
    //also name the function update,etc.

    
    return(
        <div>
            <p>Count Component - {count} </p>
            
            <h6>Number is{ count % 2 === 0 ? 'Even' : 'Odd'}</h6>

            <button onClick={() => setCount(count +1)}>Increment</button>
            <button onClick={() => setCount(count -1)}>Decrement</button>
        </div>
    );

};

export default CounterComponent;