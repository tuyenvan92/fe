import React from 'react'
import {MoviesContext} from '../../context/MoviesContext'

export default function MovieList() {
    const {movies, handleDeleteMovie} = React.useContext(MoviesContext)

    return (
        <div>
            <h3>Movie List</h3>
            {movies.length > 0 ? (
                <div>
                    {movies.map((movie, idx) => (
                        <div key={movie.id}>
                            <li style={{marginBottom:'10px'}}>
                                {movie.title}
                                <button type="button" style={{marginLeft:'20px'}} onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
                            </li>
                        </div>
                    ))}
                </div>
            ): <div>no data about movie</div>}
        </div>
    )
}