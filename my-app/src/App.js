//import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
// component
import SampleScore from './SampleScore';
//import LearnProps from './LearnProps'

//import LearnStateHooks from './LearnStateHooks'
//import { StatefulComponent } from './component/StatefulComponent';

<<<<<<< HEAD
import Comment from './SampleApp-Comment';
import GuestGreeting from './SampleApp-GuestGreeting'
import UserGreeting from './SampleApp-UserGreeting';
import UpdateStateObject from './component/UpdateStateObject'
import HandleEvent from './component/HandleEvent'
import ConditionRender from './component/ConditionalRender';
import GenerateBox from './SampleApp-GenerateBox';


=======
import UpdateStateObject from './component/UpdateStateObject';
>>>>>>> b3e41a844595964b78b21d90b5053ac28e0fb757

// Sample App
import ComposeComponent from './sampleApp/ComposeComponent/ComposeComponent';


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
  
<<<<<<< HEAD
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

  const mystyle = {
    color: '#f00', 
    fontSize: '18px', 
    fontWeight: 'bold'
  }

=======
>>>>>>> b3e41a844595964b78b21d90b5053ac28e0fb757
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
<<<<<<< HEAD
      <Comment date={comment.date} text={comment.text} author={comment.author}/>
      <GuestGreeting/>
      <UserGreeting text={user.text} name={user.name}/>
      <UpdateStateObject/>
      <HandleEvent/>
      <ConditionRender/>

      <h3 style={mystyle}>Style JSX</h3>

      <SampleScore/>

      <GenerateBox/>

=======

      <ComposeComponent />
      <br />
      --------------------------------------------------------------------
      <UpdateStateObject />
>>>>>>> b3e41a844595964b78b21d90b5053ac28e0fb757
    </Fragment>
  )
}


export default App;



