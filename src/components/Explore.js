import React, { useState, useEffect } from 'react'
import "./Explore.css";
import Popup from 'reactjs-popup';

import {Line} from 'react-chartjs-2'
import {  faArrowAltCircleUp, faMoneyBill, faMoneyCheck, faClock, faArrowDown, faArrowUp, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import history from './History'

export default function Explore(prop) {

    const [stockGraph, setStockGraph] = useState();
    var [price, setPrice] = useState(Number);
    var [latest, setLatest] = useState(Number);
    var [low, setLow] = useState(Number);
    var [high, setHigh] = useState(Number);
    var [growth, setGrowth] = useState(Number);
    var [timespan, setTimespan] = useState(10);
    var [period, setPeriod] = useState("/Day");
    var [buyInput, setBuyInput] = useState(Number);
    var [buyPrice, setBuyPrice] = useState(Number);
    let days = ["","15:00","", "17:00","","19:00", "","21:00","" ,"23:00"]
    let weeks = ["","","","","Mon","","","","", "Tue","","","","", "Wed","","","","", "Thu","","","","", "Fri"]
    let Months = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","",
                        "","","","","","","","","","","","","","","","","","","","","","","","",""
                    ,"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
                    "","","","","","","","","","","","","","","","", ""]
    let daysData = [342, 343, 345, 339, 340, 341, 339, 340, 339, 342]                
    var [xAxis, setXAxis] = useState(days);
    var [stockSymbol, setStockSymbol] = useState("");
    var [money, setMoney] = useState(4000);
    var [holdings, setHoldings] = useState(5000);
    var [stocks, setStocks] = useState(10);

    var [user, setUser] = useState({
        Login_ID: Number,
        Username: "",
        Password: "",
        User_ID: Number,
        User_Login_ID: Number,
        Mail: "",
        Money: Number,
        Holdings: Number,
        Goal: Number,
        GoalItem: Number,
        SavingMonth: Number,
        Token: ""
    });

    var [buyState, setBuyState] = useState({
        HS_User_ID: 0,
        HS_Stock_ID: 0,
        HS_Price: 0,
        HS_Amount: 0,
        Stock_Name: "",
        Stock_Shortening: ""
    });

    const getApiData = () => { 
        console.log("körs");
        let labels = [];
        let data = [];   
        let label = "";
        const axios = require('axios');
        const params = {
            access_key: '77c171bec68a191781a8e08d026779d7'
        }
        console.log(buyState.Stock_Shortening);
        axios.get(`http://api.marketstack.com/v1/tickers/${buyState.Stock_Shortening}/intraday`, {params})
          .then(response => {
              console.log("KDKDKDKDKDKDKDKDKDKDKKDKDKDKDKDKDKDKDKDKDKDKKDKDKDKDKDKD");
            const apiResponse = response.data;
            console.log(apiResponse);
            var count = 0;         
            for(let i = 0; i < timespan; i++) {
                let dataAPI = apiResponse.data.intraday[i];
                label = dataAPI.symbol;
                labels.push(dataAPI.date);
                data.push(parseInt(dataAPI.open));
                console.log(parseInt(dataAPI.open))
                count = count +1;
            } 
            console.log(count);
            console.log(timespan)
            setGrowth(((data[timespan -1]) - 400)/data[timespan -1])
            setPrice(data[timespan -1]);
            setLatest(data[timespan -1]);
            setHigh(Math.max(...data));
            setLow(Math.min(...data));
            setPrice(data[timespan -1]);
            /* console.log(data);
            console.log(low);
            console.log(high);
            console.log(growth);
            console.log(price);
            console.log(latest); */
                
            setStockGraph({
                labels: xAxis,
                datasets: [
                  {
                    label: label + period,
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

      const Day = () => {
        setTimespan(10);
        setPeriod("/Day");
        setXAxis(days);
        getApiData();
      }
      const Week = () => {
        setTimespan(25);
        setPeriod("/Week");
        setXAxis(weeks);
        getApiData();
        
      }
      const Month = () => {
        setTimespan(100);
        setPeriod("/Month");
        setXAxis(Months);
        getApiData();
      }
      
      const changeSymbol = (event) =>{
        setStockSymbol("TSLA");
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
        console.log("buying");
        
        if(user.Money >= buyPrice)
        {
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
        }else{
            alert("Not enough Cash for this")
        }
    }

    var handleBuy = (e) => {
       e.preventDefault();
       setBuyInput(e.target.value);
       var kostnad = price * buyInput
    //    console.log( buyState.HS_Price + " " + buyInput + " " + kostnad);
       setBuyPrice(price * buyInput);
        setBuyState({
        
        HS_Price: buyPrice,
        HS_Amount: buyInput,
        
        }); 
        console.log("user", buyState.HS_User_ID)
    //    console.log(buyInput)
        console.log(buyPrice)
    }

    const goBack = () => {    
        const path = "/Overview";
            history.push({
            pathname: path,
            state: { 
                user: user
            }
        })  
    };

       useEffect(() => {
           
            const {user} = prop.location.state;
            const {stock} = prop.location.state;
            console.log("EXPLORE");
            console.log(user);
            console.log(stock);
            setUser(user)
            setStockSymbol(stock.Stock_Name);
            setBuyState({               
                HS_Price: 0,
                HS_Amount: 0,
                HS_User_ID: user.User_ID,
                HS_Stock_ID: stock.HS_Stock_ID,
                Stock_Name: stock.Stock_Name,
                Stock_Shortening: stock.Stock_Shortening
                });
            //setPrice(stock.HS_Price);
            setPrice(200);
            /*setUser({
            Login_ID: user.LoginID,
            Username: user.Username,
            Password: "1234",
            User_ID: user.UserID,
            User_Login_ID: user.LoginID,
            Mail: "malu@mail.se",
            Money: user.Money,
            Holdings: user.Holdings,
            Goal: user.Goal,
            GoalItem: user.GoalItem,
            SavingMonth: user.SavingMonth,
            Token: user.Token
         });*/
         console.log(user.LoginID)
         console.log(buyState)
        getApiData();
      }, []); 
    return (
        <div className="explore">
            <div className="container">
                <div className="top">
                <div className="topInfo">
                        <div>
                        Username: <span>{user.Username}</span>
                        </div>
                        <div>
                        Balance: <span>{user.Money}</span>
                        </div>
                        
                        <div>
                        Owning: <span>You own 8</span>
                        </div>
                     
                    </div>
                    <h1><FontAwesomeIcon className="back" icon={faArrowLeft} onClick={goBack}/> {stockSymbol}</h1>
                    
                </div>
                <div className="mid">
                    <div className="mid-left">
                        <p>About the stock</p>
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
                    <div className="mid-mid">
                        <p>Tips and tricks</p>
                        <div className="mid-mid-container">
                        <div className="tips">
                            <p>Tips 1</p>
                            Having a hard time timing the market? Try dollar-cost averaging. Dollar-cost averaging (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. The purchases occur regardless of the asset's price and at regular intervals. In effect, this strategy removes much of the detailed work of attempting to time the market in order to make purchases of equities at the best prices. Remember that time in the market beats timing the market.
                        </div>
                        <div className="tips2">
                            <p>Tips 2</p>
                            Are you panicing when a stock drops a few percent? If you have done your research about the company and nothing of the fundamentals have changed then why worry? Being invested in the stock market is a psycological game where you as an investor gets tested every now and then. Keep in mind that if the fundamentals of the company is still good and you still panic you probably have too much money invested. Then it can be good to diverse your money between more different type of industries to minimalize the risk of losing money when one industry drops.
                        </div>
                        </div>
                    </div>
                    <div className="mid-right">
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faArrowAltCircleUp} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Growth/D
                                </div>
                                <div className="info-right-bottom money">
                                    {growth.toFixed(2) * 1}%
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faMoneyBill} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Buy
                                </div>
                                <div className="info-right-bottom">
                                    {price} USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faMoneyCheck} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Sell
                                </div>
                                <div className="info-right-bottom">
                                    {latest} USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faClock} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Latest
                                </div>
                                <div className="info-right-bottom">
                                    {latest} USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faArrowUp} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    High
                                </div>
                                <div className="info-right-bottom">
                                    {high} USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faArrowDown} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Low
                                </div>
                                <div className="info-right-bottom">
                                    {low} USD
                                </div>
                            </div>

                        </div>
                        <div className="actions">
                            
                            <Popup
                            className="popup"
                            trigger={<button className="buy">Buy</button>}
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
                                    <h5 className="header">Purchase</h5>
                                    <div className="buy-details">
                                        
                                        <div className="input">
                                            <p>Current cash: {user.Money}</p>
                                            <p>Price: {buyState.HS_Price * buyInput}</p>
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
                                            <p>Stocks to sell: {stocks}</p>
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
                <div className="bot">
                        <div className="bot-container">
                            <div className="bot-box">
                                <div className="bot-box-container">
                                    <p>Recommended stocks</p>
                                    <div className="stocks">
                                        <div className="stocks-left">
                                            TSLA
                                        </div>
                                        <div className="stocks-mid">
                                            343,5 USD
                                        </div>
                                        <div className="stocks-right">
                                            +4,4% Today
                                        </div>
                                        <div className="stocks-actions">
                                            <button className="go" onClick={changeSymbol}>Go to</button>
                                        </div>
                                    </div>
                                    <div className="stocks">
                                        <div className="stocks-left">
                                            TXN
                                        </div>
                                        <div className="stocks-mid">
                                            22,5 USD
                                        </div>
                                        <div className="stocks-right">
                                            -2,3% Today
                                        </div>
                                        <div className="stocks-actions">
                                            <button className="go" onClick={changeSymbol}>Go to</button>
                                        </div>
                                    </div>
                                    <div className="stocks">
                                        <div className="stocks-left">
                                            XOM
                                        </div>
                                        <div className="stocks-mid">
                                            225 USD
                                        </div>
                                        <div className="stocks-right">
                                            +8% Today
                                        </div>
                                        <div className="stocks-actions">
                                            <button className="go" onClick={changeSymbol}>Go to</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>       
                </div>
            </div>
        </div>
    )
}
