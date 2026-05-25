
import './App.css';
import TeamCard from './Components/team';

function App() {
  return (
    // minHeight: '100vh' ka matlab hai ki ye div screen ki 100% height cover karega
    <div style={{ backgroundColor: 'grey', minHeight: '100vh', padding: '20px' }}>
      
      <TeamCard teamName="CSK" />
       <TeamCard teamName="SRH" />
      
    </div>
  );
}

export default App;
