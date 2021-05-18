import React, { useState, useEffect } from 'react';
import "./Main.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'reactjs-popup/dist/index.css';
import {Line} from 'react-chartjs-2'



export default function Main() {

    const [stockGraph, setStockGraph] = useState();

    const getApiData = () => { 
        let labels = [];
        let data = [];   
        let label = "";
        const axios = require('axios');
        const params = {
          access_key: 'da50ae70b9dd9a40022f6cc5ef93f4e5'
        }
    
        axios.get('http://api.marketstack.com/v1/tickers/MSFT/intraday', {params})
          .then(response => {
            const apiResponse = response.data;
            console.log(apiResponse);            
            // apiResponse.data.intraday.map((stock, index) =>    {                
            //     if (index < 10) {        
                                                                                                    
            //     }                
            //     });   
            for(let i = 0; i < 10; i++) {
                let dataAPI = apiResponse.data.intraday[i];
                label = dataAPI.symbol;
                labels.push("s");
                data.push(parseInt(dataAPI.open));
            }
            setStockGraph({
                labels: labels,
                datasets: [
                  {
                    label: label,
                    data: data,
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    fill: false,
                    pointRadius: 0,
                  }
                ]
              }); 
            console.log("API");
            console.log(stockGraph);                                          
          }).catch(error => {
            console.log(error);
          });
      };

      const graph = (event) => {    
        var data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'TSLA',
                data: [8, 9, 7, 9, 12, 14, 19],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
            }]            
        };
        console.log("GRAPH");
        console.log(data);
        return data;
      };

    useEffect(() => {
        getApiData();
    }, []);
    return (  
        <div className="Login">
            <div className="top">            
            </div>            
            <div className="middleContainer">
                <div className="left"> 
                {/* <img className="picture" src="https://www.smartdatacollective.com/wp-content/uploads/2018/12/crypto-trading-vs-stock-trading.jpg" alt=""></img> */}                
                {/* {getApiData()} */}
                {/* {console.log(stockGraph)} */}
                {/* {graph} */}
                <Line className="line-chart"                
                 data={stockGraph}               
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
