import { Fragment } from "react";
// import { useHistory } from "react-router-dom";

export default function UserGreeting(props) {
    // const history = useHistory();
    // const handleRoute = () =>{ 
    //     history.push("/GuestGreeting");
    //   }
    return (
        <Fragment>
            <div></div>
            --------------------------------------------------------------------
            <h1>UserGreeting</h1>
            <h4>{props.text} {props.name}</h4>
            <button>Log out</button>
            {/* <button onClick={handleRoute}>Log out</button> */}
        </Fragment>
    )
}