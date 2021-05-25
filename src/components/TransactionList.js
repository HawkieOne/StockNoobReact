import React, {useState, useEffect} from 'react'
import TranscationItem from  './TranscationItem';
import './TransactionList.css'


export default function TransactionList(prop) {

    useEffect(() => {
        const {user} = prop.location.state;
        console.log("TRANSACTIONS");
        console.log(user);
        // setSearchVal(search);
    }, []);

    const transactions = [
        {shares: "12", name: "Facebook", date:"2021-03-19"},
        {shares: "7", name: "Tesla", date:"2021-01-19"},
        {shares: "8", name: "Amazon", date:"2021-05-09"},
        {shares: "9", name: "Google", date:"2021-11-19"},
        {shares: "6", name: "BNW", date:"2021-12-02"},
        {shares: "16", name: "Redbull", date:"2021-03-02"}
    ]
    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning">Transactions</h2>
                    <div className="w-75 meny"> 
                        <div className="filterBy">
                            <p>Filter: </p>
                            <label class="container">Buy
                                <input type="radio" name="radioBuy"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Sell
                                <input type="radio" name="radioSell"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="sortedBy">
                            <p>Sort: </p>
                            <label class="container">Newest
                                <input type="radio" name="radioNew"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">Oldest
                                <input type="radio" name="radioOld"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <hr className="w-75 hrTag"></hr>
                {transactions.map((transactions, i) => (
                    <TranscationItem shares={transactions.shares} name={transactions.name} date={transactions.date}/>
                ))}
            </div>
        </> 
    )
}
