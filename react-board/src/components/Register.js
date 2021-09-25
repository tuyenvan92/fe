import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function Register() {
    const [forms, setForms] = useState({
        firstName:'',
        lastName:'',
        username:'',
        password:'',
        passwordConfirm:''
    })
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);
    function onChange(event) {
        const {name,value} = event.target;
        setForms({
            ...forms,
            [name] : value
        })
    }
    function handleSubmit() {
        if (forms.firstName === '') {
            setIsErrorFirstName(true);
        }
    }

    return(
        <div className="login-page">
            <h2>REGISTER</h2>
            <br/>
            <Form>
            <FormGroup>
                    <Input type="text" name="firstName" id="firstName" value={forms.firstName} onChange={onChange} placeholder="First Name"/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={onChange} value={forms.lastName}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="text" name="username" id="username" placeholder="Username" onChange={onChange} value={forms.username}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={forms.password}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" onChange={onChange} value={forms.passwordConfirm}/>
                </FormGroup>

                <br/>
                <Button type="button" color="success" onClick={handleSubmit}>Register</Button>
            </Form>
        </div>
    )
}