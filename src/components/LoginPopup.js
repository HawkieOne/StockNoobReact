import React from 'react'
import "./LoginPopup.css";
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPopup() {
    return (
        <div className="LoginPopup">
            <div className="Container">
                
                    <div className="imgIcon">
                        <FontAwesomeIcon className="icon" icon={faUser} />
                    </div>
                    </div>
                    <form className="form">
                        
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
