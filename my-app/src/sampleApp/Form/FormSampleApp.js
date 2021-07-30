import React, { Fragment, useState } from 'react'
export default function FormSammpleApp() {
    const [forms, setForms] = useState({
        fullname:'',
        gender:'',
        bio:'',
        email:'',
        password:'',
        confirmpassword:'',
        policy:''
    });

    const [isErrorFullname, setIsErrorFullname] = useState(false);
    const [isErrorBio, setIsErrorBio] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isErrorConfirmPassword, setIsErrorConfirmPassword] = useState(false);
    const [isErrorPolicy, setIsErrorPolicy] = useState(false);
    const [isSamePassword, setIsSamePassword] = useState(false)

    function onChange(event) {
        const {name, value} = event.target;

        switch (name) {
            case 'fullname':
                setForms({...forms, fullname: value})
                break;
            case 'gender':
                setForms({...forms, gender: value})
                break;
            case 'bio':
                setForms({...forms, bio: value})
                break;
            case 'email':
                setForms({...forms, email: value})
                    break;
            case 'password':
                setForms({...forms, password: value})
                break;
            case 'confirmpassword':
                setForms({...forms, confirmpassword: value})
                break;
            case 'policy':
                setForms({...forms, policy: value})
                break;
            default:
                break;
        }
    }

    function handleSubmit() {
        if (forms.fullname === '') {
            setIsErrorFullname(true);
        } 
        if (forms.bio === '') {
            setIsErrorBio(true);
        }
        if (forms.email === '') {
            setIsErrorEmail(true);
        }
        if (forms.password === '') {
            setIsErrorPassword(true);
        }
        if (forms.confirmpassword === '') {
            setIsErrorConfirmPassword(true);
        }
        if (forms.confirmpassword !== forms.password) {
            setIsSamePassword(true)
        }
        if (forms.policy === '') {
            setIsErrorPolicy(true);
        }
    }

    
    return (
        <Fragment>
            Full Name:<br/> <input type="text" name="fullname" value={forms.fullname} onChange={onChange}/>
                      <br/> {isErrorFullname && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your full name</div>}
                      <br/> 

            Gender:   <br/> <select name="gender" value={forms.gender} onChange={onChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                      </select>
                      <br/>
                      <br/> 

            Bio:      <br/> <input type="text" name="bio" value={forms.bio} onChange={onChange}></input>
                      <br/> {isErrorBio && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your bio</div>}
                      <br/> 


            Email:    <br/> <input type="email" name="email" value={forms.email} onChange={onChange}></input>
                      <br/> {isErrorEmail && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your email</div>}
                      <br/> 

            Password: <br/> <input type="password" name="password" value={forms.password} onChange={onChange}></input>  
                      <br/> {isErrorPassword && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter password</div>}
                      <br/> 

        Confirm Password: <br/> <input type="password" name="confirmpassword" value={forms.confirmpassword} onChange={onChange}></input>       
                        <br/>   {isErrorConfirmPassword && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter confirm password</div>}
                                {isSamePassword && <div style={{color: "red", fontSize: 13, marginTop:5}}>Password and confirm password do not match</div>}
                       <br/> 
            
             <input type="checkbox" id="policy" name="policy" checked={forms.policy} onChange={onChange}/> I Agree to Privacy Policy 
             <br/>   {isErrorPolicy && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please select the checkbox</div>}
             <br/> 

            
            
            <button type="button" onClick={handleSubmit}>Submit</button>
        </Fragment>
    )
}



