import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

// viewsx
import Account from "views/Account";
import Dashboard from "views/Dashboard";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
