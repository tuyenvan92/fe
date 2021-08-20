import React, { useState, useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';

export default function MovieForm() {
    const {addMovie} = useContext(MoviesContext);
    const [title, setTitle] = useState('')

    return (
        <div>
            Name:
            <input type="text" onChange={e => setTitle(e.target.value)}/>
            <button type="button" onClick={() => addMovie(title)}>Add</button>
        </div>
    )
}