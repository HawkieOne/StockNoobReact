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
          url: 'https://stocknoob.azurewebsites.net/stock/stocks',
          headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxMzUzOTY0LCJleHAiOjE2MjE0NDAzNjQsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.qZYRFYN5BowYMG_auGRFETmKKVAVBesxxrwt0CQ6wyKWowHLAgTHwlDgclMdWlQTp2ay8Ug-pcWQMmX4E8tfWzZuSBENYQU8wTyzBXgFOQwG91CiksoSVHSanTRvuVbpJTNiHaidSJCBY9mFBBzKh_dLJRc6fgrYr_OsQpxhWO01JhZFPnMxDcSe1ZGOU5ptWv3YlS3FOQusLlh7ltxeXcEGYbj-lUPwLUcf5ZNbMEL4RgVcYvAnKoGyjGlMY3DL43DePV08g_Z1kjHWdAEaMSXgOD9ZJ_v-CIPLBnaOzAsNreq91SC7661hIFGU8PwtDOqXV3tZNJVqH031sRNzNA'}
        };
        
         axios.request(options).then(function (response) {
          const apiResponse = response.data;
          let number = Math.floor(Math.random() * 99);
          let stockSymbol = apiResponse[number].Stock_Shortening;
          // console.log(stockSymbol);
           return getApiData(stockSymbol);
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
          access_key: '77c171bec68a191781a8e08d026779d7'
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
              return {
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
              };    
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
      // getRandomStock();
    }, []);

    const strengths = [
    {
      text: "Real-time updates about the stock market",
      icon: faChartArea
    },
    {
      text: "Invest with simulated money",
      icon: faCoins
    },
    {
      text: "Read news about stocks",
      icon: faNewspaper
    }];

    const stocks = [
      {
        // graph: getRandomStock(),
        title: "Test"
      },
      {
        // graph: getRandomStock(),
        title: "HEJ"
      },
      {
        // graph: getRandomStock(),
        title: "Ye"
      }];

    return (  
        <div className="Login">   
          <h3 className="text-light pt-4"><span className="yellow">StockNoob</span> - an application for simulating the stock market</h3>
          <div className="d-flex justify-content-center">
            <hr className="divider m-2"/>
          </div>
          <div className="w-100 row text-light my-4 text-lg p-3">   
            {strengths.map((strength) => (
              <div className="col d-flex flex-column align-items-center">        
                <FontAwesomeIcon className="icon fa-5x mb-3 yellow" icon={strength.icon} />
                <h5>{strength.text}</h5>
              </div>
            ))}
          </div> 

          {/* <div className="d-flex justify-content-center">
            <hr className="divider m-2"/>
          </div> */}

          <h3 className="text-light">Today's stocks</h3>
          <div className="d-flex justify-content-center">
            <hr className="divider m-2"/>
          </div>
          <div className="row m-3 text-light">
            {stocks.map((stock) => (
              <div className="col">
                <h6>{stock.title}</h6>
                <Line className="line-chart" data={stock.graph}/>
               </div> 
            ))}
            {/* <div className="col">
              <h6>{title}</h6>
              <Line className="line-chart" data={stockGraph}/>
            </div> 
            <div className="col">
            <h6>{title}</h6>
              <Line className="line-chart" data={stockGraph}/>
            </div> 
            <div className="col">
              <h6>{title}</h6>
              <Line className="line-chart" data={stockGraph}/>
            </div>  */}
          </div>                                 
        </div>
    )
}
