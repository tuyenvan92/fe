import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function Login() {
    return(
        <div className="register-page">
            <h2>MEMBER LOGIN</h2>
            <br/>
            <Form>
                <FormGroup>
                    <Input type="text" name="username" id="username" placeholder="Username"/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password"/>
                </FormGroup>
                <br/>
                <Button color="success">Login</Button>
            </Form>
        </div>
    )
}