import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './StockItem.css'


function StockItem(props) {
    return (
        <>
            <div>
                <div className="w-75 stockItem">
                    <div className="item row align-items-center">
                        <p className="col-8 text-left">{props.name} ({props.symbol})</p>
                        <p className="col">Day:{props.day}%</p>
                        <p className="col">Year: {props.year}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StockItem
