import React from 'react'
import "./LoginPopup.css";
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPopup() {

    const login = (event) => {    
        var axios = require("axios").default;
    
        var options = {
          method: 'POST',
          url: 'http://localhost:3010/user/login',
          // headers: {authorization: 'Bearer YOUR_ACCESS_TOKEN'} NOT USED HERE
        };
        
        axios.request(options).then(function (response) {
            //IF ACCEPTED REDIRECT SAVE TOKEN BACKEND AND SAVE AS LOGGED IN IN REACT
            //IF NOT ACCEPTED SHOW WRONG PASSWORD
          console.log(response.data);
        }).catch(function (error) {
            //IF NOT ACCEPTED SHOW WRONG PASSWORD
          console.error(error);
        });
      };


    return (
        <div className="LoginPopup">
            <div className="Container">
                
                    <div className="imgIcon">
                        <FontAwesomeIcon className="icon" icon={faUser} />
                    </div>
                    </div>
                    <form className="form" onSubmit={this.login}>
                        
                        <div className="inputs">
                            <label><b>Username</b></label>
                            <br/>
                            <input className="text" type="text" placeholder="User123"></input>
                            <br/>
                            <label><b>Password</b></label>
                            <br/>
                            <input  type="text" placeholder="******"></input>
                            <br/>
                            <br/>
                            <div className="btn">
                            <button type="submit">Login</button>
                            </div>
                        </div>
                    </form>
        </div>
    )
}
