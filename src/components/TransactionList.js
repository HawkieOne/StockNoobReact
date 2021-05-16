import React from 'react'
import TranscationItem from  './TranscationItem';


function TransactionList() {

    const transactions = [
        {shares: "12", name: "Facebook", date:"2021-03-19"},
        {shares: "7", name: "Tesla", date:"2021-01-19"},
        {shares: "8", name: "Amazon", date:"2021-05-09"},
        {shares: "9", name: "Google", date:"2021-11-19"},
        {shares: "6", name: "BNW", date:"2021-12-02"}
    ]
    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning">Transactions</h2>
                </div>
                <hr className="w-75 hrTag"></hr>
                {transactions.map((transactions, i) => (
                    <TranscationItem shares={transactions.shares} name={transactions.name} date={transactions.date}/>
                ))}
            </div>
        </> 
    )
}

export default TransactionList
