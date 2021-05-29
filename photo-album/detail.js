//photo detail

// let listPhoto;
// const getPhoto = window.localStorage.getItem('photos');
// const photo = JSON.parse(getPhoto);

// fetch(`https://tony-json-server.herokuapp.com/api/photos`, {
//     method: 'GET',
//   })
//   .then(res => res.json())
//   .then(res => {
//     listPhoto = res.data;
//     fetchTodos(res.data);
//   })


//   // the View button
//   const viewButton = document.getElementById('view');
//   viewButton.addEventListener('button',(e) => {
//       e.preventDefault();
//       const name = document.getElementById('name').value;
//       const description = document.getElementById('description').value;
//       const account = listPhoto.find(photo => photo.name === name && user.description === description);
//       const photo = {
//         id: account.id,
//       }
//       window.localStorage.setItem('photos', JSON.stringify(photo));
//       window.location.href = './detail.html';
//   })


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('detail.html')
console.log(id);


let listPhoto;
const getPhoto = window.localStorage.getItem('photos');
const photo = JSON.parse(getPhoto);

fetch(`https://tony-json-server.herokuapp.com/api/photos`, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(res => {
    listPhoto = res.data;
  })

function photoDetail(todoId) {
    for (const index in listTodo) {
        if (list[index].id === todoId) {
            fetch(`https://tony-json-server.herokuapp.com/api/photos`, {
                method: 'GET',
            })
            .then(res => res.json())
            .then(res => {
                listPhoto = res.data;
                fetchPhoto(todoId)
            })
        }
    }
}

//fetch list
function fetchPhoto(todoId) {
    const photoDetail = document.getElementById('photoDetail')
    photoDetail.innerHTML = '';
                
    for (const index in listPhoto) {
        photoDetail.innerHTML +=`
        <div class="card col-md-6 offset-md-3">
            <img class="card-img-top" alt="Card image cap" height="250"/>${list[index].image} 
            <div class="card-body">
                <h5 class="card-title">${list[index].name}</h5>
                <p class="card-text">${list[index].description}</p>
                <p class="card-text"><small class="text-muted">Last updated 9 mins ago</small></p>
            </div>
        </div>
        `;
    }
}




