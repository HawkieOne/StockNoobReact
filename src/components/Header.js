import {React, useState} from 'react'
import {  faUser, faClock, faQuestionCircle, faSearch, faBell, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import LoginPopup from "./LoginPopup"
import Guide from './Guide';

import history from './History';



export default function Header(prop) {

    
    const showIcons = () => {
        if (prop.user.loggedIn) {
            console.log(prop.user.loggedIn)
            return <> 
                        <FontAwesomeIcon className="icon" icon={faQuestionCircle} onClick={Guide}/>
                        <FontAwesomeIcon className="icon" icon={faBell}/>
                        <FontAwesomeIcon className="icon" icon={faUser}/>
                    </>
        } else {
            return <LoginPopup/>;
        }        
      };

      const toHome = () => {    
        const path = "/";      
        history.push({
            pathname: path
        })  
      };

      const [searchVal, setSearchVal] = useState({
        searchValue: ""  
      });

      const toSearch = () => {    
        const path = "/search";      
        history.push({
            pathname: path,
            state: {
                searchValue: searchVal.searchValue
            }
        })  
      };

    return (
        <div className="Header">
            <div className="left">
                <div className="search">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
                    <form onSubmit={toSearch}>
                        <input className="searcharea" type="text" placeholder="Search..." onChange={(event)=> {setSearchVal(event.target.value)}}
                        ></input>
                    </form>
                    
                </div>
            </div>
            <div className="middle" onClick={toHome}>
                <span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine}/>         
            </div>
            <div className="right">
                {showIcons()}                        
            </div>
        </div>
    )
}



