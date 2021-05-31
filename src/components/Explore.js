import React, { useState, useEffect } from 'react'
import "./Explore.css";
import Popup from 'reactjs-popup';
import {Line} from 'react-chartjs-2'
import {  faArrowAltCircleUp, faMoneyBill, faMoneyCheck, faClock, faArrowDown, faArrowUp, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import history from './History'

export default function Explore(prop) {

    let days = ["","15:00","", "17:00","","19:00", "","21:00","" ,"23:00"]
    let weeks = ["","","","","Mon","","","","", "Tue","","","","", "Wed","","","","", "Thu","","","","", "Fri"]
    let Months = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","",
                        "","","","","","","","","","","","","","","","","","","","","","","","",""
                    ,"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
                    "","","","","","","","","","","","","","","","", ""]

    const [stockGraph, setStockGraph] = useState();
    var [stock, setStock] = useState(null);   
    var [graphInfo, setGraphInfo] = useState({
        timespan: 10,
        period: "/Day",   
        xAxis: days
    });   
    var [buyInput, setBuyInput] = useState(Number);                 

    var [user, setUser] = useState(null);
    var [buyState, setBuyState] = useState(null);
    const [loaded, setLoaded] = useState(false); 

    const getApiData = () => { 
        let labels = [];
        let data = [];   
        let label = "";
        const axios = require('axios');
        const params = {
            access_key: '77c171bec68a191781a8e08d026779d7'
        }
        axios.get(`http://api.marketstack.com/v1/tickers/${buyState.Stock_Shortening}/intraday`, {params})
          .then(response => {              
            const apiResponse = response.data;
            console.log(apiResponse);
            var count = 0;         
            const timespan = graphInfo.timespan;
            for(let i = 0; i < timespan; i++) {
                let dataAPI = apiResponse.data.intraday[i];
                label = dataAPI.symbol;
                labels.push(dataAPI.date);
                data.push(parseInt(dataAPI.open));
                count = count +1;
            } 

            setStock({
                ...stock,                 
                price: data[graphInfo.timespan -1],
                latest: data[timespan -1],
                low: Math.min(...data),
                high: Math.max(...data),                
                growth: (((data[timespan -1])/data[0]) - 1).toFixed(3),   
            });
                
            setStockGraph({
                labels: graphInfo.xAxis,
                datasets: [
                  {
                    label: label + graphInfo.period,
                    data: data,
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],         
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

      const Day = () => {
        setGraphInfo({
            timespan: 10,
            period: "/Day",
            xAxis: days
        })
        getApiData();
      }

      const Week = () => {
        setGraphInfo({
            timespan: 25,
            period: "/Week",
            xAxis: weeks
        })
        getApiData();
      }

      const Month = () => {
        setGraphInfo({
            timespan: 100,
            period: "/Month",
            xAxis: Months
        })
        getApiData();
      }
      
      const changeSymbol = (stock) =>{
        setStock({
            ...stock,
            name: stock.name
        })
        // setBuystate
        getApiData();
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

    //Funktion för att sälja aktier, ska uppdatera databasen
    const sellStock = (e) =>{
        e.preventDefault();
        console.log("sale");
        const axios = require('axios');
        var sell = {
        method: 'POST',
        url: 'https://stocknoob.azurewebsites.net/stock/sell',
        data: buyState,
        headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxODU2NzU1LCJleHAiOjE2MjE5NDMxNTUsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.a3U6rp2OeetV2R2aPid4tw9fKCPZv2rwGpQkG_WGM-dMKrhHKtLZ7ejg-UjdO11a8XG-pB9UxiXeEX2gde3POpiDaq-4WCwkQsUIk3EsgDBhpmmOHDPMlgmH0SUlllwUDhcRFRhVkGnLWZ9iYVQH_Z4f01EvZNTb_v_EXypGiP-3wtaChwgC8B88YLYnPfkSqaQ6il6Q6occpmXFOnHtQhviv9-qkxk41BFHUphWpb5N19tw1UvRAAdQIO9NmyVEw5EZNByxRHydWXIavO9sBpUwmTKd_KfarS-CZR8b1u5Pk-joau0l-Sg8941etgWNovLlEC7dnWk_AY4c4u1Xuw'}
    }
    
    axios.request(sell).then(function(response){
        console.log(response)
        
        
    });
    }

    //Funktion för att köpa aktier, ska uppdatera databasen
    const buyStock = (e) =>{
        e.preventDefault();
        console.log("BUYING");
        
        if(user.Money >= stock.latest) {
            const axios = require('axios');
            var buy = {
                method: 'POST',
                //params: buyState,
                url: 'https://stocknoob.azurewebsites.net/stock/buy',
                data: buyState,
                headers: { authorization: 'Bearer ' + user.Token}
            }

            axios.request(buy).then(function(response){
                console.log(response)
            });
        } else{
            alert("Balance too low!")
        }
    }

    var handleBuy = (e) => {
        e.preventDefault();
        setBuyInput();
        var cost = stock.latest * e.target.value;
        setBuyState({        
            HS_Price: stock.latest * e.target.value,
            HS_Amount: e.target.value        
        }); 
    }

    const goBack = () => {    
        history.goBack();   
    };
 
    const getAmountUsed = (symbol) => {
        const axios = require('axios');       
            var options = {
                method: 'GET',
                url: `https://stocknoob.azurewebsites.net/stock/amountStock/${user.UserID}`,
                headers: { authorization: 'Bearer ' + user.Token},
                data: symbol
            };

            axios.request(options).then(function (response) {
                const apiResponse = response.data;
                console.log("OWNED" + apiResponse);            
                setStock({                    
                    ...stock,     
                    amountOwned: apiResponse                 
                })
            }).catch(function (error) {
                console.error(error);
            });
    }

    useEffect(() => {        
        const {user} = prop.location.state;
        const {stock} = prop.location.state;
        console.log("EXPLORE");
        console.log(user);
        console.log(stock);
        setUser(user)
        setStock({
            name: stock.Stock_Name,
            symbol: stock.Stock_Shortening,          
            amountOwned: "",
            price: "",
            buyPrice: "",
            latest: "",
            low: "",
            high: "",
            growth: Number,   
        })
        setBuyState({            
            HS_Price: 0,
            HS_Amount: 0,
            HS_User_ID: user.User_ID,
            HS_Stock_ID: stock.HS_Stock_ID,
            Stock_Name: stock.Stock_Name,
            Stock_Shortening: stock.Stock_Shortening
        }); 
        
    }, []);

    useEffect(() => {   
        if (buyState !== null) {
            getAmountUsed(stock.symbol);
            getApiData();
        }               
    }, [buyState]);

    useEffect(() => {   
        if (stock !== null) {
            console.log(stock);
            setLoaded(true);       
        }               
    }, [stock]);

    const recStocks = [{
        name: "TSLA",
        cost: 343.5,
        change: "+4.4%"
    }, {
        name: "TXN",
        cost: 22.5,
        change: "-2.3%"
    }, {
        name: "XOM",
        cost: 230,
        change: "+8%"
    }]

    var stockInfo = []

    if (loaded) {
        stockInfo = [{
            icon: faClock,
            text: "Latest",
            value: stock.latest
        },{
            icon: faArrowUp,
            text: "Highest",
            value: stock.high
        },{
            icon: faArrowDown,
            text: "Lowest",
            value: stock.low
        }];
    }

    const tips = [{
        text: " Having a hard time timing the market? Try dollar-cost averaging. Dollar-cost averaging (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. The purchases occur regardless of the asset's price and at regular intervals. In effect, this strategy removes much of the detailed work of attempting to time the market in order to make purchases of equities at the best prices. Remember that time in the market beats timing the market."
    }, {
        text: " Are you panicing when a stock drops a few percent? If you have done your research about the company and nothing of the fundamentals have changed then why worry? Being invested in the stock market is a psycological game where you as an investor gets tested every now and then. Keep in mind that if the fundamentals of the company is still good and you still panic you probably have too much money invested. Then it can be good to diverse your money between more different type of industries to minimalize the risk of losing money when one industry drops."
    }]

    return (
        <div className="explore ">        
            {loaded ?
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column align-items-center my-3 yellow">
                            <div className="topInfo">
                                    <div>
                                        Username: <span>{user.Username}</span>
                                    </div>
                                    <div>
                                        Balance: <span>{user.Money}</span>
                                    </div>                                    
                                    <div>
                                        Owning: <span>You own {stock.amountOwned}</span>
                                    </div>                                
                            </div>
                            <div className="w-75 d-flex justify-content-start align-items-center mt-2">
                                <FontAwesomeIcon className="fa-lg mr-auto cursor" icon={faArrowLeft} onClick={goBack}/>
                                <h1 className="mr-auto"> {stock.name}</h1> 
                            </div>                                                             
                        </div>

                        <div className="d-flex justify-content-around mx-4">
                            <div className="d-flex flex-column align-items-center">
                                <div className="w-75">                                 
                                    <Line className="line-chart"                
                                    data={stockGraph}  
                                    width={400}
                                    height={200}             
                                    />
                                    <div className="mid-left-bottom">
                                        <button onClick={Day}>Day</button>
                                        <button onClick={Week}>Week</button>
                                        <button onClick={Month}>Month</button>
                                    </div>
                                </div>

                                <div className="mid-mid w-100 m-3">
                                    <h5 className="yellow">Tips and tricks</h5>
                                    <div className="d-flex justify-content-around text-light">
                                        {tips.map((tip, index) => (
                                            <div className="tip text-left mx-3">
                                                <h6 className="text-center yellow">Tip {index + 1}</h6>
                                                {tip.text}
                                            </div>
                                        ))}                                 
                                    </div>
                                </div>
                            </div>        

                            <div className="mid-right w-100 text-light p-3">
                                <h5 className="yellow">Info</h5>
                                <div className="d-flex justify-content-center">
                                    <hr className="divider mt-1 mb-3"/>
                                </div>
                                <div className="row">
                                    <div className="col-4 icon yellow">
                                        <FontAwesomeIcon className="mail" icon={faArrowAltCircleUp} />
                                    </div>
                                    <div className="col d-flex flex-column align-items-center">
                                        <div className="yellow">
                                            Growth
                                        </div>
                                        {parseInt(stock.growth) >= 0 ?
                                            <div className="money">
                                                {stock.growth}%
                                            </div>
                                            :
                                            <div className="red">
                                                {stock.growth}%
                                            </div>
                                        }                                        
                                    </div>
                                </div>

                                {stockInfo.map((info, index) => (
                                    <div key={index} className="row">
                                        <div className="col-4 icon yellow">
                                            <FontAwesomeIcon className="mail" icon={info.icon} />                
                                        </div>
                                        <div className="col d-flex flex-column align-items-center">
                                            <div className=" yellow">
                                                {info.text}
                                            </div>
                                            <div className="bottom">
                                                {info.value} USD
                                            </div>
                                        </div>                
                                    </div>
                                ))}  

                                <div className="actions">
                                    
                                    <Popup
                                    className="popup"
                                    trigger={<button className="buy">Buy</button>}
                                    position="bottom"
                                    closeOnDocumentClick
                                    contentStyle={{ padding: '0px', border: 'none' }}
                                    arrow={false}
                                    
                                    >        
                                    {close => (         
                                        <div className="box">
                                            <button className="closeModal" onClick={close}>
                                            &times;
                                            </button>
                                            <h5 className="header">Purchase</h5>
                                            <div className="buy-details">
                                                
                                                <div className="input">
                                                    <p>Current cash: {user.Money}</p>
                                                    <p>Price: {parseInt(buyState.HS_Price) * parseInt(buyInput)}</p>
                                                    <form onSubmit={buyStock}>
                                                    <label>Amount</label>
                                                    <input  type="number" required name="Amount" placeholder="nr of stocks" value={buyInput} onChange={handleBuy}></input> 
                                                    <button className="btn-purchase" type="submit">Continue</button>  
                                                    </form> 
                                                </div>
                                            </div>  
                                        </div>
                                    )}
                                </Popup>
            
                                <Popup
                                    className="popup"
                                    trigger={<button className="sell">Sell</button>}
                                    position="top"
                                    closeOnDocumentClick
                                    contentStyle={{ padding: '0px', border: 'none' }}
                                    arrow={false}
                                    
                                    >        
                                    {close => (         
                                        <div className="box">
                                            <button className="closeModal" onClick={close}>
                                            &times;
                                            </button>
                                            <h5 className="header">Sell</h5>
                                            <div class="buy-details">
                                                
                                                <div className="input">
                                                    <p>Stocks to sell: {stock.amountOwned}</p>
                                                    <p>Price: {buyState.HS_Price * buyInput}</p>
                                                    <form onSubmit={sellStock}>
                                                    <label>Amount</label>
                                                    <input  type="number" required name="Amount" placeholder="nr of stocks" value={buyInput} onChange={handleBuy}></input>  
                                                    <button className="btn-purchase" type="submit">Continue</button>  
                                                    </form> 
                                                </div>
                                            </div>  
                                        </div>
                                    )}
                                </Popup>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5 mb-3">
                            <div className="w-50 d-flex flex-column text-light bottom py-2">
                                <h4 className="yellow">Recommended stocks</h4>
                                <div className="row my-1">
                                    <div className="col yellow font-weight-bold">
                                        Stock
                                    </div>
                                    <div className="col yellow font-weight-bold">
                                        Cost
                                    </div>
                                    <div className="col yellow font-weight-bold">
                                        Change
                                    </div>
                                    <div className="col yellow font-weight-bold">
                                        
                                    </div>
                                </div>
                                {recStocks.map((stock, index) => (
                                    <div key={index} className="row my-1">
                                        <div className="col yellow">
                                            {stock.name}
                                        </div>
                                        <div className="col">
                                            {stock.cost}
                                        </div>
                                        <div className="col">
                                            {stock.change}
                                        </div>
                                        <div className="col stocks-actions">
                                            <button className="go" onClick={() => changeSymbol(stock)}>Go to</button>
                                        </div>
                                    </div>
                                ))} 
                            </div>                                  
                        </div>

                    </div>
                    :
                    <h1 className="yellow">Loading...</h1>
                }
        </div>
    )
}
