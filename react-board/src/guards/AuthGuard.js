import React from 'react'
import {Redirect, Route} from 'react-route-dom'

export default function AuthGuard({isAuth, component: Component, }) {
    
    return (
        <Route 
          {...rest}
          render={prop => {
            return isAuth ? <Component {...props}/> : <Redirect to="/login"/>
          }}
        />
    )
}