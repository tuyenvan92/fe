import React from 'react'
import {Redirect, BrowserRouter as Router, Route } from 'react-router-dom'

export default function AuthGuard({isAuth, component: Component, ...rest }) {
    
    return (
      <Router>
        <Route
          {...rest}
          render={props => {
            return isAuth ? <Component {...props}/> : <Redirect to="/login"/>
          }}
        />
      </Router>
        
    )
}