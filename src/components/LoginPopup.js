import React, { useState, useRef } from 'react';
import Popup from 'reactjs-popup';
import "./Login.css";
import history from './History';

export default function LoginPopup() {

    const ref = useRef();
    const closeModal = () => ref.current.close();
    const [open, setOpen] = useState(false);


    var [user, setUser] = useState({
        LoginID: "",
        Username: "",
        UserID: "",
        Mail: "",
        Money: "",
        Holdings: "",
        Goal: "",
        GoalItem: "",
        SavingMonth: "",
        Token: ","
    });

   var [Username, setUsername] = useState({
        Username: ""
    });
    var [Password, setPassword] = useState({
        Password: ""
    });

    const toOverview = () => {    
        const path = "/Overview";
            history.push({
            pathname: path,
            // state: { 
            //     article: prop.article
            // }
        })  
      };

    const login = (event) => {
        event.preventDefault(); 
        console.log(Username);
        console.log(Password);       
        const axios = require('axios');
        console.log("LOGIN");
        axios.post('https://stocknoob.azurewebsites.net//user/login',
                  {
                    "Username": Username.Username,
                    "Password": Password.Password  
                  }             
                )
                .then(response => {
                //   console.log(response.data)             
                  const data = response.data;
                  setUser({
                    LoginID : data.Login_ID,
                    Username : data.Username,
                    UserID : data.User_ID,
                    Mail : data.Mail,
                    Money : data.Money,
                    Holdings : data.Holdings,
                    Goal : data.Goal,
                    GoalItem : data.GoalItem,
                    SavingMonth : data.SavingMonth,
                    Token : data.Token.access_token})
                               
                  console.log(user);                    
                  toOverview();
                //   closeModal();                 
                }).catch(error =>
                  console.log(error)
                )
      };


      const handleLogin = (event) => {
        if ([event.target.name] == "Username") {
            console.log("USERNAME SET");
            setUsername({[event.target.name]: event.target.value})
        } else {
            console.log("PASSWORD SET");
            setPassword({[event.target.name]: event.target.value})
        }        
      };

    return (
        <Popup
        className="popup"
        trigger={<button className="login-button">Logga in</button>} 
        modal
        nested
        contentStyle={{ padding: '0px', border: 'none' }}
      >        
        {close => (         
            <div className="box">
                <button className="closeModal" onClick={close}>
                &times;
                </button>
                <div className="d-flex justify-content-end">
                    <h5 className="header">Log in</h5>
                    {/* <button className="close text-danger pr-1 pt-1" onClick={close}>&times;</button> */}
                </div>                
                <hr className="divider"/>
                <div className="content">
                    <form className="form" onSubmit={login}>                    
                        <label>Username</label>
                        <input  type="text" required onChange={handleLogin} name="Username"></input>        
                        <label>Password</label>                    
                        <input  type="password" required onChange={handleLogin} name="Password"></input>                     
                        <button className="login" type="submit">Log in</button>
                    </form>
                    <p className="register">Register</p>
                </div>          
            </div>
        )}
      </Popup>
    )
}
