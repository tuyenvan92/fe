import { Fragment } from "react";

export default function UserGreeting({ text, name, handleLogout }) {
  return (
    <Fragment>
        <div></div>
        --------------------------------------------------------------------
        <h1>Welcome Back</h1>
        <h4>{text} {name}</h4>
        <button type="button" onClick={handleLogout}>Log out</button>
    </Fragment>
  )
}