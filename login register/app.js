// let myForm = document.forms["myForm"];
// let username=myForm["username"].value;
// let email=myForm["email"].value;
// let password=myForm["password"].value;
// let passwordConfirm=myForm["passwordConfirm"].value

// function validateForm() {
    // if (username==="") {
    //     alert("Please enter your Username");
    //     myForm["username"].focus();
    //     return false;
    // }
    // if (email===""){
    //     alert("Please enter your Email")
    //     myForm["email"].focus();
    //     return false;
    // }
    // if (password==="") {
    //     alert("Please enter your Password");
    //     myForm["password"].focus;
    //     return false;
    // }
    // if (passwordConfirm!=password) {
    //     alert("Password and confirm password do not match");
    //     myForm["passwordConfirm"].focus;
    //     return false;
    // }
    // if (username!="" && emai!="" && password!="" && passwordConfirm===password) {
    //     alert("Registration successfull");
    // }
    // return true;
// }



// function myFunction() {
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     localStorage.setItem('email', email);
//   }

$(document).ready(function() {
    // $("#btnSubmit").click(function() {
    //     console.log('click button')
    // })
    $("#signup-form").submit(function(event) {
        event.preventDefault();
        let listUsers = JSON.parse(localStorage.getItem('users')) || [];

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const passwordConfirm =  document.getElementById('passwordConfirm').value;
        
        if (username === "") {
            alert("Please enter your Username");
            myForm["username"].focus();
            return;
        }
        if (email===""){
            alert("Please enter your Email")
            myForm["email"].focus();
            return;
        }
        if (password==="") {
            alert("Please enter your Password");
            myForm["password"].focus;
            return;
        }
        if (passwordConfirm!==password) {
            alert("Password and confirm password do not match");
            myForm["passwordConfirm"].focus;
            return;
        }
        
        for (const index in listUsers) {
            if (listUsers[index].email === email) {
                alert("your email have used");
                return;
            }
        }
        const newUsers = {
            username,
            password,
            email
        }
        listUsers.push(newUsers)
        alert("Registration successfull");
        localStorage.setItem("users", JSON.stringify(listUsers));
    })

    $("#login-form").submit(function() {
        var enteredName = $("#username2").val();
        var enteredPass = $("#password2").val();

        var storedName = localStorage.getItem("username");
        var storedPass = localStorage.getItem("password");
        
        if (enteredName === storedName && enteredPass === storedPass) {
            alert('You are logged in!');
        } else {
            alert('Username and Password do not match!');
        }
    })
});