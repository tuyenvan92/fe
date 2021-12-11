import { connect } from 'react-redux'
import React,{useEffect,useState} from 'react'


const mapStateToProps = state => {
    const todoId = state.todo.todoId
    return {
        todoId
    }
}


export function TodoDetail({todoId}) {
    const [todo,setTodo] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`)
            const data = await res.json()
            setTodo(data.data)
        }
        fetchData();
    },[todoId])
    console.log(todo)

    return (
        <div>
            This is todo detail        
            <h1>Todo Detail</h1>
            <p>id: {todo?.id}</p>
            <p>title: {todo?.title}</p>
            <p>author: {todo?.author}</p>
            <p>description: {todo?.description}</p>
        </div>
    )
}

export default connect(mapStateToProps,null)(TodoDetail)