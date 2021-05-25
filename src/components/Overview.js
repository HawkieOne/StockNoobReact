import React, { useState, useEffect } from 'react'
import './overview.css'
import history from './History';
import {ReactComponent as TSLA} from './Logos/TSLA.svg'
import {ReactComponent as AAPL} from './Logos/AAPL.svg'
import {ReactComponent as AMZN} from './Logos/AMZN.svg'
import {ReactComponent as GOOG} from './Logos/GOOG.svg'
import {ReactComponent as FB} from './Logos/FB.svg'
import {ReactComponent as MSFT} from './Logos/MSFT.svg'
import {ReactComponent as NFLX} from './Logos/NFLX.svg'
import {ReactComponent as NVDA} from './Logos/NVDA.svg'
import {ReactComponent as NKE} from './Logos/NKE.svg'
import {ReactComponent as News} from './Logos/News.svg'
import {ReactComponent as Holdings} from './Logos/Holdings.svg'
import {ReactComponent as Transaction} from './Logos/Transaction.svg'
import {Line} from 'react-chartjs-2'
import axios from 'axios';

export default function Overview(prop) {
    
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
   
    const logotype = (symbol) => {
            // console.log("Logotype")
            // console.log(symbol);      
            switch (symbol) {
                case 'AMZN':
                    return <AMZN width="20" height="20" fill="#fff"/>;
                case 'MSFT':             
                    return <MSFT width="20" height="20" fill="#fff"/>;
                case 'NKE':
                    return <NKE width="20" height="20"/>;    
                case 'AAPL':
                    return <AAPL width="20" height="20" fill="#fff"/>;
                case 'FB':
                    return <FB width="20" height="20" fill="#fff"/>; 
                case 'NVDA':
                    return <NVDA width="20" height="20" fill="#fff"/>; 
                case 'TSLA':
                    return <TSLA width="20" height="20" fill="#fff"/>; 
                case 'GOOG':
                    return <GOOG width="20" height="20" fill="#fff"/>; 
                case 'NFLX':
                    return <NFLX width="20" height="20" fill="#fff"/>;
                case 'News':
                    return <News width="20" height="20" fill="#fff"/>;
                default:
                    return null;
            }
        }

    useEffect(() => {

        console.log("OVERVIEW");
        const {user} = prop.location.state;
        console.log(user);
        const axios = require('axios');       
        var options = {
          method: 'GET',
          url: 'https://stocknoob.azurewebsites.net/stock/userstock/3',
          headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxODU2NzU1LCJleHAiOjE2MjE5NDMxNTUsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.a3U6rp2OeetV2R2aPid4tw9fKCPZv2rwGpQkG_WGM-dMKrhHKtLZ7ejg-UjdO11a8XG-pB9UxiXeEX2gde3POpiDaq-4WCwkQsUIk3EsgDBhpmmOHDPMlgmH0SUlllwUDhcRFRhVkGnLWZ9iYVQH_Z4f01EvZNTb_v_EXypGiP-3wtaChwgC8B88YLYnPfkSqaQ6il6Q6occpmXFOnHtQhviv9-qkxk41BFHUphWpb5N19tw1UvRAAdQIO9NmyVEw5EZNByxRHydWXIavO9sBpUwmTKd_KfarS-CZR8b1u5Pk-joau0l-Sg8941etgWNovLlEC7dnWk_AY4c4u1Xuw'}
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
                Stock_Shortening: item.Stock_Shortening,
            }
            // console.log(stock);
            stocksArray.push(stock);
          })        
        //   console.log(stocksArray);         
          setStocks(stocksArray)
        //   console.log(stocks)  
        }).catch(function (error) {
          console.error(error);
        });
    },  []);

    const graphs = [{
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
        }]}, {
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
            
        }, {
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
            
        }, {
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
            
        }]

        return (
            <div className="d-flex flex-column mt-4">    
                <h2 className="text-center yellow">Welcome!</h2>            
                <div className="d-flex justify-content-around">                      
                    {graphs.map((graph) => (
                        <div className="b1">
                            <h5 className="text-light">Graph</h5>
                            <button className="graphButtons">
                                <Line
                                    data={graph}
                                    width={144}
                                    height={144}
                                />
                            </button>
                        </div>
                    ))}                                                                          
                </div>
               
                <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column justify-content-center">
                        <button className="actionButton" onClick={pushHoldings}>
                            <Holdings onClick={pushHoldings} />
                            <h4 className="text" onClick={pushHoldings}>Holdings</h4>                                
                        </button>
                        <button className="actionButton" onClick={pushTransaction} >
                            <Transaction onClick={pushTransaction} />
                            <h4 className="text" onClick={pushTransaction} >Transactions</h4>                                
                        </button>
                        <button className="actionButton" onClick={pushNewsfeed}>
                            <News onClick={pushNewsfeed}/>
                            <h4 className="text" onClick={pushNewsfeed}>Newsfeed</h4>
                        </button>
                    </div>

                    <div className="w-50">
                        <h3 className="t2">Your Holdings</h3>
                        <div className="d-flex flex-column w-100">                   
                            {stocks.map((stock) => (                      
                                <button className="holdingButton w-100 pl-5">                
                                    <div className="row align-items-center" >                                            
                                        {logotype(stock.Stock_Shortening)}
                                        <p className="col-4 yellow">{stock.Stock_Name}</p>
                                        <p className="col yellow">{stock.Stock_Shortening}</p>   
                                        <p className="text col-4">Top Performing</p>                                                                             
                                        <div className="procent col">
                                            <p className="greenText">+15%</p>
                                        </div>
                                    </div>
                                </button>
                            ))}     
                            <p className="allstocks" onClick={pushHoldings}>See all stocks</p>           
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
