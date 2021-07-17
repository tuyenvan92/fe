import { Fragment } from 'react';

// components
import SampleScores from './SampleScores';
import LearnProps from './LearnProps';
import LearnStateHooks from './LearnStateHooks';
import Button from './components/Button';
import StatefulComponent  from './components/StatefulComponent';
import HanldeEvent  from './components/HandleEvent';

// Sample App
import ComposeComponent from './ComposeComponent/ComposeComponent';

const dataUsers = {
  firstName: 'nguyen',
  lastName: 'tony'
}

function App() {
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

      <h3>Render JSX with React function component</h3>

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
     
    </div>
  )
  
}

export default App;
