// action types
export const FETCH_TODO_SUCCESS = 'TODO/FETCH_TODO_SUCCESS'
export const FETCH_SINGLETODO = 'TODO/FETCH_SINGLETODO'
export const ADD_TODO = 'TODO/ADD_TODO'

export const fetchTodos = (todos) => ({
    type: FETCH_TODO_SUCCESS,
    payload: todos
})

export function fetchSingleTodo(todoId) {
    return {
        type: FETCH_SINGLETODO,
        payload: todoId
    }
}
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
