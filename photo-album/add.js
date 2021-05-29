//url: https://tony-json-server.herokuapp.com/api/photos

// fetch list Photos

window.addEventListener('load', () => {
    let listPhoto = [];
    // const getPhoto = window.localStorage.getItem('photos');
    // const photo = JSON.parse(getPhoto);

    fetch(`https://tony-json-server.herokuapp.com/api/photos`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
        listPhoto = res.data;
    })

    //add New Photo
    const addNewForm = document.getElementById('addNewForm');
    addNewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').value
        const newPhoto = {
            name,
            description,
            image
        }
        
        fetch("https://tony-json-server.herokuapp.com/api/photos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPhoto)
        }).then(_ => {
            addNewForm.reset();
            window.location.href='./index.html'
        })
    })
})



