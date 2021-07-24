// import React from 'react'

// function TodoItem({todo,toggleId}) {
//     return (
//         <li>
//             {todo.text} <button type="button" onClick={() => toggleId(todo.id)}>Submit</button>
//         </li>
//     )
// }


// export default function LiftingStateUp() {  
//     const [todos] = React.useState([ 
//         {
//             id: 1,
//             text: 'learn react'
//         },
//         {
//             id: 2,
//             text: 'learn javascript'
//         }
//     ])
    
//     functipn toggleId() {
//         console.lof('toggleId: ')
//     }

//     return (
//         <div>
//             this is lifting state up
//             <ul>
//                 {todos.map(todo => {
//                     console.log('todo: ', todo)
//                     return (
//                         (
//                             <TodoItem key={todo.id} toto={todo} toggleId={toggleId}/>
//                         )
                      
//                     )}
//             </ul>
//         </div>
//     )}
// }
