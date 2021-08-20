import React from 'react'

function BigLists({handleClick}) {
    const array = [1,2,3,4,5]
    const nums = (num) => (
        <div key={num}>
            {num} 
            <button type="button" style={{marginLeft:'10px'}} onClick={() => handleClick(num)}>clicked</button>
        </div>
    )
    return (
        <div>
            {array.map(nums)}
        </div>
    )
}

export default React.memo(BigLists)