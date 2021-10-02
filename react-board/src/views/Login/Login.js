import React, {useState} from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
//import AuthGuard from 'guards/AuthGuard';
//import { Link, Route } from 'react-router-dom';

export default function Login() {
    const [isAuth, setIsAuth] = useState(false);
    //const [isUsername, setIsUsername] = useState(false)
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

    function handleAuth(email,password) {
        fetch(`https://tony-json-server.herokuapp.com/api/users`, {email,password})
        
        if(!isAuth) {
            setIsAuth(true)
            return
        }
        setIsAuth(false)
    }
    
    return(
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
        </div>
    )
}