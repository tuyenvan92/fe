<<<<<<< HEAD
import React from 'react'
import {Redirect, BrowserRouter as Router, Route } from 'react-router-dom'

export default function AuthGuard({isAuth, component: Component, ...rest }) {
    
=======
import React from 'react';
import {Redirect, Route} from 'react-router-dom';


export default function AuthGuard({ component: Component, ...rest }) {
  console.log('AuthGuard')
    // get user from localhsotre
    const userId = window.sessionStorage.getItem('user')
  
>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb
    return (
      <Router>
        <Route
          {...rest}
          render={props => {
            return userId ? <Component {...props}/> : <Redirect to="/login"/>
          }}
        />
      </Router>
        
    )
}