import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import './App.css';

// views
import Dashboard from "views/Dashboard";
import Register from "views/Register";
import Login from "views/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
