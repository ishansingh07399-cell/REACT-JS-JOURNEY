import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';

import './App.css';

function App() {

  const weather=useWeather();


  return (
    <div className="App">
    <h1>Weather Forecast</h1>
    <Input/> 
    <Button onClick={weather.fetchData} value="Search"/>
    <Card />
    <Button value="Refresh"/>
    </div>
  );
}

export default App;
