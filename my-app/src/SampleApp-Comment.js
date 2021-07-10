import { Fragment } from "react"

function formatDate(date) {
    return date.toLocaleDateString();
}
export default function Comment(props) {
    return (
        <Fragment>
            <h1> Sample App: Composing-Component </h1>
            <div className="Comment">
                <div className="UserInfo">
                    <img className="Avatar" src="{props.author.avatarUrl}" alt={props.author.name} />
                    <div className="UserInfo-name">{props.author.name}</div>
                </div>
                <div className="Comment-text">{props.text}</div>
                <div className="Comment-date">{formatDate(props.date)}</div>
            </div>

        </Fragment>
    )
}





