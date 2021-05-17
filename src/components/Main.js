import React, { useState } from 'react';
import "./Main.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'reactjs-popup/dist/index.css';


import {Line} from 'react-chartjs-2'



export default function Main() {
    return (  
        <div className="Login">
            <div className="top">            
            </div>
            <div className="middleContainer">
                <div className="left"> 
                {/* <img className="picture" src="https://www.smartdatacollective.com/wp-content/uploads/2018/12/crypto-trading-vs-stock-trading.jpg" alt=""></img> */}
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
                        fill: false,
                        pointRadius: 0,
                    }, {
                        label: 'PYPL',
                        data: [10, 12, 8, 6, 13, 15, 18],
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
                        fill: false,
                        pointRadius: 0,
                    }]
                    
                }}
                
                />
                </div>
                <div className="container">
                    <div className="right">
                        S<span>Noob</span> <FontAwesomeIcon className="icon" icon={faChartLine} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
