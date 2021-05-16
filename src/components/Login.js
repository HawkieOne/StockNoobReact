import React from 'react'
import "./Login.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Login() {

    const login = (event) => {    
        console.log("TEST");
        var axios = require("axios").default;
    
        var options = {
          method: 'POST',
          url: 'http://localhost:3010/user/login',
          // headers: {authorization: 'Bearer YOUR_ACCESS_TOKEN'} NOT USED HERE
        };
        
        axios.request(options).then(function (response) {
            //IF ACCEPTED REDIRECT SAVE TOKEN BACKEND AND SAVE AS LOGGED IN IN REACT
            //IF NOT ACCEPTED SHOW WRONG PASSWORD
          console.log("SUCCESS: " + response.data);
        }).catch(function (error) {
            //IF NOT ACCEPTED SHOW WRONG PASSWORD    
          console.error("ERROR: " + error);
        });
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
                    <form onSubmit={login()}>
                    <br/>
                    <label><b>Username</b></label>
                    <br/>
                    <input className="text" type="text" required ></input>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <input  type="text" required></input>
                    <br/>
                    <button className="login" type="submit">Log in</button>
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
                    onClick={login}
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
                <img className="picture" src="https://www.smartdatacollective.com/wp-content/uploads/2018/12/crypto-trading-vs-stock-trading.jpg"></img>
                </div>
                <div className="container">
                <div className="höger">S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} /></div>
                </div>
            </div>
            
        </div>
    )
}
