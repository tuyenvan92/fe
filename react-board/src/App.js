import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
        <Switch>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
