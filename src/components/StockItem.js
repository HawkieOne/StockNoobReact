import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './StockItem.css'


function StockItem(props) {
    return (
        <>
            <div>
                <div className="w-75 stockItem">
                    <div className="item">
                        <p>{props.name} ({props.symbol})</p>
                        <p>Day:{props.day}%</p>
                        <p>Year: {props.year}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StockItem
