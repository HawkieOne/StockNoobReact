import React, { useState, useEffect } from 'react'
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
import axios from 'axios';

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
        Token: ",",
        haveStocks: []
    });
    const [stocks, setStocks] = useState([]);

    const apiRequest = (event) => {
        
        
    }
    const pushTransaction = (event) => {
        const path = "/transactionList";
            history.push({
            pathname: path
        })     
    };

    const pushNewsfeed = (event) => {
        const path = "/news";
            history.push({
            pathname: path
        })     
    };

    const pushHoldings = (event) => {
        const path = "/stockList";
            history.push({
            pathname: path
        })     
    };

    const logos = (event) => {
        const ticker = stocks.haveStocks.valuesOf(0)
        
        const path = "/stockList";
            history.push({
            pathname: path
        })     
    };
    useEffect(() => {
        const axios = require('axios');
        var options = {
          method: 'GET',
          url: 'https://stocknoob.azurewebsites.net/stock/userstock/3',
          headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxMzUzOTY0LCJleHAiOjE2MjE0NDAzNjQsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.qZYRFYN5BowYMG_auGRFETmKKVAVBesxxrwt0CQ6wyKWowHLAgTHwlDgclMdWlQTp2ay8Ug-pcWQMmX4E8tfWzZuSBENYQU8wTyzBXgFOQwG91CiksoSVHSanTRvuVbpJTNiHaidSJCBY9mFBBzKh_dLJRc6fgrYr_OsQpxhWO01JhZFPnMxDcSe1ZGOU5ptWv3YlS3FOQusLlh7ltxeXcEGYbj-lUPwLUcf5ZNbMEL4RgVcYvAnKoGyjGlMY3DL43DePV08g_Z1kjHWdAEaMSXgOD9ZJ_v-CIPLBnaOzAsNreq91SC7661hIFGU8PwtDOqXV3tZNJVqH031sRNzNA'}
        };
        
        let stocksArray = [];

         axios.request(options).then(function (response) {
          const apiResponse = response.data;
          apiResponse.map((item, index) => {
            let stock = {
                HS_User_ID: item.HS_User_ID,
                HS_Stock_ID: item.HS_Stock_ID,
                HS_Price: item.HS_Price,
                HS_Amount: item.HS_Amount,
                Stock_Name: item.Stock_Name,
                Stock_Shortening: item.Stock_Shortening
                }
            console.log(stock);
            stocksArray.push(stock);
          })
          setStocks(stocksArray)
          console.log(stocksArray)
          console.log(stocks)
          console.log(stocks[0].Stock_Name)
          
        }).catch(function (error) {
          console.error(error);
          return "MSFT";
        });
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
                                <button className="leftholdingButton" onClick={apiRequest}>
                                    <Holdings onClick={apiRequest} />
                                    <h4 className="text" onClick={apiRequest}>Holdings</h4>
                                    
                                </button>
                                <button className="leftholdingButton" onClick={pushTransaction} >
                                    <Transaction onClick={pushTransaction} />
                                    <h4 className="text" onClick={pushTransaction} >Transactions</h4>
                                    
                                </button>
                                <button className="leftholdingButton" onClick={pushNewsfeed}>
                                    <News onClick={pushNewsfeed}/>
                                    <h4 className="text" onClick={pushNewsfeed}>Newsfeed</h4>
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
                                    <h6 className="text">{stocks[0].Stock_Name}, {stocks[0].Stock_Shortening}</h6>
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
                                    <h6 className="text">{stocks[1].Stock_Name}, {stocks[1].Stock_Shortening}</h6>
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
                                    <h6 className="text">{stocks[2].Stock_Name}, {stocks[2].Stock_Shortening} </h6>
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
                                    <h6 className="text">{stocks[3].Stock_Name}, {stocks[3].Stock_Shortening}</h6>
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
                                    <h6 className="text">{stocks[4].Stock_Name}, {stocks[4].Stock_Shortening} </h6>
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
                                    <h6 className="text">{stocks[5].Stock_Name}, {stocks[5].Stock_Shortening}</h6>
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
