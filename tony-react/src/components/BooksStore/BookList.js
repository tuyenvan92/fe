import React, { Fragment, useContext } from 'react';

import { BooksContext } from '../../context/BooksContext';

export default function BookList() {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <h5>Books Lists</h5>
      {books.length > 0 ? (
        <>
          {books.map((book, idx) => (
            <Fragment key={`${book.title}-${idx}`}>
              <div>
                Title: {book.title} <br />
                Price: {book.price}
              </div>
              <br />
            </Fragment>
          ))}
        </>
      ): <div>no data books</div>}
    </div>
  )
}