<<<<<<< HEAD
import {Link, Switch, Route } from "react-router-dom";

import './App.css';
import Register from 'views/Register/Register';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard/Dashboard';
// views

=======
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

// viewsx
import Account from "views/Account";
import Dashboard from "views/Dashboard";
>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Link to ="/register">Register</Link>{" "}|{" "}
      <Link to ="/login">Login</Link>{" "}|{" "}
      <Link to ="/dashboard">Dashboard</Link>
      <Switch>
        <Route exact path ="/register" component={Register}></Route> 
        <Route exact path ="/login" component={Login}></Route> 
        <Route exact path ="/dashboard" component={Dashboard}></Route>
      </Switch>  
=======
      <h1>Homepage</h1>
      <main>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Dashboard</Link></li>
        </ul>
        <Switch>
          <Route path="/account" component={Account} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
      <footer>
        this is footer
      </footer>
>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb
    </div>
  );
}

export default App;
