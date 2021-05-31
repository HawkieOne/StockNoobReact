import {React, useState} from 'react'
import {  faUser, faQuestionCircle, faSearch, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import "./Login.css";

import history from './History';



export default function Header(prop) {

    
    const [search, setSearch] = useState(null);

    const showIcons = () => {
        // console.log(prop.user);
        if (prop.user !== null) {
            return <div className="d-flex userArea" onClick={toLogout}>
                        <FontAwesomeIcon className="icon" icon={faUser}/>
                        <div className="d-flex flex-column m-1">
                            <h6 className=" m-0 p-0 yellow">Welcome!</h6>
                            <p className="m-0 p-0 text-white">{prop.user.Username}</p>
                        </div>
                    </div>     
        } else {
            return <div className="d-flex userArea" onClick={toLogin}>
                        <FontAwesomeIcon className="icon" icon={faUser}/>
                        <div className="d-flex flex-column userArea m-1">
                            <h6 className=" m-0 p-0 yellow">Welcome!</h6>
                            <p className="m-0 p-0 text-white">Log in</p>
                        </div>
                    </div>
        }            
      };

      const toLogout = () => {    
        const path = "/logout";
            history.push({
                pathname: path,
            })  
      };

      const toLogin = () => {    
        const path = "/login";
            history.push({
            pathname: path,
            
        })  
      };

      const toGuide = () => {    
        const path = "/guide";      
        history.push({
            pathname: path
        })  
      };

      const toHome = () => {    
        
 if (prop.user !== null) {
    const path = "/overview";      
    history.push({
    pathname: path,
    user: prop.user
})  
}
else{  
const path = "/";      
history.push({
    pathname: path
})  
}
      };     

      const toSearch = (event) => {  
        event.preventDefault();
        const path = "/search";   
        console.log(search);   
        history.push({
            pathname: path,    
            key: Date.now(), 
            state: {
                search: search,
                user: prop.user
            }
        })  
      };

      const setState = (event) => {    
        //   console.log(event.target.value);    
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
            <div className="right d-flex align-items-start">
                <FontAwesomeIcon className="icon guide" icon={faQuestionCircle} onClick={toGuide}/>
                {showIcons()}                        
            </div>
        </div>
    )
}



