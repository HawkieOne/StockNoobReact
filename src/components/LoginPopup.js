import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./Login.css";

export default function LoginPopup() {

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

    const login = (event) => {
        event.preventDefault(); 
        // console.log(Username);
        // console.log(Password);       
        const axios = require('axios');
        console.log("LOGIN");
        axios.post('http://localhost:3010/user/login',
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
                }).catch(error =>
                  console.log(error)
                )
      };


      const handeLogin = (event) => {
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
        trigger={<button className="button"> Open Modal </button>}
        modal
        nested
      >
        {close => (
                <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header"> Log in </div>
                <hr className="divider"/>
                <div className="content">
                    <form className="form" onSubmit={login}>                    
                        <label>Username</label>
                        <input  type="text" required onChange={handeLogin} name="Username"></input>        
                        <label>Password</label>                    
                        <input  type="password" required onChange={handeLogin} name="Password"></input>                     
                        <button className="login" type="submit" >Log in</button>
                    </form>
                    <p className="register">Register</p>
                </div>
                {/* <div className="actions">
                    <button
                            className="button cancel"
                            onClick={() => {
                            console.log('modal closed');
                            close();
                            }}
                        >
                            Cancel
                    </button>
                    <button className="button register">
                        Register
                    </button>
                </div> */}
                </div>
                )}
      </Popup>
    )
}
