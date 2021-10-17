import { connect } from 'react-redux';
// import store from './stores';

// actions
import { setIncrement, setDescrement } from './actions/counterActions';

const mapStateToProps = (state, ownProps) => {
  const number = state.counter.number + ownProps.randomNumber; // 0 + 3
  return {
    number
  }
}

const mapDispatchToProps = {
  setIncrement,
  setDescrement
}

function App({ number, setIncrement, setDescrement }) {
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

  console.log('render app')


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

export default connect(mapStateToProps, mapDispatchToProps)(App);
