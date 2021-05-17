import React from 'react'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"
import './TranscationItem.css'

function TranscationItem(props) {
    
    return (
        <>
            <div>
                <div className="w-75 transc_Item">
                    <div className="Tr_item">
                        <div className="Tr_itemShare">
                            <FaArrowUp size="2.5em" color="green"/> 
                            <p>{props.shares} Shares</p>
                        </div>
                        <p>{props.name}</p>
                        <p>{props.date}</p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default TranscationItem
