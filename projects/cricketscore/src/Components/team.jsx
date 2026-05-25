
import React, { useState } from 'react';

// 2. Component banao aur props se 'teamName' receive karo
const TeamCard = (props) => {
  
  // runs ki current value 0 hai, aur setRuns usko update karne ka function hai
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  // 4. JSX Return Karo (Jo screen par dikhega)
  return (
    <div style={{ border: "2px solid grey", padding: "20px", margin: "10px", borderRadius: "8px",backgroundColor:'grey'}}>
      
      {/* Props ko use karke Team ka naam dikhao */}
      <h2>{props.teamName}</h2>

      {/* State ko use karke Live Score dikhao */}
      <h3>Score: {runs} / {wickets}</h3>

      {/* Buttons aur unka Logic */}
      {/* Jab button click ho, setRuns function current runs mein 1 add kar de */}
      <button onClick={() => setRuns(runs + 1)}>+1 Run</button>

      {/* --- TUMHARA TASK --- */}
      {/* Niche diye gaye dono buttons mein onClick function lagao */}
      <button  onClick={() => setRuns(runs + 4)}>+4 Runs</button>
      <button  onClick={() => setRuns(runs + 6)}>+6 Runs</button>

      <br /><br />
      
      {/* Wicket ka logic */}
      <button onClick={() => setWickets(wickets + 1)}>Wicket!</button>

    </div>
  );
};

// 5. Component ko export karo taaki App.jsx isko use kar sake
export default TeamCard;