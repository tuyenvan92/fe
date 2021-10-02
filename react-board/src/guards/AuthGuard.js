import React from 'react'
import {Redirect, Route} from 'react-route-dom'

<<<<<<< HEAD

export default function AuthGuard({isAuth, component: Component, ...rest}) {
=======
export default function AuthGuard({isAuth, component: Component, ...rest }) {
>>>>>>> 79b47a42f340b4819f2040ba402ab3f5d63075c0
    
    return (
        <Route 
          {...rest}
          render={props => {
            return isAuth ? <Component {...props}/> : <Redirect to="/login"/>
          }}
        />
    )
}