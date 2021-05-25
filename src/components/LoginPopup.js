import React, { useState, useRef } from 'react';
import Popup from 'reactjs-popup';
import "./Login.css";
import history from './History';

export default function LoginPopup() {

    const ref = useRef();
    const closeModal = () => ref.current.close();
    const [open, setOpen] = useState(false);



      const toLogin = () => {    
        const path = "/login";
            history.push({
            pathname: path,
            
        })  
      };
    


      

    return (
      <div>
        <button className="login-button" onClick={toLogin}>Logga in</button>
      </div>
    )
}
