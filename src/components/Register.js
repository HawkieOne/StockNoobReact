import {React, useState} from 'react'
import history from './History'

export default function Register() {


    const handleLogin = (event) => {
        if ([event.target.name] === "Username") {
            console.log("USERNAME SET");
            setUsername({[event.target.name]: event.target.value})
        } else if([event.target.name] === "Mail") {
            console.log("MAIL SET");
            setMail({[event.target.name]: event.target.value})
        } else{
            console.log("PASSWORD SET");
            setPassword({[event.target.name]: event.target.value})
        }       
      };

      const register = (event) => {
        event.preventDefault(); 
        console.log(Username);
        console.log(Mail);
        console.log(Password);       
        const axios = require('axios');
        console.log("REGISTER");
        axios.post('https://stocknoob.azurewebsites.net/user/register',
                  {
                    "Username": Username.Username,
                    "Mail": Mail.Mail,
                    "Password": Password.Password  
                  }             
                )
                
                              
                .catch(error =>
                  console.log(error)
                )
                toLogin();  
      };

   var [Username, setUsername] = useState({
        Username: ""
    });
    var [Password, setPassword] = useState({
        Password: ""
    });
    var [Mail, setMail] = useState({
        Mail: ""
    });

      const toLogin = () => {    
        const path = "/login";
            history.push({
            pathname: path,
        })  
      };

    return (
        <div>     
            <div className="box">
                <div className="d-flex justify-content-end">
                    <h5 className="header">Register account</h5>
                </div>                
                <hr className="divider"/>
                <div className="content">
                    <form className="form" onSubmit={register}>                    
                        <label>Username</label>
                        <input  type="text" required onChange={handleLogin} name="Username"></input>        
                        <label>Mail</label>                    
                        <input  type="text" required onChange={handleLogin} name="Mail"></input> 
                        <label>Password</label>                    
                        <input  type="password" required onChange={handleLogin} name="Password"></input>                     
                        <button className="login" type="submit">Register</button>
                    </form>
                    <p className="register" onClick={toLogin}>Already have an account? Log in here.</p>
                </div>          
            </div>
        </div>
    )
}
