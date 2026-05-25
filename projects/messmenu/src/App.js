import React, { useState } from 'react';
import './App.css';
import MenuCard from './MenuCard'; // 1. Yahan MenuCard ko import kiya

function App() {
  const weekMenu = [
    { day: 'Monday', breakfast: 'Poha', lunch: 'Rajma Chawal', dinner: 'Kadhai Paneer' },
    { day: 'Tuesday', breakfast: 'Aloo Paratha', lunch: 'Kadhi Pakora', dinner: 'Dal Makhani' },
    { day: 'Wednesday', breakfast: 'Idli Sambhar', lunch: 'Chole Bhature', dinner: 'Matar Paneer' },
  ];
  
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Weekly Mess Menu</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveDay('Monday')}>Monday</button>
        <button onClick={() => setActiveDay('Tuesday')}>Tuesday</button>
        <button onClick={() => setActiveDay('Wednesday')}>Wednesday</button>
        {/* Baaki buttons... */}
      </div>

      <hr/>

      {
        weekMenu
          .filter((item) => item.day === activeDay)
          .map((item, index) => (
            <MenuCard key={index}day={item.day} breakfast={item.breakfast} lunch={item.lunch} dinner={item.dinner}/>
          ))
      }
    </div>
  );


}

export default App;


/*

Tumne .map() ke andar ek component <MenuCard /> call kiya aur usko properties (day, breakfast, etc.) pass kar di. Yeh properties sidha MenuCard.jsx ke props mein catch ho jayengi. Is approach ko hi React ki bhasha mein "Parent se Child tak data bhejna (Props down)" kehte hain!

*/