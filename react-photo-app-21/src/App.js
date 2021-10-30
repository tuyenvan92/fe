import { Switch, Route } from "react-router-dom";

// views
import Dashboard from "views/Dashboard";
import PhotoAdd from "views/PhotoAdd";
import PhotoDetail from "views/PhotoDetail";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="logo" href={Dashboard}>Album</div>
            <div className="menu j-between">
              <span className="menu-title">Blog</span>
              <span className="menu-title">Add</span>
              <span className="menu-title">About</span>
            </div>
            <div className="icon-group j-between">
              <img class="icons" src={require('../src/img/youtube-brands.svg').default} alt=""/>
              <img class="icons" src={require('../src/img/facebook-brands.svg').default} alt=""/>
              <img class="icons" src={require('../src/img/twitter-brands.svg').default} alt=""/>
            </div> 
        </div> 
      </div>
      <Switch>
        <Route path="/photoadd" component={PhotoAdd} />
        <Route path="/photo/:id" component={PhotoDetail} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
