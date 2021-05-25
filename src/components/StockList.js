import React, {useState, useEffect} from 'react';
import StockItem from '../components/StockItem.js';

export default function StockList(prop) {
    
    useEffect(() => {
        const {user} = prop.location.state;
        console.log("TRANSACTIONS");
        console.log(user);
        // setSearchVal(search);
    }, []);

    const stocks = [
        {name:"Facebook", symbol:"FCB", day:"2.3", year:"5.5"},
        {name:"Amazon", symbol:"AMZN", day:"6.7", year:"7.5"}
    ]

    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning">Stocks</h2>
                </div>
                <hr className="w-75 hrTag"></hr>
                {stocks.map((stock, i) => (
                    <StockItem name={stock.name} symbol={stock.symbol} day={stock.day} year={stock.year}/>
                ))}
            </div>
        </> 
    )
}
