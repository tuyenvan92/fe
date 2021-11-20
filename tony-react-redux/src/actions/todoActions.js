// actions types
export const FETCH_TODO_SUCCESS = 'TODO/FETCH_TODO_SUCCESS';

export const fetchTodos = (todos) => ({
  type: FETCH_TODO_SUCCESS,
  payload: todos
})