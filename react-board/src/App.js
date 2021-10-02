import { Route, Link, Switch } from "react-router-dom";

import './App.css';

// views
import Dashboard from "views/Dashboard";
import Account from "views/Account/Account";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Homepage</h1>
      <Router>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
=======
      <header> 
        <Link to="/account">Account</Link> |
        <Link to="/dasboard">Dashboard</Link>
      </header>
      <main>
>>>>>>> 79b47a42f340b4819f2040ba402ab3f5d63075c0
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
