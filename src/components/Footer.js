import React from 'react'
import "./Footer.css";
import {  faUser, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Footer() {
    return (
        <div className="Bottom">
            <div className="container">
            <div className="left">
                CONTACT
                <hr className="seperator"/>
                <FontAwesomeIcon className="mail" icon={faAddressBook} />
                Stocknoob@stocks.com
            </div>
            <div className="middle">
                ABOUT
                <hr className="seperator"/>
                Stocknoob is a fictional training 
                <br/>
                application designed as a learning tool
            </div>
            <div className="right">
                
                <FontAwesomeIcon className="icon" icon={faUser} />
                <FontAwesomeIcon className="icon" icon={faUser} />
                <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            </div>
        </div>
    )
}
