import React from 'react'
import {Redirect,Route} from 'react-route-dom'

export default function GuestGuard({isAuth, component: Component, ...rest}) {
    return (
      <Route
        {...rest}
        render = {props => {
          return isAuth ? <Redirect to ="/dashboard"/> : <Component {props}>
        }}
      />
    )
}