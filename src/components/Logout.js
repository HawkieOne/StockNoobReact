import {React, useState, useEffect} from 'react'
import history from './History'

export default function Login(prop) {

  var [user, setUser] = useState(null);

    const logout = () => {  
        prop.setUser(null);  
        const path = "/Overview";
            history.push({
            pathname: path,
            state: { 
                user: user
            }
        })  
      };

    return (
        <div>
            <div className="box">
                <div className="d-flex justify-content-end">
                    <h5 className="header">Log in</h5>
                    {/* <button className="close text-danger pr-1 pt-1" onClick={close}>&times;</button> */}
                </div>                
                <hr className="divider"/>
                <div className="content">
                    <button className="logout" type="button" onClick={logout}>Log out</button>
                </div>          
            </div>
        </div>
    )
}
