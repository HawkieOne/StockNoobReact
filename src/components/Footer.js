import React from 'react'
import "./Footer.css";
import {  faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="Bottom">
            <div className="container">
            <div className="left">
                CONTACT
                <hr className="seperator"/>
                <span>
                <FontAwesomeIcon className="mail" icon={faAddressBook} />
                Stocknoob@stocks.com
                </span>
            </div>
            <div className="middle">
                ABOUT
                <hr className="seperator"/>
                <span>
                Stocknoob is a fictional training 
                <br/>
                application designed as a learning tool</span>
            </div>
            <div className="right">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </div>
            </div>
        </div>
    )
}
