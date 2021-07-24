//import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
// component
import SampleScore from './SampleScore';
//import LearnProps from './LearnProps'

//import LearnStateHooks from './LearnStateHooks'
//import { StatefulComponent } from './component/StatefulComponent';

import UpdateStateObject from './component/UpdateStateObject'
import HandleEvent from './component/HandleEvent'
import ConditionRender from './component/ConditionalRender';

// Sample App
import ComposeComponent from './sampleApp/ComposeComponent/ComposeComponent';
import GenerateBox from './sampleApp/GenerateBox/GenerateBox';

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
  

  const mystyle = {
    color: '#f00', 
    fontSize: '18px', 
    fontWeight: 'bold'
  }

  return (
    <Fragment>
      

      {/* <div>
        this is app {element} <br/> {element_2}
        2+2
        <br/>
        {formatUsers(dataUsers)}
        {renderGetting('tuyen')}
        {renderSwitch('abc')}
      </div>
      <ComponentA/>
      <SampleScore/>
      <LearnStateHooks/>
      <LearnProps firstName='tuyen' lastName='van'/>
      <StatefulComponent/> */}
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
    </Fragment>
  )
}


export default App;



