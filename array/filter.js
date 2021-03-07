const todos = [
  {
    id: 1,
    task: 'javascript'
  },
  {
    id: 2,
    task: 'react'
  },
  {
    id: 3,
    task: 'node'
  }
]

// how remove a element in the array

// way 1
// todos.splice(1, 1);

// way 2
function removeTodoWithFilter(index) {
  return todos.filter((_, idx) => idx !== index);
}

console.log(removeTodoWithFilter(1))

// console.log(todos)