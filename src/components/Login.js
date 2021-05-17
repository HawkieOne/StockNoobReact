import React, { useState } from 'react';
import "./Login.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Line} from 'react-chartjs-2'



export default function Login() {
    var [user, setUser] = useState({
        LoginID: "",
        Username: "",
        UserID: "",
        Mail: "",
        Money: "",
        Holdings: "",
        Goal: "",
        GoalItem: "",
        SavingMonth: "",
        Token: ","
    });

   var [Username, setUsername] = useState({
        Username: ""
    });
    var [Password, setPassword] = useState({
        Password: ""
    });

    


    const login = (event) => {
        event.preventDefault(); 
        // console.log(Username);
        // console.log(Password);       
        const axios = require('axios');
        console.log("LOGIN");
        axios.post('http://localhost:3010/user/login',
                  {
                    "Username": Username.Username,
                    "Password": Password.Password  
                  }             
                )
                .then(response => {
                //   console.log(response.data)             
                  const data = response.data;
                  setUser({
                    LoginID : data.Login_ID,
                    Username : data.Username,
                    UserID : data.User_ID,
                    Mail : data.Mail,
                    Money : data.Money,
                    Holdings : data.Holdings,
                    Goal : data.Goal,
                    GoalItem : data.GoalItem,
                    SavingMonth : data.SavingMonth,
                    Token : data.Token.access_token})
                               
                  console.log(user);  
                }).catch(error =>
                  console.log(error)
                )
      };


      const handeLogin = (event) => {
        if ([event.target.name] == "Username") {
            console.log("USERNAME SET");
            setUsername({[event.target.name]: event.target.value})
        } else {
            console.log("PASSWORD SET");
            setPassword({[event.target.name]: event.target.value})
        }        
      };



      

    return (  
        <div className="Login">
            <div className="toppen">
            <Popup  className="popup" trigger={<button className="button"> Log in </button>} modal nested>
            {close => (
            <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> Log in </div>
            <div className="content">
                <div className="form">
                    <form onSubmit={login}>
                    <br/>
                    <label><b>Username</b></label>
                    <br/>
                    <input  type="text" required onChange={handeLogin} name="Username"></input>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <input  type="password" required onChange={handeLogin} name="Password"></input>
                    <br/>
                    <button className="login" type="submit" >Log in</button>
                    </form>
                </div>
            </div>
            <div className="actions">
            <button
                    className="button cancel"
                    onClick={() => {
                    console.log('modal closed ');
                    close();
                    }}
                >
                    Cancel
                </button>
                <button
                    className="button register"
                    
                >
                    Register
                </button>
                </div>
            </div>
            )}
        </Popup>
            </div>
            <div className="mitten">
                <div className="vänster"> 
                {/* <img className="picture" src="https://www.smartdatacollective.com/wp-content/uploads/2018/12/crypto-trading-vs-stock-trading.jpg"
                alt=""
                ></img> */}
                <Line className="line-chart"
                 data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'TSLA',
                        data: [8, 9, 7, 9, 12, 14, 19],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        fill: true,
                        pointRadius: 0,
                    }]
                    
                }}
                
                />
                </div>
                <div className="container">
                <div className="höger">S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} /></div>
                </div>
            </div>
            
        </div>
    )
}
