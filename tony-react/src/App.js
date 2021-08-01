import { Fragment, useState } from 'react';

// components
import SampleScores from './SampleScores';
import LearnProps from './LearnProps';
import LearnStateHooks from './LearnStateHooks';
import Button from './components/Button';
import StatefulComponent  from './components/StatefulComponent';
import HanldeEvent  from './components/HandleEvent';
import ConditionRendering from './components/ConditionRender';
import LifitingStateUp from './components/LifitingStateUp';
import Forms from './components/Forms';
import UseEffectHook from './components/UseEffectHook';
import BooksStore from './components/BooksStore/BooksStore';
import UseReducerCounter from './components/UseReducerCounter/UseReducerCounter';

// Sample App
import ComposeComponent from './ComposeComponent/ComposeComponent';

// context
import { BooksProvider } from './context/BooksContext';

const dataUsers = {
  firstName: 'nguyen',
  lastName: 'tony'
}

function App() {
  const [isMountTodos, setIsMountTodos] = useState(true)
  // way 1 element:
  const element = <h1>hello word</h1>;
  // way 2 element:
  const element_2 = (
    <h1>hello word</h1>
  )

  const num = 2 + 2;
  const formatUsers = (users) => {
    return `${users.lastName} ${users.firstName}`
  }

  const renderGetting = user => {
    if(user) {
      return (
        <Fragment>
          <div>Hello {user}</div>
          <div>Hello 2 {user}</div>
          <div>Hello 3 {user}</div>
        </Fragment>
      )
    }

    return (
      <div>hello strange</div>
    )
  }
 
  return (
    <div>
      this is app {element} <br/> {element_2}
      {num}
      <br />
      {formatUsers(dataUsers)}

      
      {renderGetting('tuyen')}

      <img src="abc" className="image_default" alt="docs" />

      <br />

      <h3 
        style={{ 
          color: '#f00', 
          fontSize: '18px', 
          fontWeight: 'bold' 
        }}
      >
        Render JSX with React function component
      </h3>

      <SampleScores />
      <LearnProps 
        firstName="truong" 
        lastName="tony"
        className="learn-props"
        gender="male"
      />

      <LearnStateHooks />
      <StatefulComponent />

      <Button />
      <Button text="tuyen" />
      <Button text="minh" />

      <h1>Sample App</h1>
      <ComposeComponent />

      -----------------------------
      <h1>HandleEvent</h1>
      <HanldeEvent />

      ---------------------------
      <h1>Conditional Rendering</h1>
      <ConditionRendering />

      ------------------------
      <h1>Lifiting State Up</h1>
      <LifitingStateUp />

      --------------------------------------------------------------------
      <h2>Forms</h2>
      <Forms />

      --------------------------------------------------------------------
      <h2>useEffect hooks</h2>
      {isMountTodos && <UseEffectHook /> }

      <button type="button" onClick={() => setIsMountTodos(prevState => !prevState)}>mount todos</button>
      <br />
      --------------------------------------------------------------------
      <h2>useContext</h2>
      <h3>Books Store</h3>

      <BooksProvider>
        <BooksStore />
      </BooksProvider>

      --------------------------------------------------------------------
      <h2>useReducer</h2>
      <h3>Counter</h3>
      <UseReducerCounter />
    </div>
  )
  
}

export default App;
