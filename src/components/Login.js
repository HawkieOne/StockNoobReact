import React from 'react'
import "./Login.css";
import {  faChartLine, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Login() {

    Login = (event) => {    
        console.log("hej")
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
                    <form>
                    <br/>
                    <label><b>Username</b></label>
                    <br/>
                    <input className="text" type="text" ></input>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <input  type="text" ></input>
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
                    className="button login"
                    onClick={Login}
                >
                    Log in
                </button>
                </div>
            </div>
            )}
        </Popup>
            </div>
            <div className="mitten">
                <div className="vänster"> 
                Bilder här
                </div>
                <div className="container">
                <div className="höger">S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} /></div>
                </div>
            </div>
            
        </div>
    )
}
