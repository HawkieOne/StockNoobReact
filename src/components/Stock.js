import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Stock.css'


function Stock() {
    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning" >Stocks</h2>
                </div>
                <hr className="w-75 hrTag"></hr>
                <div className="stockList">
                    <div className="w-75 stockItem">
                    Item 1
                       <div className="item">
                           
                           {/* <p>Amazon (AMZN)</p>
                           <p>Day: <p>+2.3%</p></p>
                           <p>Year: <p>+4.9%</p></p> */}

                       </div>
                    </div>

                    <div className="w-75 stockItem">
                    Item 2
                    </div>

                    <div className="w-75 stockItem">
                    Item 3
                    </div>

                    <div className=" w-75 stockItem">
                    Item 4
                    </div>

                    <div className=" w-75 stockItem">
                    Item 5
                    </div>

                    <div className=" w-75 stockItem">
                    Item 6
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stock
