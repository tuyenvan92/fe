import React, { useState } from 'react';

export const BooksContext = React.createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  function addBook(title) {
    setBooks(prevState => {
      const newBook = {
        title,
        price: Date.now() 
      }
      return[...prevState, newBook]
    })
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        addBook
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}