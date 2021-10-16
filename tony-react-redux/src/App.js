import { useState } from 'react';
import store from './stores';

// actions
import { setIncrement, setDescrement } from './actions/counterActions';

function App() {
  // State
  const [number , setNumber] = useState(store.getState().counter.number);

  // Actions
  function handleIncrement() {
    store.dispatch(setIncrement(1))
  }

  function handleDecrement() {
    store.dispatch(setDescrement(1))
  }

  store.subscribe(() => {
    setNumber(store.getState().counter.number)
  })

  // Views
  return (
    <div>
      <h2>React Redux</h2>
      <div>
        Counter: {number} <br />
        <button type="button" onClick={handleDecrement}>decrement</button>
        <button type="button" onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
}

export default App;
