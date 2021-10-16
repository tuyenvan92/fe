import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import StoreProvider from 'views/Login/Login';

// views
import Register from "views/Register";
import Login from "views/Login";
import Dashboard from "views/Dashboard"


ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={App} />
        <StoreProvider>
          <Route path="/login/dashboard" component={Dashboard} />
        </StoreProvider>
      </Switch>
    </Router>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
