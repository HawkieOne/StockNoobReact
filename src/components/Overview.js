import React, { useState } from 'react'
import './overview.css'
import history from './History';
import {ReactComponent as TSLA} from './Logos/TSLA.svg'
import {ReactComponent as AAPL} from './Logos/AAPL.svg'
import {ReactComponent as AMZN} from './Logos/AMZN.svg'
import {ReactComponent as GOOG} from './Logos/GOOG.svg'
import {ReactComponent as FB} from './Logos/FB.svg'
import {ReactComponent as MSFT} from './Logos/MSFT.svg'
import {ReactComponent as News} from './Logos/News.svg'
import {ReactComponent as Holdings} from './Logos/Holdings.svg'
import {ReactComponent as Transaction} from './Logos/Transaction.svg'
import {Line} from 'react-chartjs-2'


export default function Overview() {
    
    const [user, setUser] = useState({
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

        return (
            <div className="grid-container">

                <div className="top-container">
                   
                        <div className="b1">
                            <button className="graphButtons">
                                <Line
                                    data={{
                                        labels: ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00'],
                                        datasets: [{
                                            label: 'OMX30',
                                            data: [2389, 2319, 2343, 2412, 2410, 2376, 2342],
                                            backgroundColor: 'rgba(242, 214, 88, 0.2)',
                                            borderColor: 'rgba(242, 214, 88, 1)',
                                            borderWidth: 1,
                                            tension: 0,
                                            borderCapStyle: "round",
                                            fill: true,
                                            pointRadius: 0,
                                        }]
                                        
                                    }}
                                    width={144}
                                    height={144}
                                />
                            </button>
                        </div>
                        <div className="b2">
                            <button className="graphButtons">  
                                <Line
                                    data={{
                                        labels: ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00'],
                                        datasets: [{
                                            label: 'TSLA',
                                            data: [530, 580, 550, 540, 510, 580, 620],
                                            backgroundColor: 'rgba(242, 214, 88, 0.2)',
                                            borderColor: 'rgba(242, 214, 88, 1)',
                                            borderWidth: 1,
                                            tension: 0,
                                            borderCapStyle: "round",
                                            fill: true,
                                            pointRadius: 0,
                                        }]
                                        
                                    }}
                                    width={144}
                                    height={144}
                                />
                            </button>
                        </div>
                        <div className="b3">
                            <button className="graphButtons">
                                <Line
                                    data={{
                                        labels: ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00'],
                                        datasets: [{
                                            label: 'AMZN',
                                            data: [3230, 3300, 3350, 3400, 3300, 3420, 3500],
                                            backgroundColor: 'rgba(242, 214, 88, 0.2)',
                                            borderColor: 'rgba(242, 214, 88, 1)',
                                            borderWidth: 1,
                                            tension: 0,
                                            borderCapStyle: "round",
                                            fill: true,
                                            pointRadius: 0,
                                        }]
                                        
                                    }}
                                    width={144}
                                    height={144}
                                />
                            </button>
                        </div>
                        <div className="b4">
                            <button className="graphButtons">
                                <Line
                                    data={{
                                        labels: ['9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00'],
                                        datasets: [{
                                            label: 'FB',
                                            data: [324, 300, 295, 280, 270, 245, 220],
                                            backgroundColor: 'rgba(242, 214, 88, 0.2)',
                                            borderColor: 'rgba(242, 214, 88, 1)',
                                            borderWidth: 1,
                                            tension: 0,
                                            borderCapStyle: "round",
                                            fill: true,
                                            pointRadius: 0,
                                        }]
                                        
                                    }}
                                    width={144}
                                    height={144}
                                />
                            </button>
                        </div>
                 
                </div>
               
                    <div className="left-container">
                        <div className="personalButtons">
                            <div className="leftButtons">
                                <button className="leftholdingButton" >
                                    <Holdings/>
                                    <h4 className="text">Holdings</h4>
                                    
                                </button>
                                <button className="leftholdingButton">
                                    <Transaction/>
                                    <h4 className="text">Transactions</h4>
                                    
                                </button>
                                <button className="leftholdingButton">
                                    <News/>
                                    <h4 className="text">Newsfeed</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                   
               
                
                    <div className="right-container">

                    <h3 className="t2">Your Holdings</h3>

                    <div className="personalButtons-left">
                    <button className="holdingButton" id="left1">
                    <div className="specificButton">
                        
                                <AMZN width="49.438" height="54.637" fill="#fff"/>
      
                                <div className="specificDescription">
                                    <h4 className="text">Amazon, AMZN </h4>
                                    <p className="text">Top Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+15%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="left2">
                        <div className="specificButton">
                                <GOOG width="49.438" height="54.637" fill="#fff"/>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Alphabet, GOOG </h4>
                                    <p className="text">Top Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+12%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="left3">
                        <div className="specificButton">
                                <TSLA/>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                        </div>

                       
                    <div className="personalButtons-right">
                        <button className="holdingButton" id="right1">
                            <div className="specificButton">
                                <FB width="49.438" height="54.637" fill="#fff"/>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Facebook, FB </h4>
                                    <p className="text">Underperforming</p>            
                                </div>
                                <div className="procent">
                                    <p className="redText">-8%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="right2">
                        <div className="specificButton">
                                <AAPL width="49.438" height="54.637" fill="#fff"/>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Apple Inc, AAPL </h4>
                                    <p className="text">Underperforming</p>            
                                </div>
                                <div className="procent">
                                    <p className="redText">-5%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="right3">
                        <div className="specificButton">
                                <MSFT width="49.438" height="54.637" fill="#fff"/>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Microsoft, MSFT </h4>
                                    <p className="text">Underperforming</p>            
                                </div>
                                <div className="procent">
                                    <p className="redText">-3%</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    </div>
                   


          
                    
                   
               
            </div>
        )
    
}
