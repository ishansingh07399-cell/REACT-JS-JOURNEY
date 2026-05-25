import React from 'react';

// 'props' ke andar humein day, breakfast, lunch, aur dinner milega


const MenuCard = (props) => {
  return (
    <div style={{ border: '2px solid black', padding: '15px', marginTop: '20px', borderRadius: '8px', 
     backgroundColor: '#f9f9f9', display: 'inline-block' }}>
      <h2>{props.day} ka Menu</h2>
      <p><strong>Breakfast:</strong> {props.breakfast}</p>
      <p><strong>Lunch:</strong> {props.lunch}</p>
      <p><strong>Dinner:</strong> {props.dinner}</p>
    </div>
  );
};



export default MenuCard;