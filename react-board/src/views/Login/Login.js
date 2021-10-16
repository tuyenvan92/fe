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
    const [forms, setForms] = useState({
        email:'',
        password:''
    })
    function onChange(event) {
        const {name, value} = event.target;
        setForms(prevState => {
            return {
                ...setForms,
                [name] : value
            }
        })
    }
    let store = {
        email: [forms.email]
    }
    console.log('STOREEE',store)
 

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
    
   
    
    return(
        <div>
          <div className="register-page">
            <h2>MEMBER LOGIN</h2>
            <br/>
            <Form onSubmit={handleAuth(forms.email,forms.password)}>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="email" value={forms.email} onChange={onChange}/>
                    {isAuth && forms.email === '' && <div className="text-danger">Please enter email...</div>}
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password" value={forms.password} onChange={onChange}/>
                    {isAuth && forms.password === '' && <div className="text-danger">Please enter password...</div>}
                </FormGroup>
                <br/>
                {isAuth ? 'You are logined' : 'Please login...'}
                <br/>
                <br/>
                <Button type="submit" color="success">Login</Button>
            </Form>
            <br/>
            <br/>

            <GuestGuard exact path="/authenticate/login" isAuth={isAuth} component={Login} />
            <AuthGuard exact path="/authenticate/user" isAuth={isAuth} component={Dashboard} />
          </div>

          <StoreContext.Provider value={store}>{props}</StoreContext.Provider>

          <Link to ="/dashboard">Dashboard</Link>
          <Route exact path ="/login/dashboard" component={Dashboard}></Route>
        </div>
        
    )
}