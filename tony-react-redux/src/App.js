import { connect } from 'react-redux';
// import store from './stores';

// components
import Todos from './components/Todos';

// actions
import { setIncrement, setDescrement } from './actions/counterActions';
import { fetchTodos } from './actions/todoActions';

const mapStateToProps = (state, ownProps) => {
  const number = state.counter.number + ownProps.randomNumber; // 0 + 3
  return {
    number
  }
}

const mapDispatchToProps = {
  setIncrement,
  setDescrement,
  fetchTodos
}

function App({ number, setIncrement, setDescrement, fetchTodos }) {
  // State
  // store.subscribe(() => {
  //   setNumber(store.getState().counter.number)
  // })

  // Actions
  function handleIncrement() {
    // store.dispatch(setIncrement(1))
    setIncrement(1);
  }

  function handleDecrement() {
    // store.dispatch(setDescrement(1))
    setDescrement(1)
  }

<<<<<<< HEAD
  console.log('render app')
 
=======
  async function handleLoadTodo() {
    const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
    const data = await res.json();
    fetchTodos(data.data);
  }
>>>>>>> 741270a66ccdcc0c5b13afdeec443c03d146b5e8

  // Views
  return (
    <div>
      <h2>React Redux</h2>
      <div>
        Counter: {number} <br />
        <button type="button" onClick={handleDecrement}>decrement</button>
        <button type="button" onClick={handleIncrement}>increment</button> <br />
        <h2>Todo List <button type="button" onClick={handleLoadTodo}>Load Todo</button></h2>

        <Todos />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
