import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // State
  const [counter, setCounter] = useState(0)

  // Actions
  function handleIncrement() {
    setCounter(prevState => prevState + 1)
  }
  function handleDecrement() {
    setCounter(prevState => prevState - 1)
  }

  // Views
  return (
    <div className="App">
      <h2>React Redux</h2>
      <div>
        Counter: {counter} <br/>
        <button type="button" onClick={handleDecrement}>decrement</button>
        <button type="button" onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
}

export default App;
