import React from 'react'
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";


export default function Header() {
    
    return (
        <div className="Header">
            <div className="left">
            <p>Stocknoob</p>
            </div>
            <div className="middle">
                
            </div>
            <div className="right">
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
        </div>
    )
}



