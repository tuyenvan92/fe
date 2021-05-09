/* api
url: https://tony-json-server.herokuapp.com/api/users
github: https://github.com/nhattruongniit/tony-json-server
*/

// let description = document.getElementById('description');
// if (description === '') {
//   alert('Please enter your issue');
//   return;
// }



let listTodo;

const loading = document.getElementById('loading');
loading.style.display = 'none';

const getUser = window.localStorage.getItem('users');
const user = JSON.parse(getUser);

loading.style.display = 'block';
fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(res => {
    loading.style.display = 'none';
    listTodo = res.data;
    fetchTodos(res.data);
  })



// add new todo
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const severity = document.getElementById('severity').value;

  // validate if not enter the issue
  const msgDescription = document.getElementById('msgDescription');
  msgDescription.innerHTML = '';
  if (description === '') {
    msgDescription.innerHTML = 'Please enter your issue';
    return;
  }

  // add todo
  loading.style.display = 'block';
  const newTodo = {
    id: Date.now().toString(),
    description,
    severity,
    status: 'open'
  }
  fetch("https://tony-json-server.herokuapp.com/api/todos", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  })
  .then(_ => {
    //$('.modal').show();
    loading.style.display = 'none';
    todoForm.reset();
    listTodo.push(newTodo);
    fetchTodos(listTodo);
    changeColor();
  })
})
//change color of the status
function changeColor() {
  const option = document.getElementsByTagName('option').value;
  option[0].backgroundColor='black'
  option[1].backgroundColor='green'
  option[2].backgroundColor='red'
}


// update todo open->closed
function setStatus(todoId) {
  const status = document.getElementsByClassName("status");
  for (const index in listTodo) { 
    if (listTodo[index].id === todoId) {
      if(listTodo[index].status === 'open') {
        fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "close"
            })
        })
        listTodo[index].status = "close";
        status[index].textContent = "close";
      } else {
        fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
          method: "PATCH",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              status: "open"
          })
        })
        listTodo[index].status = "open";
        status[index].textContent = "open";
      }
      fetchTodos(listTodo);
    }
  }
}

//filter status: open/closed
const filterOptions = document.getElementById("filter");
filterOptions.addEventListener("change", filterTodos);
function filterTodos(e) {
  const option = e.target.value;
  // clone list todos
  switch (option) {
    case "open": {
      const newTodos = listTodo.filter(todo => todo.status === option)
      fetchTodos(newTodos);
      break;
    }
    case "close": {
      const newTodos = listTodo.filter(todo => todo.status === option)
      fetchTodos(newTodos);
      break;
    }
    default: {
      fetchTodos(listTodo);
      break;
    }
  }
} 

// delete todo
function deleteTodo(todoId) {
  loading.style.display = 'block';
  fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
    method: 'DELETE'
  })
  .then(_ => {
    loading.style.display = 'none';
    for (const index in listTodo) {
      if(listTodo[index].id === todoId) {
        listTodo.splice(index, 1);
        fetchTodos(listTodo);
      }
    }
  })
}

// delete all 
document.getElementById('deleteAll').addEventListener('click', event => {
  document.getElementById('boxTodos').innerHTML = '';
  localStorage.removeItem('boxTodos');
})


// fetch list todo
function fetchTodos(list) {
  const boxTodos = document.getElementById('boxTodos');
  boxTodos.innerHTML = '';
  
  for (const index in list) {
    boxTodos.innerHTML += `<div class="box"><p class="id-title">Issue ID: <span class="id">bc71f535-a73c-5edf-b62d-351d3125fd1f</span></p>
      <p class="btn btn-info filterDiv status">${list[index].status}</p>
      <div class="issue-name">${list[index].description}</div>
      <div class="severity">
        <img src="https://img.icons8.com/pastel-glyph/64/000000/clock--v1.png"/>
        <span class="issue-level">${list[index].severity}</span>
      </div>
      <button id="close-button" class="btn btn-warning" onclick="setStatus(\'${list[index].id}\')">Close</button>
      <button class="btn btn-danger btn-delete" onclick="deleteTodo(\'${list[index].id}\')">Delete</button></div>`;
  }
}
