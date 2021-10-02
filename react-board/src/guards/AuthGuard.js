import React from 'react'
import {Redirect, Route} from 'react-route-dom'


export default function AuthGuard({isAuth, component: Component, ...rest}) {
    
    return (
        <Route 
          {...rest}
          render={props => {
            return isAuth ? <Component {...props}/> : <Redirect to="/login"/>
          }}
        />
    )
}