import React from 'react'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"
import './TranscationItem.css'

function TranscationItem(props) {
    
    return (
        <>
            <div>
                <div className="w-75 trscItem">
                    <div className="row">
                        <div className="col Tr_itemShare">
                            {props.type ===  'BUY' ?
                                <FaArrowUp size="2.5em" color="green"/> 
                                :
                                <FaArrowDown size="2.5em" color="red"/> 
                            }                                                        
                        </div>
                        <div className="col-4 d-flex">
                            <p className="yellow">Name: </p>
                            <p className="ml-3">{props.name}</p>
                        </div>      
                        <div className="col d-flex">
                            <p className="yellow">Shares: </p>
                            <p className="ml-3">{props.shares}</p>
                        </div>        
                        <div className="col d-flex">
                            <p className="yellow">Price: </p>
                            <p className="ml-3">{props.price}</p>
                        </div>
                        <div className="col d-flex">
                            <p className="yellow">Date: </p>
                            <p className="ml-3">{new Date(props.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default TranscationItem
