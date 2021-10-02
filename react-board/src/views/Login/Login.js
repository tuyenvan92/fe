import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const [users, setUsers] = useState([]);
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


    const handleAuth = (e) => {
        e.preventDefault();
        const { email } = forms;
        const user = users.some(item => item.email === email);
        
        if(!user) {
            notifyError();
            return;
        } ;

        notifySuccess();
        // set auth
        // something
    }
    
    return(
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
            <ToastContainer />
        </div>
    )
}