import React, { useState, useEffect } from 'react';
import "./Main.css";
import {  faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'reactjs-popup/dist/index.css';
import {Line} from 'react-chartjs-2'



export default function Main() {

    const [stockGraph, setStockGraph] = useState();

    const getRandomStock = () => { 
        const axios = require('axios');
        var options = {
          method: 'GET',
          url: 'https://stocknoob.azurewebsites.net//stock/stocks',
          headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxMzUzOTY0LCJleHAiOjE2MjE0NDAzNjQsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.qZYRFYN5BowYMG_auGRFETmKKVAVBesxxrwt0CQ6wyKWowHLAgTHwlDgclMdWlQTp2ay8Ug-pcWQMmX4E8tfWzZuSBENYQU8wTyzBXgFOQwG91CiksoSVHSanTRvuVbpJTNiHaidSJCBY9mFBBzKh_dLJRc6fgrYr_OsQpxhWO01JhZFPnMxDcSe1ZGOU5ptWv3YlS3FOQusLlh7ltxeXcEGYbj-lUPwLUcf5ZNbMEL4RgVcYvAnKoGyjGlMY3DL43DePV08g_Z1kjHWdAEaMSXgOD9ZJ_v-CIPLBnaOzAsNreq91SC7661hIFGU8PwtDOqXV3tZNJVqH031sRNzNA'}
        };
        
         axios.request(options).then(function (response) {
          const apiResponse = response.data;
          let number = Math.floor(Math.random() * 99);
          let stockSymbol = apiResponse[number].Stock_Shortening;
          // console.log(stockSymbol);
          getApiData(stockSymbol);
        }).catch(function (error) {
          console.error(error);
          return "MSFT";
        });
    };

    const getApiData = (stockSymbol) => { 
        let labels = [];
        let data = [];   
        let label = "";
        const axios = require('axios');
        const params = {
          access_key: 'da50ae70b9dd9a40022f6cc5ef93f4e5'
        }
        console.log(stockSymbol);
        axios.get(`http://api.marketstack.com/v1/tickers/${stockSymbol}/intraday`, {params})
          .then(response => {
            const apiResponse = response.data;
            console.log(apiResponse);            
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
          }).catch(error => {
            console.log(error);
          });
      };

      // const graph = (event) => {    
      //   var data = {
      //       labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      //       datasets: [{
      //           label: 'TSLA',
      //           data: [8, 9, 7, 9, 12, 14, 19],
      //           backgroundColor: [
      //               'rgba(255, 159, 64, 0.2)'
      //           ],
      //           borderColor: [
      //               'rgba(255, 159, 64, 1)'
      //           ],
      //           borderWidth: 1,
      //           fill: false,
      //           pointRadius: 0,
      //       }]            
      //   };
      //   console.log("GRAPH");
      //   console.log(data);
      //   return data;
      // };

    useEffect(() => {   
      getRandomStock();
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
