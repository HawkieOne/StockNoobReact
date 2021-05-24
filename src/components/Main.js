import React, { useState, useEffect } from 'react';
import "./Main.css";
import 'reactjs-popup/dist/index.css';
import {Line} from 'react-chartjs-2'
import { faChartArea, faNewspaper, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Main() {

    const [stockGraph, setStockGraph] = useState();
    const [title, setTitle] = useState();

    const getRandomStock = () => { 
        const axios = require('axios');
        var options = {
          method: 'GET',
          url: 'https://stocknoob20210520102100.azurewebsites.net/stock/stocks',
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
          access_key: '42afa58ed9a8332cd53fb1a45d75b29b'
        }
        // console.log(stockSymbol);
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
            setTitle(label);
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
              // console.log(stockGraph)                                   
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
        <div className="Login my-4">   
          <h3 className="text-light">StockNoob - an application for simulating the stock market</h3>
          <div className="w-100 row text-light my-4 text-lg">           
            <div className="col d-flex flex-column align-items-center">
              {/* <h5>{title}</h5> */}
               {/* <Line className="line-chart" data={stockGraph}/> */}
              <FontAwesomeIcon className="icon" icon={faChartArea} />
              <h6>Real-time updates about the stock market</h6>
            </div> 
            <div className="col d-flex flex-column align-items-center">
              <FontAwesomeIcon className="icon" icon={faCoins} />
              <h6>Invest with simulated money</h6>
            </div> 
            <div className="col d-flex flex-column align-items-center">
              <FontAwesomeIcon className="icon" icon={faNewspaper} />
              <h6>Watch news about stocks</h6>
            </div> 

            {/* <div className="col d-flex flex-column justify-content-center">
                <p>StockNoob - an application for simulating the stock market</p>
                <ul className="list">
                  <li className="">Real-time updates about the stock market</li>
                  <li className="">Invest with simulated money</li>
                  <li className="">Watch news about stocks</li>
                </ul>
            </div>  */}
          </div> 
          <h3 className="text-light">Today's stocks</h3>
          <div className="row m-3 text-light">
            <div className="col shadow">
              <h6>{title}</h6>
              <Line className="line-chart" data={stockGraph}/>
            </div> 
            <div className="col shadow">
            <h6>{title}</h6>
              <Line className="line-chart" data={stockGraph}/>
            </div> 
            <div className="col shadow">
              <h6>{title}</h6>
              <Line className="line-chart" data={stockGraph}/>
            </div> 
          </div>                                 
        </div>
    )
}
