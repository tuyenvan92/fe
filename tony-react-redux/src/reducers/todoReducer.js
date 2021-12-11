import * as todoActions from '../actions/todoActions';

// state
const initialState = {
  todos: [],
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
    default: {
      return state
    }
  }
}

// export to use 
export default reducer;