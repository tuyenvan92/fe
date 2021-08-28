<<<<<<< HEAD
//import logo from './logo.svg';
import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
// component
// import SampleScore from './SampleScore';
// import LearnProps from './LearnProps'

// import LearnStateHooks from './LearnStateHooks'
// import { StatefulComponent } from './component/StatefulComponent';

// import UpdateStateObject from './component/UpdateStateObject'
// import HandleEvent from './component/HandleEvent'
// //import ConditionRender from './component/ConditionalRender';

// // Sample App
// import ComposeComponent from './sampleApp/ComposeComponent/ComposeComponent';
// import GenerateBox from './sampleApp/GenerateBox/GenerateBox';

// import LiftingStateUp from './component/LiftingStateUp';
// import Forms from './component/Forms'
//import UseEffectHook from './component/UseEffectHook'

// import FormSammpleApp from './sampleApp/Form/FormSampleApp';
// //import Forms from './component/Forms';

// import BoxesColor from './sampleApp/BoxesColor/BoxesColor';

// import BooksStore from './component/BookStore/BooksStore';
// import { BooksProvider } from './context/BooksContext';

// import UseReducerCounter from './component/UseReducerCounter/UseReducerCounter'
// import UseRefHook from './component/useRef'

//import MemoBook from'./component/Memo/MemoBook'

import MoviesStore from './sampleApp/MovieFilm/MoviesStore'
import {MoviesProvider} from './context/MoviesContext'

import BigLists from './sampleApp/BigLists/BigLists';
import useResizeWindow from './hooks/useResizeWindow';


// function App() {
//   const element = <h1>Start react</h1>
//   return (
//     <div className="App">
//       {2+2}
//       {element}
//     </div>
//   );
// }

// export default App;



//-----
// export function App() {
//   const users = {
//     firstName: 'nguyen',
//     lastName: 'tony'
//   }

//   const element = <h1>hello world</h1>;

//   const formatUsers = () => {
//     return `${users.lastName} ${users.firstName}`
//   }

//   //console.log(formatUsers())

//   return (
//     <div>
//       this is app {element}
//       2+2
//       <br/>
//       {formatUsers()}
//     </div>
//   )
// }
//----



// const dataUsers = {
//   firstName: 'van',
//   lastName: 'tuyen'
// }

// function ComponentA(){
//     return (
//       <div>this is Component A</div>
//     )
// }
=======
import { Fragment, useState, useCallback } from 'react';

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
import UseRefHook from './components/UseRefHook';
import MemoHook from './components/MemoHook';

// Sample App
import ComposeComponent from './ComposeComponent/ComposeComponent';

// context
import { BooksProvider } from './context/BooksContext';

// hooks
import useResizeWindow from './hooks/useResizeWindow';

const dataUsers = {
  firstName: 'nguyen',
  lastName: 'tony'
}
>>>>>>> 40c5ff226e42765e30a16be95610841e6d64875d

function App() {
  const [countMemo, setCountMemo] = useState(0);
  const { isSmallScreen } = useResizeWindow(true);
  
  // firstRender -> memory A
  // next render -> memory B

  const books = { 
    title: 'harry potter',
    price: 10
  };
  //  const books =  "test memo"

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

  const handleTitleBook = useCallback(() => {
    console.log('handleTitleBook')
  }, [])
  // first render: memory A
  // next render: memory A
 
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

      --------------------------------------------------------------------
<<<<<<< HEAD
      <BigLists handleClick={handleClick}/>
      --------------------------------------------------------------------
      <h2>custom hook resize window</h2>

      <useResizeWindow/>
=======
      <h2>useRef hooks</h2>
      <UseRefHook />

      --------------------------------------------------------------------
      <h2>memo hooks</h2>
      countMemo: {countMemo}
      <button type="button" onClick={() => setCountMemo(prevState => prevState + 1)}>increment counter</button>
      <MemoHook title="truong" handleTitleBook={handleTitleBook}  />
>>>>>>> 40c5ff226e42765e30a16be95610841e6d64875d

      --------------------------------------------------------------------
      <h2>custom hook resize window</h2>
        
      {isSmallScreen ? <h2>small screen</h2> : <h2> large screen</h2>}

    </div>
  )
  
}

export default App;
