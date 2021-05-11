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
                       <div className="item">
                           <p>Amazon (AMZN)</p>
                           <p>Day: +2.3%</p>
                           <p>Year: +5.5%</p>
                       </div>
                    </div>

                    <div className="w-75 stockItem">
                        <div className="item">
                           <p>Facebook (FB)</p>
                           <p>Day: -12.3%</p>
                           <p>Year: +25.5%</p>
                        </div>
                    </div>

                    <div className="w-75 stockItem">
                        <div className="item">
                           <p>Google (Gole)</p>
                           <p>Day: +2.3%</p>
                           <p>Year: +5.5%</p>
                        </div>
                    </div>

                    <div className=" w-75 stockItem">
                        <div className="item">
                           <p>Apple (AP)</p>
                           <p>Day: +2.3%</p>
                           <p>Year: +7.5%</p>
                        </div>                   
                    </div>

                    <div className=" w-75 stockItem">
                        <div className="item">
                           <p>Activision (WZ)</p>
                           <p>Day: -20.3%</p>
                           <p>Year: +50.5%</p>
                        </div>
                    </div>

                    <div className=" w-75 stockItem">
                        <div className="item">
                           <p>Sony (PS5)</p>
                           <p>Day: +20.1%</p>
                           <p>Year: +115.5%</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Stock
