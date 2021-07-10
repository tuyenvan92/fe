//way 1: normal
// export default function LearnProps(props) {
//     return (
//         <div>
//             <h2>Learn React Props</h2>
//             <div>My name: {props.lastName} {props.firstName} </div>
//         </div>
//     )
// }

//way 2: destructuring props
// export default function LearnProps({firstName, lastName, gender, className}) {
//     return (
//         <div>
//             <h2>Learn React Props</h2>
//             <div>My name: {lastName} {firsrName}</div>
//         </div>
//     )
// }

//way 3: destructuring + rest props
// export default function LearnProps({firstName, lastName, ...props}) {
//     console.log('rest props', props)
//     return (
//         <div> 
//             <h2>LEarn React Props</h2>
//             <div>My name: {lastName} {firstName}</div>
//         </div>
//     )
// }