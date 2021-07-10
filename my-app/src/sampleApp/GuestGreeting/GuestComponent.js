import { Fragment } from "react";

export default function GuestGreeting({ handleLogin }) {
    return (
      <Fragment>
          --------------------------------------------------------------------
          <h1>GuestGreeting</h1>
          <h4>Please sign up</h4>
          <button type="button" onClick={handleLogin}>Log in</button>
          {/* <button onClick={handleRoute}>Log in</button> */}
      </Fragment>
    )
}