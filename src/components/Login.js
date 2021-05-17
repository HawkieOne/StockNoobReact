import React, { useState } from 'react';
import "./Login.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export default function Login() {
    const [user, setUser] = useState({
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

   var [LoginDetails, setLoginDetails] = useState({
        Username: "",
        Password:""
    });

    


    const login = (event) => {
        event.preventDefault(); 
        console.log(LoginDetails.Username); 
        console.log(LoginDetails.Password);   
        const axios = require('axios');
        console.log("LOGIN");
        axios.post('http://localhost:3010/user/login',
                  {
                    "Username": "hali0151",
                    "Password": "1234"  
                  }             
                )
                .then(response => {
                  console.log("RESPONSE: " + response.data)
                  console.log("DATA: " + response.data)
                  const data = response.data;
                  setUser={
                    LoginID : data.Login_ID,
                    Username : data.Username,
                    UserID : data.User_ID,
                    Mail : data.Mail,
                    Money : data.Money,
                    Holdings : data.Holdings,
                    Goal : data.Goal,
                    GoalItem : data.GoalItem,
                    SavingMonth : data.SavingMonth,
                    Token : data.Token.access_token}
                               
                  console.log(user);  
                }).catch(error =>
                  console.log(error)
                )
      };

      

    return (
        <div className="Login">
            <div className="toppen">
            <Popup  className="popup" trigger={<button className="button"> Log in </button>} modal nested>
            {close => (
            <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> Log in </div>
            <div className="content">
                <div className="form">
                    <form onSubmit={login}>
                    <br/>
                    <label><b>Username</b></label>
                    <br/>
                    <input className="text" type="text" required onChange={ (event) => setLoginDetails({Username: event.target.value})} ></input>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <input  type="text" required onChange={ (event) => setLoginDetails({Password: event.target.value})}></input>
                    <br/>
                    <button className="login" type="submit" >Log in</button>
                    </form>
                </div>
            </div>
            <div className="actions">
            <button
                    className="button cancel"
                    onClick={() => {
                    console.log('modal closed ');
                    close();
                    }}
                >
                    Cancel
                </button>
                <button
                    className="button register"
                    
                >
                    Register
                </button>
                </div>
            </div>
            )}
        </Popup>
            </div>
            <div className="mitten">
                <div className="vänster"> 
                <img className="picture" src="https://www.smartdatacollective.com/wp-content/uploads/2018/12/crypto-trading-vs-stock-trading.jpg"
                alt=""
                ></img>
                </div>
                <div className="container">
                <div className="höger">S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} /></div>
                </div>
            </div>
            
        </div>
    )
}
