import { Route, Link, Switch } from "react-router-dom";

import './App.css';

// views
import Dashboard from "views/Dashboard";
import Account from "views/Account/Account";

function App() {
  return (
    <div className="App">
      <header> 
        <Link to="/account">Account</Link> |
        <Link to="/dasboard">Dashboard</Link>
      </header>
      <main>
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
