import React, { useState } from 'react';
import "./Login.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import LoginPopup from "./LoginPopup"




export default function Login() {
    return (  
        <div className="Login">
            <div className="top">
            <LoginPopup/>
            </div>
            <div className="middleContainer">
                <div className="left"> 
                <img className="picture" src="https://www.smartdatacollective.com/wp-content/uploads/2018/12/crypto-trading-vs-stock-trading.jpg"
                alt=""
                ></img>
                </div>
                <div className="container">
                <div className="right">S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} /></div>
                </div>
            </div>
            
        </div>
    )
}
