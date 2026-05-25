import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    // jab component mount hota h toh component ke andar jo functions h
    //woh run hote h na ki woh functions jo ki component return kar rha h

    //lekin jab component unmount hota h toh woh wala function run karta h
    //jo ki component return karta h

    useEffect(() => {
        console.log("My Componenet is mounting...");

        return function(){
            console.log("Unmounting.....");
        };
    }, []);

    useEffect(() => {
        console.log("Count Got Updated", count);
        return function(){
            console.log("Returning count",count);
        }
    }, [count]);

    return (
        <div>
            <p>Count is {count}</p>
            <p>Count2 is {count2}</p>
            <button onClick={() => setCount(count + 1)}>Update</button>
            <button onClick={() => setCount2(count2 + 1)}>Update 2</button>
        </div>
    )
}

export default MyComponent;