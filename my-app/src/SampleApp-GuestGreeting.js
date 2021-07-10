import { Fragment } from "react";
// import { useHistory } from "react-router-dom";

export default function GuestGreeting() {
    // const history = useHistory();
    // const handleRoute = () =>{ 
    //     history.push("/UserGreeting");
    //   }
    return (
        <Fragment>
            --------------------------------------------------------------------
            <h1>GuestGreeting</h1>
            <h4>Please sign up</h4>
            <button>Log in</button>
            {/* <button onClick={handleRoute}>Log in</button> */}
        </Fragment>
    )
}