import React from 'react';
import {Redirect, Route} from 'react-router-dom';


export default function AuthGuard({ component: Component, ...rest }) {
  console.log('AuthGuard')
    // get user from localhsotre
    const userId = window.sessionStorage.getItem('user')
  
    return (
        <Route 
          {...rest}
          render={props => {
            return userId ? <Component {...props}/> : <Redirect to="/login"/>
          }}
        />
    )
}