
import * as todoActions from '../actions/todoActions'

// state
const initialState = {
    todos: [],
    todoId: null
}

// reducers 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActions.FETCH_TODO_SUCCESS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case todoActions.FETCH_SINGLETODO: {
            return {
                ...state,
                todoId: action.payload
            }
        }
        case todoActions.ADD_TODO: {
            const newTodos = [...state.todos, action.payload]
            return {
                ...state,
                todos: newTodos
            }
        }
        default: {
            return state
        }
    }
}

// export to use 
export default reducer;