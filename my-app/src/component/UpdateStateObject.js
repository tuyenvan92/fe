import React, { useState } from 'react'

function UpdateStateObject() {
  const [messageObj, setMessageObj] = useState({
    message: '',
    id: 1,
    name: 'truong',
  })

  const [authors, setAuthors] = useState({
    id: '',
    name: 'truong',
    books: {
      title: 'React',
      price: 20,
      catgory: {
        lead: 'arts',
        sale: 'tuyen'
      }
    },
    help: {
      order: 1,
      datetime: 12345
    }
  })

  console.log('render updateState Object')
  console.log('authors: ', authors)

  return (
    <div>
      <h3>State Hook: Updating Object</h3>
      <p>Type: {messageObj.message} </p>
      <p>Name: {messageObj.name} </p>
      <input 
        type="text"
        value={messageObj.message}
        onChange={event => {
          // create a new object 
          const newObj = {
            message: event.target.value
          }

          // messageObj.message = event.target.value // don't work because same obj]
          setMessageObj(newObj)
        }}
      />

      <h5>callback function in useState</h5>
      <input 
        type="text"
        value={messageObj.message}
        onChange={event => {
          const val = event.target.value
          setMessageObj(prevState => {
            return {
              ...prevState,
              message: val
            }
          })
        }}
      />

      <h5>Update nested object</h5>
      <p>Name Author: {authors.name}</p>
      <p>Book Title: {authors.books.title}</p>
      <p>Book Price: {authors.books.price}</p>
      <input 
        type="text"
        placeholder="Change book title"
        value={authors.books.title}
        onChange={event => {
          const val = event.target.value
          // wrong 1
          // setAuthors(prevState => {
          //   return {
          //     ...prevState,
          //     title: val
          //   }
          // })

          // wrong 2
          // setAuthors(prevState => {
          //   return {
          //     ...prevState.books,
          //     title: val
          //   }
          // })

          // wrong 3
          // setAuthors(prevState => {
          //   return {
          //     ...prevState,
          //     books: {
          //      title: val
          //     }
          //   }
          // })

          // true
          setAuthors(prevState => {
            return {
              ...prevState,
              books: {
                ...prevState.books,
               title: val
              }
            }
          })

        }}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default UpdateStateObject



