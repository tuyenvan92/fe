import React, {useState} from 'react'

function Login() {
    return (
        <div>this is log in component</div>
    )
}

function Logout() {
    return (
        <div>this is logout component</div>
    )
}

export default function ConditionRender() {
    const [todos, setTodos] = useState([1,2,3,4,5])
    const [isAuth,setIsAuth] = useState(false);
    function toggleFunction() {
        setIsAuth(!isAuth)
    }
    
    let componentAuth = null;
    if (isAuth) {
        componentAuth = <Logout/>
    }
    else {
        componentAuth = <Login/>
    }

    return (
        <div>
            {todos.length > 0 && todos.map(todo => {
                return (
                    <div key={todo}>
                        item {todo}
                    </div>
                )
            } )}

            <h3> Inline If-Else </h3>
            {isAuth ? <Logout/> : <Login/>}
            <button type='button' onClick={toggleFunction}>Toggle</button>
            {componentAuth}
        </div>
    )
}

