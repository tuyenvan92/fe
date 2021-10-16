<<<<<<< HEAD
import React, {useState, useEffect,createContext} from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
//import AuthGuard from 'guards/AuthGuard';
import {Link,Route} from 'react-router-dom';
import Dashboard from 'views/Dashboard/Dashboard';
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';
//import AuthContext from '../../guards/authContext'

export const StoreContext = createContext(null)
export default function Login({props}) {
    const [isAuth, setIsAuth] = useState(false);
=======
import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory  } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const [users, setUsers] = useState([]);
>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb
    const [forms, setForms] = useState({
        email:'',
        password:''
    });
    const notifyError = () => toast.error(`User isn't existed`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifySuccess = () => toast.success(`Logic Successfully!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    // fetch users
    useEffect(() => {
        async function fetchUsers() {
            const res  = await fetch(`https://tony-json-server.herokuapp.com/api/users`);
            const data = await res.json();
            setUsers(data.data)
        }
        fetchUsers();
    }, [])

    
    function onChange(event) {
        const {name, value} = event.target;
        setForms(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }
    let store = {
        email: [forms.email]
    }
    console.log('STOREEE',store)
 

<<<<<<< HEAD
    async function handleAuth(email,password) {
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/users`, 
            {email,
            password,
            method: 'GET'
        })
        const data = await res.json();
        if(data === isAuth) {
            setIsAuth(true)
            return
        }
        setIsAuth(false)
    }

    useEffect(() => {
        handleAuth();
    })
    
   
    
=======
    const handleAuth = (e) => {
        e.preventDefault();
        const { email } = forms;
        const user = users.find(item => item.email === email);
        const userId = user?.id
        
        if(!user) {
            notifyError();
            return;
        } ;

        notifySuccess();
        // set auth
        window.sessionStorage.setItem('user', userId)
        // something
        history.push('/')
    }

>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb
    return(
        <div>
          <div className="register-page">
            <h2>MEMBER LOGIN</h2>
            <br/>
            <Form onSubmit={handleAuth}>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="email" value={forms.email} onChange={onChange}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password" value={forms.password} onChange={onChange}/>
                </FormGroup>
                <br/>
                <br/>
                <br/>
                <Button type="submit" color="success">Login</Button>
            </Form>
<<<<<<< HEAD
            <br/>
            <br/>

            <GuestGuard exact path="/authenticate/login" isAuth={isAuth} component={Login} />
            <AuthGuard exact path="/authenticate/user" isAuth={isAuth} component={Dashboard} />
          </div>

          <StoreContext.Provider value={store}>{props}</StoreContext.Provider>

          <Link to ="/dashboard">Dashboard</Link>
          <Route exact path ="/login/dashboard" component={Dashboard}></Route>
=======
            <ToastContainer />
>>>>>>> 277726a39af83f4f1f17441c4cd075c5b4de0ebb
        </div>
        
    )
}