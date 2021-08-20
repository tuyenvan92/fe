import React, { useReducer } from 'react';

export const MoviesContext = React.createContext();

// types
export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

// reducers
export const initialState = {
  movies: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MOVIE: {
      return {
        ...state, // copy all property object
        movies: [...state.movies, action.payload]
      }
    }
    case DELETE_MOVIE: {
      const newMovies = state.movies.filter(movie => movie.id !== action.payload)
      return {
        ...state, // copy all property object
        movies: newMovies
      }
    }
    default:
      return state
  }
}

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies } = state;

  function addMovie(title) {
    const newMovie = {
      id: Date.now(),
      title
    }
    dispatch({ 
      type: ADD_MOVIE,
      payload: newMovie
    })
  }

  function handleDeleteMovie(movieId) {
    dispatch({ 
      type: DELETE_MOVIE,
      payload: movieId
    })
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addMovie,
        handleDeleteMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}