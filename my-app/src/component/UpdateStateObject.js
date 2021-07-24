import React, { useState } from 'react'

export default function UpdateStateObject() {
        // {/* <h3>State Hook: Updating Object</h3>
        // <p>Type: {messageObj.message}</p>
        // <input
        // type = "text"
        // value = {messageObj.message}
        // onChange = {event => {
        //     const newObj = {
        //         message: event.target.value
        //     }
        //     //messageObj.message = event.target.value // don't work because same obj
        //     setMessageObj(newObj)
        // }}
        // />





        // <h5>callback function in useState</h5>
        // <input
        //     type="text"
        //     value={messageObj.message}
        //     onChange={event => {
        //         const val = event.target.value
        //         setMessageObj(prevState => {
        //             return {
        //                 ...prevState,
        //                 message: val
        //             }
        //         })
        //     }}
        // /> */}


        
        // {/* const [authors, setAuthors] = useState({
        //     id: '',
        //     name: 'truong',
        //     books: {
        //         title: 'React',
        //         price: 20
        //         }
        // })

        // console.log('render updateState Object')
        // console.log('authors: ', authors)

        // <h5>Update nested object</h5>
        // <p>Name Author: {authors.name}</p>
        // <p>Book Title: {authors.books.title}</p>
        // <p>Book Price: {authors.books.price}</p>
        // <input
        //     type="text"
        //     placeholder="Change book title"
        //     value={authors.books.title}
        //     onChange={event => {
        //         const val = event.target.value
        //         //wrong 1
        //         // setAuthors(prevState => {
        //         //     return (
        //         //         ...preState,
        //         //         title: val
        //         //     )
        //         // })

        //         //wrong 2
        //         // setAuthors(prevState => {
        //         //     return (
        //         //         ...prevState.books,
        //         //         title: val
        //         //     )
        //         // })

        //         //wrong 3
        //         // setAuthors(prevState => {
        //         //     return (
        //         //         ...prevState,
        //         //         books: {
        //         //             title: val
        //         //         }
        //         //     )
        //         // })

        //         //true
        //         setAuthors(prevState => {
        //             return (
        //                 ...prevState,
        //                 books: {
        //                     ...prevState.books,
        //                     title: val
        //                 }
        //             )
        //         })
        //     }}
        // /> */}

        const [authors, setAuthors] = useState({
            id: '',
            name: 'truong',
            books: {
                title: 'React',
                price: 20,
                category: {
                    lead: 'arts',
                    sale: 'tuyen'
                }
            },
            help: {
                order: 1,
                datetime: 12345
            }
        })

        console.log('authors: ', authors)

return (
    <div>
    <h5>Update nested object</h5>
        <p>Name Author: {authors.name}</p>
        <p>Book Title: {authors.books.title}</p>
        <p>Book Price: {authors.books.price}</p>
        <p>Book category:</p>
        <p>- Lead: {authors.books.category.lead}</p>
        <p>- Sale: {authors.books.category.sale}</p>

        <input
            type="text"
            placeholder="Change category sale"
            value={authors.books.category.sale}
            onChange={event => {
                const val = event.target.value
                setAuthors(authors => {
                    return ({
                        ...authors,
                        books: {
                            ...authors.books,
                            category: {
                                ...authors.books.category,
                                sale: val
                            }
                        }
                    })
                })
            }}
        />
    </div>   
)
}

