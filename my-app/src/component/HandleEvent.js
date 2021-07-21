import React from 'react';

export default function HandleEvent() {
    const handleClick = (id) => {
        console.log('handle click',id)
    }

    // // CURRY FUNCTION - one function return another function
    // // 1. arrow function
    // const handleShoot_2 = (item) => () => {
    //     console.log('handleShoot_2 ', item)
    // }

    // // 2. normal function
    // function handleShoot_2(item) {
    //     return function() {
    //         console.log('handleShoot_2: ', item)
    //     }
    // }

    return (
        <div>
             <button type="button" onClick={() => handleClick('item 1')}>click on item 1</button>
             <button type="button" onClick={() => handleClick('item 2')}>click on item 2</button>
             <button type="button" onClick={() => handleClick('item 3')}>click on item 3</button>
        </div>
    )
}