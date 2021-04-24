/* api
url: https://tony-json-server.herokuapp.com/api/users
github: https://github.com/nhattruongniit/tony-json-server
*/

// validate
function validateEmail(mail) {
  // regex expression
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase()); // return true || false
}
const loading = document.getElementById('loading');
loading.style.display = 'none';

window.addEventListener('load', () => {
  const getUser = window.localStorage.getItem('users');
  const user = JSON.parse(getUser);

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const subject = document.getElementById('subject').value;

    const newUser = {
      firstName,
      lastName,
      country,
      subject
    }

    loading.style.display = 'block';
    fetch(`https://tony-json-server.herokuapp.com/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(_ => {
      loading.style.display = 'none';
      alert('update user successfully!');
      // show popup confirm when call api success
      // window.location.href = './login.html';
    })
  })
})
function logOut() {
  window.localStorage.clear();
}
