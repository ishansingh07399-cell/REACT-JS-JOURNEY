
import './App.css';
import Counter from './components/Count';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch=useDispatch();

  return (
    <div className="App">
     <button onCLick={ e =>dispatch({type:'INCREMENT'})}>Increment</button>
     <Counter />
     <button onCLick={ e =>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default App;
