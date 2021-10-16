import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import StoreProvider from 'views/Login/Login';

// views
import Register from "views/Register";
import Login from "views/Login";
import Dashboard from "views/Dashboard"

// guards
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';


ReactDOM.render(
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={App} />
        <StoreProvider>
          <Route path="/login/dashboard" component={Dashboard} />
        </StoreProvider>
=======
        <GuestGuard path="/login" component={Login} />
        <GuestGuard path="/register" component={Register} />
        <AuthGuard path="/" component={App} />
>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb
      </Switch>
    </Router>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
