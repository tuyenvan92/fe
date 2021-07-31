import React, { Fragment, useState } from 'react'
export default function FormSammpleApp() {
    const [forms, setForms] = useState({
        fullname:'',
        gender:'male',
        bio:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    const [isSubmit, setIsSubmit] = useState(false);

    function onChange(event) {
        const {name, value} = event.target;

        setForms(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit() {
        setIsSubmit(true);
        const isErrors = Object.keys(forms).filter(ele => forms[ele] === '')
        if(isErrors.length > 0 || forms.confirmpassword !== forms.password) {
            // something
            console.log('please check forms input again')
            return
        }
         // call api
         console.log('call api: ', forms)
    }

    return (
        <Fragment>
            Full Name:<br/> <input type="text" name="fullname" value={forms.fullname} onChange={onChange}/>
                      <br/> {isSubmit && forms.fullname === '' && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your full name</div>}
                      <br/> 

            Gender:   <br/> <select name="gender" value={forms.gender} onChange={onChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                      </select>
                      <br/>
                      <br/> 

            Bio:      <br/> <input type="text" name="bio" value={forms.bio} onChange={onChange}></input>
                      <br/> {isSubmit && forms.bio === '' && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your bio name</div>}
                      <br/> 
                      


            Email:    <br/> <input type="email" name="email" value={forms.email} onChange={onChange}></input>
                      <br/> {isSubmit && forms.email === '' && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your email</div>}
                      <br/> 

            Password: <br/> <input type="password" name="password" value={forms.password} onChange={onChange}></input>  
                      <br/> {isSubmit && forms.fullname === '' && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your password</div>}
                      <br/> 

        Confirm Password: <br/> <input type="password" name="confirmpassword" value={forms.confirmpassword} onChange={onChange}></input>       
                        <br/>   {isSubmit && forms.confirmpassword === '' && <div style={{color: "red", fontSize: 13, marginTop:5}}>Please enter your confirm password</div>}
                                {forms.confirmpassword !== forms.password && <div style={{color: "red", fontSize: 13, marginTop:5}}>Password and confirm password do not match</div>}
                       <br/> 
            
            
            <button type="button" onClick={handleSubmit}>Submit</button>
        </Fragment>
    )
}



