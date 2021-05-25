import React, {useState, useEffect} from 'react'
import TranscationItem from  './TranscationItem';
import './TransactionList.css'
import {  faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import history from './History'


export default function TransactionList(prop) {

    var [user, setUser] = useState(null);
    var [transactions, setTransactions] = useState(null);
    var [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const {user} = prop.location.state;
        console.log("TRANSACTIONS");
        console.log(user);
        setUser(user)},[]);

    useEffect(() => {  
        if (user !== null) {
            const axios = require('axios');       
            var options = {
            method: 'PUT',
            url: `https://stocknoob.azurewebsites.net/stock/transactions/${user.UserID}`,
            headers: { authorization: 'Bearer ' + user.Token},
            data: 2
            };
            
            let array = [];

            axios.request(options).then(function (response) {
            const apiResponse = response.data;
            console.log(apiResponse);
            apiResponse.map((trsc, index) => {
                array.push(trsc);
            });
            setTransactions(array);
            }).catch(function (error) {
            console.error(error);
            });
        }}, [user]);

    useEffect(() => {  
        if (transactions !== null) {
            setLoaded(true);
        }}, [transactions]);

    const goBack = () => {    
        const path = "/Overview";
            history.push({
            pathname: path,
            state: { 
                user: user
            }
        })  
    };

    return (
        <>
            <div className="mb-5">
                <div>
                    <div className="position-relative">
                        <h2 className="mt-5 text-warning">Transactions</h2>
                        <FontAwesomeIcon className="icon fa-lg yellow backArrow" icon={faArrowLeft} onClick={goBack}/>
                    </div>                    
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Buy</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">Sell</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                        <label class="form-check-label" for="inlineRadio3">Old</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
                        <label class="form-check-label" for="inlineRadio4">New</label>
                    </div>
                </div>
                <hr className="w-75 hrTag"></hr>
                {loaded ?
                    transactions.map((trsc, i) => (
                        <TranscationItem 
                            key={i} 
                            shares={trsc.Trsc_Amount} 
                            price={trsc.Trsc_Price} 
                            date={trsc.Trsc_Date} 
                            type={trsc.Trsc_Type}
                            name={trsc.Trsc_Name}
                        />
                    ))
                    :
                    <h1 className="yellow">Loading...</h1>
                }
            </div>
        </> 
    )
}
