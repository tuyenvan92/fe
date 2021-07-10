//import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
// component
//import SampleScore from './SampleScore';
//import LearnProps from './LearnProps'

//import LearnStateHooks from './LearnStateHooks'
//import { StatefulComponent } from './component/StatefulComponent';

import Comment from './SampleApp-Comment';
import GuestGreeting from './SampleApp-GuestGreeting'
import UserGreeting from './SampleApp-UserGreeting';






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
  
  const comment = {
    date : new Date(),
    text : 'I hope you enjoy learning React',
    author : {
        name : 'Hello Kitty',
        avatarUrl : 'https://placekitten.com/g/64/64'
    }
  };

  const user = {
    text : 'Welcome to',
    name : 'Tony'
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
      <Comment date={comment.date} text={comment.text} author={comment.author}/>
      <GuestGreeting/>
      <UserGreeting text={user.text} name={user.name}/>
    </Fragment>
  )
}


export default App;



