import {Link, Switch, Route } from "react-router-dom";

import './App.css';
import Register from 'views/Register/Register';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard/Dashboard';
// views


function App() {
  return (
    <div className="App">
      <Link to ="/register">Register</Link>{" "}|{" "}
      <Link to ="/login">Login</Link>{" "}|{" "}
      <Link to ="/dashboard">Dashboard</Link>
      <Switch>
        <Route exact path ="/register" component={Register}></Route> 
        <Route exact path ="/login" component={Login}></Route> 
        <Route exact path ="/dashboard" component={Dashboard}></Route>
      </Switch>  
    </div>
  );
}

export default App;
