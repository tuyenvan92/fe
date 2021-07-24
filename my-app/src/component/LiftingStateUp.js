import React from 'react'

function TodoItem({todo,toggleId}) {
    return (
        <li>
            {todo.text} <button type="button" onClick={() => toggleId(todo.id)}>Submit</button>
        </li>
    )
}


export default function LiftingStateUp() {  
    const [todos] = React.useState([ 
        {
            id: 1,
            text: 'learn react'
        },
        {
            id: 2,
            text: 'learn javascript'
        }
    ])
    
    function toggleId() {
        console.log('toggleId: ')
    }

    return (
        <div>
            this is lifting state up
            <ul>
                {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} toggleId={toggleId} />
                )
                })}
            </ul>
        </div>
    )
}
