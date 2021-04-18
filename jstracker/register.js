/* api
url: https://tony-json-server.herokuapp.com/api/users
github: https://github.com/nhattruongniit/tony-json-server
*/

const loading = document.getElementById('loading');
loading.style.display = 'none';

window.addEventListener('load', () => {
  // fetch list Users
  fetch('https://tony-json-server.herokuapp.com/api/users', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(res => {
    listUsers = res.data
  })

  // register html
  const registerForm = document.getElementById('register');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const msgEmail = document.getElementById('msgEmail');
    const msgPassword = document.getElementById('msgPassword');
    const msgError = document.getElementById('msgError');

    msgEmail.innerHTML = '';
    msgPassword.innerHTML = '';
    msgError.innerHTML = '';

    // validate value
    if (!validateEmail(email)) {
      msgEmail.innerHTML = 'Email is invalid';
      return;
    }
    if (password === '') {
      msgPassword.innerHTML = `Please input password`;
      return;
    }
    if (password !== passwordConfirm) {
      msgPassword.innerHTML = `Password Confirm doesn't match password`;
      return;
    }

    // check email exist
    const isExistEmail = listUsers.some(user => user.email === email);
    if (isExistEmail) {
      msgError.innerHTML = 'This email is taken';
      return;
    }

    // register success
    const newUser = {
      email,
      password,
      firstName: '',
      lastName: '',
      country: '',
      subject: ''
    }
    loading.style.display = 'block';
    fetch('https://tony-json-server.herokuapp.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(_ => {
      loading.style.display = 'none';
      // show popup confirm when call api success
      window.location.href = './login.html';
    })
  })
})
