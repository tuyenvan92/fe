import React, {memo} from 'react'

const MemoBook = (title) => {  
console.log('render Memobooks')
  return (
    <div>
        <div>Book title: {title}</div>
        {/* <div>Price: {books.price}</div> */}
        
    </div>
  )
}



export default memo(MemoBook,areEqual)

function areEqual(prevProps, nextProps) {
    return prevProps.title === nextProps.title && prevProps.price === nextProps.price
}
