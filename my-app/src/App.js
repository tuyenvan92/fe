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

function App() {
  // way 1
  // const element = <h1>hello world</h1>;
  // //way 2
  // const element_2 = (
  //   <h1>hello world</h1>
  // )

  // const formatUsers = (users) => {
  //   return `${users.lastName} ${users.firstName}`
  // }

  // const renderGetting = user => {
  // //   if (user) {
  // //     return (
  // //       <div>Hello, {user}</div>
  // //     )
  // //   }
  //   // return (
  //   //   <div>Hello, Stranger</div>
  //   // )


  //   if (user) {
  //     return (
  //       <Fragment>
  //         <div>Hello {user}</div>
  //         <div>Hello 2 {user}</div>
  //         <div>Hello 3 {user}</div>
  //       </Fragment>
  //     )
  //   }
  //   return (
  //     <div>Hello, Stranger</div>
  //   )
  // }

  // const renderSwitch = user => {
  //   switch (user) {
  //     case 'tuyen':
  //       return (
  //         <div>Hi, Tuyen</div>
  //       )
  //     case 'abc':
  //       return (
  //         <div>Hi, abc</div>
  //       )
  //     default:
  //       return <Fragment/>
  //   }
  // }
  

  // const mystyle = {
  //   color: '#f00', 
  //   fontSize: '18px', 
  //   fontWeight: 'bold'
  // }

  //const [isMountTodos, setIsMountTodos] = useState(true)
  //const [, setCountMemo] = useState(0)
  //const[title] = useState('memo-component')
  

  // const books = {
  //   title:'tuyen',
  //   price: 20
  // }


  // function handleTitleBook() {
  //   console.log('handleTitleBook')
  // }

  // const handleTitleBook = useCallback(() => {
  //   console.log('handleTitleBook')
  // },[])
  const [value, setValue] = useState(0);
  const handleClick = React.useCallback((item) => {
    setValue(item);
  }, []);
  console.log("You clicked ", value);


  return (
    <Fragment>
      

      {/* {<div>
          this is app {element} <br/> {element_2}
          2+2
          <br/>
          {formatUsers(dataUsers)}
          {renderGetting('tuyen')}
          {renderSwitch('abc')}
      </div> */}

      {/* <SampleScore/>
      <LearnStateHooks/>
      <LearnProps firstName='tuyen' lastName='van'/>
      <StatefulComponent/>
      <UpdateStateObject/>
      <HandleEvent/>
      <ConditionRender/>

      <h3 style={mystyle}>Style JSX</h3>

      <SampleScore/>

      --------------------------------------------------------------------
      <h2>Sampel App - GenerateBox</h2>
      <GenerateBox/>


      <ComposeComponent />
      <br />
      --------------------------------------------------------------------
      <UpdateStateObject />
      <Forms/>
      <LiftingStateUp/> */}

      {/* {isMountTodos && <UseEffectHook/>}
      <button type="button" onClick={() =>setIsMountTodos(prevState => ! prevState)}>mount todos</button> */}

      {/* <Forms/>*/}
      --------------------------------------------------------------------
      {/* <h1>Sample App - Form</h1> */}
      {/* <FormSammpleApp/>
      <br/>
      <br/>
      --------------------------------------------------------------------
      <h1>Sample App - Boxes Color</h1>
      <BoxesColor/>
      --------------------------------------------------------------------
 
      
      <h1> UseReducerCounter </h1>
      <UseReducerCounter/>
      <UseRefHook/> */}
      --------------------------------------------------------------------
      {/* <h1>useContext - Book Store</h1>
      <BooksProvider>
        <BooksStore/>
      </BooksProvider> */}

      --------------------------------------------------------------------
     {/* <h2>Memo</h2>
      <button type="button" onClick={() => setCountMemo(prevState => prevState + 1)}>Increment</button>
      <MemoBook title="truong" handleTitleBook={handleTitleBook}/> */}
      --------------------------------------------------------------------
      <h2>Sample App: Movie Film</h2>
      <MoviesProvider>
        <MoviesStore/>
      </MoviesProvider>
      --------------------------------------------------------------------
      <BigLists handleClick={handleClick}/>
      --------------------------------------------------------------------
      <h2>custom hook resize window</h2>

      <useResizeWindow/>


    </Fragment>
  )
}


export default App;



