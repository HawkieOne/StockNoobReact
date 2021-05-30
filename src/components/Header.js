import {React, useState, useEffect} from 'react'
import {  faUser, faClock, faQuestionCircle, faSearch, faBell, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import Guide from './Guide';
import LoginPopup from "./LoginPopup"

import history from './History';



export default function Header(prop) {

    
    const [search, setSearch] = useState(null);

    const showIcons = () => {
        console.log(prop.user);
        if (prop.user !== null) {
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

      const toSearch = (event) => {  
        event.preventDefault();
        const path = "/search";   
        console.log(search);   
        history.push({
            pathname: path,    
            key: Date.now(), 
            state: {
                search: search
            }
        })  
      };

      const setState = (event) => {        
        setSearch(event.target.value)
      };

    //   useEffect(() => {
    //     console.log(searchValue);   
    //   }, [searchValue]);
      
    return (
        <div className="Header">
            <div className="left">
                <div className="search">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
                    <form onSubmit={toSearch}>
                        <input 
                            className="searcharea" 
                            type="text" 
                            placeholder="Search..." 
                            onChange={setState}>
                        </input>
                    </form>
                    
                </div>
            </div>
            <div className="middle" onClick={toHome}>
                S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine}/>         
            </div>
            <div className="right">
                {showIcons()}                        
            </div>
        </div>
    )
}



