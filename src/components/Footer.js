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
                    <hr className="seperator w-75"/>
                    <span>
                    <FontAwesomeIcon className="mail fa-lg" icon={faAddressBook} />
                    stocknoob@stocks.com
                    </span>
                </div>
                <div className="col font-weight-light">                    
                    <h5>ABOUT</h5>
                    <hr className="seperator w-75"/>
                    Stocknoob is a fictional stock training                 
                    application
                </div>
                <div className="col">
                    <h5>Social</h5>
                    <hr className="seperator w-75"/>
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon className="icon mr-5 fa-lg" icon={faInstagram} />
                        <FontAwesomeIcon className="icon fa-lg" icon={faTwitter} />
                        <FontAwesomeIcon className="icon ml-5 fa-lg" icon={faFacebookF} />
                    </div>
                </div>
        </div>
    )
}
