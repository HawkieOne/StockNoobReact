import React from 'react'
import {  faUser, faClock, faQuestionCircle, faSearch, faBell, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import LoginPopup from "./LoginPopup"



export default function Header(prop) {
    
    const showIcons = () => {
        if (prop.user.loggedIn) {
            console.log(prop.user.loggedIn)
            return <>
                    <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                    <FontAwesomeIcon className="icon" icon={faBell} />
                    <FontAwesomeIcon className="icon" icon={faUser} /></>
        } else {
            return <LoginPopup/>;
        }        
      };

    return (
        <div className="Header">
            <div className="left">
                <div className="search">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                    <input className="searcharea" type="text" placeholder="Search..."></input>
                </div>
            </div>
            <div className="middle">
                {/* <p>Stocknoob</p> */}
                S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} />         
            </div>
            <div className="right">
                {showIcons()}                        
            </div>
        </div>
    )
}



