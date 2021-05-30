import React, {useState, useEffect} from 'react';
import StockItem from '../components/StockItem.js';
import {  faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './StockList.css'
import history from './History'

export default function StockList(prop) {
    
    var [user, setUser] = useState(null);
    var [stocks, setStocks] = useState(null);
    var [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log(prop.user);
        const user = prop.user;
        console.log("STOCKS");
        console.log(user);
        setUser(user)},[]);

    useEffect(() => {  
        if (user !== null) {
            const axios = require('axios');       
            var options = {
            method: 'GET',
            url: `https://stocknoob.azurewebsites.net/stock/userstock/${user.UserID}`,
            headers: { authorization: 'Bearer ' + user.Token},
            };
            
            let array = [];

            axios.request(options).then(function (response) {
            const apiResponse = response.data;
            console.log(apiResponse);
            apiResponse.map((stock, index) => {
                array.push(stock);
            });
            setStocks(array);
            }).catch(function (error) {
            console.error(error);
            });
        }}, [user]);

    useEffect(() => {  
        if (stocks !== null) {
            setLoaded(true);
        }}, [stocks]);
    
    const goBack = () => {    
        const path = "/Overview";
            history.push({
            pathname: path,
            state: { 
                user: user
            }
        })  
    };

    const pushExplore = (user, stock) => { 
        console.log(stock);
        const path = "/explore";
            history.push({
            pathname: path,
            state: { 
                user: user,
                stock: stock
            }
        })     
    };  

    return (
        <>
            <div className="mb-5">                             
                <div className="position-relative">
                    <h2 className="mt-2 yellow">Stocks</h2>
                    <FontAwesomeIcon className="icon fa-lg yellow backArrow" icon={faArrowLeft} onClick={goBack}/>
                </div>
                <hr className="w-75 hrTag"></hr>
                {loaded ?
                    stocks.map((stock, i) => (
                        <StockItem 
                            key={i} 
                            amount={stock.HS_Amount} 
                            name={stock.Stock_Name} 
                            symbol={stock.Stock_Shortening} 
                            price={stock.HS_Price}   
                            onClick={() => pushExplore(user, stock)} 
                        />
                    ))
                    :
                    <h1 className="yellow">Loading...</h1>
                }
            </div>
        </> 
    )
}
