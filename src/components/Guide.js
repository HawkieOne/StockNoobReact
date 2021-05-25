import React from 'react'
import './Guide.css'

function Guide() {
    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning">Guide</h2>
                    <hr className="w-75 hr-tag"></hr>
                    <div className="container">
                        <div className="part">
                            <h4>Do you want to learn about the stock market?</h4>
                            <p>Our platform is targeting that group. StockNoob is all about letting new small investors to get a feel for the market before joining the big leagues.</p>
                        </div>

                        <div className="part">
                            <h4>About StockNoob</h4>
                            <p>StockNoob is made for beginners in the stock market who wants to simulate the market with fake money before trying it for real. StockNoob is made by a group of students that are interested in stocks.</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="part">
                            <h4>How to begin?</h4>
                            <p>It should not be hard to begin investing. Simply just register an account then explore the market for companies and invest in those you like and believe has a good future ahead of them.</p>
                        </div>

                        <div className="part">
                            <h4>Good Luck!</h4>
                            <p>We on StockNoob wishes happiness and success upon you. We also want to wish you good luck in your future investments.</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="w-50 part">
                            <h4>Tips</h4>
                            <p>Having a hard time timing the market? Try dollar-cost averaging. Dollar-cost averaging (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. The purchases occur regardless of the asset's price and at regular intervals. In effect, this strategy removes much of the detailed work of attempting to time the market in order to make purchases of equities at the best prices. Remember that time in the market beats timing the market.</p>
                        </div>
                    </div>
                        
                </div>
                
            </div>
        </>
    )
}

export default Guide
