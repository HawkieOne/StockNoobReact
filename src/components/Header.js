import React from 'react'
import {  faUser, faClock, faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";


export default function Header() {
    
    return (
        <div className="Header">
            <div className="left">
                <div className="search">
                <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                <input className="searcharea" type="text" placeholder="Search..."></input>
                </div>
            </div>
            <div className="middle">
            <p>Stocknoob</p>
            </div>
            <div className="right">
                <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                <FontAwesomeIcon className="icon" icon={faClock} />
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
        </div>
    )
}



