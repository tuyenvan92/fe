import React from 'react'
import {Redirect,Route} from 'react-router-dom'

export default function GuestGuard({ component: Component, ...rest }) {
  console.log('GuestGuard')
  const userId = window.sessionStorage.getItem('user')
  return (
    <Route
      {...rest}
      render = {props => {
        return userId ? <Redirect to ="/dashboard"/> : <Component {...props} />
      }}
    />
  )
}