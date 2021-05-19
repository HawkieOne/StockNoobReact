import React from 'react'
import "./Explore.css";

import {Line} from 'react-chartjs-2'
import {  faArrowAltCircleUp, faMoneyBill, faMoneyCheck, faClock, faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Explore() {
    return (
        <div className="explore">
            <div className="container">
                <div className="top">
                    <h1>TSLA</h1>
                </div>
                <div className="mid">
                    <div className="mid-left">
                        <p>About the stock</p>
                        <Line className="line-chart"
                        data={{
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            datasets: [{
                                label: 'TSLA',
                                data: [8, 9, 7, 9, 12, 14, 19],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1,
                                fill: false,
                                pointRadius: 0,
                            }, {
                                label: 'PYPL',
                                data: [10, 12, 8, 6, 13, 15, 18],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1,
                                fill: false,
                                pointRadius: 0,
                            }]
                            
                        }}
                        
                        />
                        <div className="mid-left-bottom">
                            <button>10 Day</button>
                            <button>1 Day</button>
                            <button>1 Week</button>
                        </div>
                    </div>
                    <div className="mid-mid">
                        <p>About the company</p>
                        <div className="mid-mid-container">
                        <div className="tips">
                            <p>Tips 1</p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className="tips2">
                            <p>Tips 2</p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        </div>
                    </div>
                    <div className="mid-right">
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faArrowAltCircleUp} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Growth/D
                                </div>
                                <div className="info-right-bottom money">
                                    4.4%
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faMoneyBill} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Buy
                                </div>
                                <div className="info-right-bottom">
                                    22.5 USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faMoneyCheck} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Sell
                                </div>
                                <div className="info-right-bottom">
                                    22.5 USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faClock} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Latest
                                </div>
                                <div className="info-right-bottom">
                                    22.5 USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faArrowUp} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    High
                                </div>
                                <div className="info-right-bottom">
                                    32.2 USD
                                </div>
                            </div>

                        </div>
                        <div className="info">
                            <div className="info-left">
                                <FontAwesomeIcon className="mail" icon={faArrowDown} />

                            </div>
                            <div className="info-right">
                                <div className="info-right-top">
                                    Low
                                </div>
                                <div className="info-right-bottom">
                                    21.2 USD
                                </div>
                            </div>

                        </div>
                        <div className="actions">
                            <button className="buy"> Buy </button>
                            <button className="sell"> Sell </button>
                        </div>
                    </div>
                </div>
                <div className="bot">
                        <div className="bot-container">
                            <div className="bot-box">
                                <div className="bot-box-container">
                                    <p>Recommended stocks</p>
                                    <div className="stocks">
                                        <div className="stocks-left">
                                            TSLA
                                        </div>
                                        <div className="stocks-mid">
                                            343,5 USD
                                        </div>
                                        <div className="stocks-right">
                                            +4,4% Today
                                        </div>
                                        <div className="stocks-actions">
                                            <button className="go">Go to</button>
                                        </div>
                                    </div>
                                    <div className="stocks">
                                        <div className="stocks-left">
                                            TXN
                                        </div>
                                        <div className="stocks-mid">
                                            22,5 USD
                                        </div>
                                        <div className="stocks-right">
                                            -2,3% Today
                                        </div>
                                        <div className="stocks-actions">
                                            <button className="go">Go to</button>
                                        </div>
                                    </div>
                                    <div className="stocks">
                                        <div className="stocks-left">
                                            XOM
                                        </div>
                                        <div className="stocks-mid">
                                            225 USD
                                        </div>
                                        <div className="stocks-right">
                                            +8% Today
                                        </div>
                                        <div className="stocks-actions">
                                            <button className="go">Go to</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>       
                </div>
            </div>
        </div>
    )
}
