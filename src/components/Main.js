import React, { useState, useEffect } from 'react';
import "./Main.css";
import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Line} from 'react-chartjs-2'
import { faChartArea, faNewspaper, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../images/Stock.png"
import News from './News'



export default function Main() {

    const [stockGraph, setStockGraph] = useState();
    const [title, setTitle] = useState();
    const [articles, setArticles] = useState([]);

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

      const getNews = () => {    
        var axios = require("axios").default;

        var options = {
            method: 'POST',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list',
            params: {region: 'US', snippetCount: '28'},
            headers: {
              'content-type': 'text/plain',
              'x-rapidapi-key': '5b6d31f8cfmsh5598169723208c2p1be828jsn0b38fac79ee6',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            },
            data: 'Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page'
          };

          let data = [];
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              response.data.data.main.stream.map((item, index) => {      
                let article = {
                    id: item.content.id,
                    title: item.content.title,
                    provider: item.content.provider.displayName,
                    date: item.content.pubDate,
                    thumbnail: ""  
                } 
               if (item.content.thumbnail !== null) {
                 article.thumbnail = item.content.thumbnail.resolutions[0].url;
               }  
                data.push(article);        
              });  
            //   console.log(data);
              setArticles(data);          
              console.log(articles);
          }).catch(function (error) {
              console.error(error);
          });
      };

      const showNews = () => {    
        for (let i = 0; i < 3; i++) {
          let article = articles[i];
          return <News key={i} article={article}></News>
        }  
      };

    // useEffect(() => {   
    //     getNews();
    //   }, []);

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
        gr: graph,
        title: "Test"
      },
      {
        // graph: getRandomStock(),
        gr: graph,
        title: "HEJ"
      },
      {
        // graph: getRandomStock(),
        gr: graph,
        title: "Ye"
      }];

    return (  
        <div className="Login">   

          <section className="">
            <h2 className="text-light my-5"><span className="yellow">StockNoob</span> - an application for simulating the stock market</h2>          
            
            <div className="w-100 d-flex justify-content-center text-light">   
              <div className="d-flex flex-column align-items-center w-25 mx-5">
                <h5 className="yellow">Learn about stocks</h5>
                <p className="text-left">
                  Many people are no familiar with hot the stock market works and is therfore afraid of trying it out.
                  This app is for those people. The aim of this app is to give people the courage to try the real stock market.
                  All of the stock rates in this app are real but none of the money are. So feel free to buy whatever stock you want
                  but remember that the real stock market is not as forgiving as this app.
                </p>
                <button className="register-btn">Register</button>
                <p className="second-login">Redan kund? Logga in</p>
              </div>
              <img src={Image} className="mx-5"></img>
            </div> 

            <div className="d-flex justify-content-center">
              <hr className="divider my-5"/>
            </div>
          </section>

          <section className="">
           <h2 className="text-light mb-3">Why to use StockNoob?</h2>

            <div className="w-100 row text-light my-4 text-lg p-3">   
              {strengths.map((strength) => (
                <div className="col d-flex flex-column align-items-center">        
                  <FontAwesomeIcon className="icon fa-5x mb-3 yellow" icon={strength.icon} />
                  <h5>{strength.text}</h5>
                </div>
              ))}
            </div> 
          </section>

          {/* <div className="d-flex justify-content-center">
            <hr className="divider m-2"/>
          </div> */}

          <div className="d-flex justify-content-center">
            <hr className="divider my-4"/>
          </div>

          <section className="">
            <h2 className="text-light">Today's stocks</h2>

            {/* <div className="d-flex justify-content-around m-3 text-light">
              {stocks.map((stock) => (
                <div className="">
                  <h6>{stock.title}</h6>
                  <Line className="line-chart" data={stock.gr}/>
                </div> 
              ))}           
            </div>    */}

            <div className="d-flex justify-content-around my-5 mx-3 text-light">
              <div className="col">
                <h6>{title}</h6>
                <Line className="line-chart" data={graph}/>
              </div> 
              <div className="col">
              <h6>{title}</h6>
                <Line className="line-chart" data={graph}/>
              </div> 
              <div className="col">
                <h6>{title}</h6>
                <Line className="line-chart" data={graph}/>
              </div> 
            </div> 
          </section>

          <div className="d-flex justify-content-center">
            <hr className="divider my-4"/>
          </div>          

          <h2 className="text-light">News</h2>        
          <div className="d-flex">          
          {/* <Carousel>
            {showNews()}  
          </Carousel> */}
          </div>                       
        </div>
    )
}
