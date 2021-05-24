import React from 'react'
import "./Footer.css";
import {  faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="footer row">
            <div className="col">
                    <h5>CONTACT</h5>
                    <hr className="seperator"/>
                    <span>
                    <FontAwesomeIcon className="mail" icon={faAddressBook} />
                    Stocknoob@stocks.com
                    </span>
                </div>
                <div className="col">                    
                    <h5>ABOUT</h5>
                    <hr className="seperator"/>
                    <span>
                    Stocknoob is a fictional training 
                    <br/>
                    application designed as a learning tool</span>
                </div>
                <div className="col row">
                    <FontAwesomeIcon className="icon col" icon={faInstagram} />
                    <FontAwesomeIcon className="icon col" icon={faTwitter} />
                    <FontAwesomeIcon className="icon col" icon={faFacebookF} />
                </div>
        </div>
    )
}
