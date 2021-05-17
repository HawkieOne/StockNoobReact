import React, { useState } from 'react'
import './overview.css'


export default function Overview() {
    
    const [user, setUser] = useState({
        LoginID: "",
        Username: "",
        UserID: "",
        Mail: "",
        Money: "",
        Holdings: "",
        Goal: "",
        GoalItem: "",
        SavingMonth: "",
        Token: ","
    });
    
        return (
            <div className="grid-container">

                <div className="top-container">
                   
                        <div className="b1">
                            <button className="graphButtons">
                                
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="144.771" height="157.205" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                            </button>
                        </div>
                        <div className="b2">
                            <button className="graphButtons">
                                
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="144.771" height="157.205" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                            </button>
                        </div>
                        <div className="b3">
                            <button className="graphButtons">
                                
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="144.771" height="157.205" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                            </button>
                        </div>
                        <div className="b4">
                        <button className="graphButtons">
                                
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="144.771" height="157.205" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                            </button>
                        </div>
                 
                </div>
               
                    <div className="left-container">
                        <div className="personalButtons">
                            <div className="leftButtons">
                                <button className="leftholdingButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53.518" height="37.463" viewBox="0 0 47.402 33.885">
                                        <path id="Icon_awesome-chart-line" data-name="Icon awesome-chart-line" d="M45.921,32.737h-40V5.912A1.447,1.447,0,0,0,4.444,4.5H1.481A1.447,1.447,0,0,0,0,5.912V35.561a2.9,2.9,0,0,0,2.963,2.824H45.921A1.447,1.447,0,0,0,47.4,36.973V34.149A1.447,1.447,0,0,0,45.921,32.737ZM42.958,7.324H32.028a2.107,2.107,0,0,0-1.571,3.615l3,2.859-6.793,6.475L19.871,13.8a3.066,3.066,0,0,0-4.189,0L9.322,19.86a1.366,1.366,0,0,0,0,2l2.094,2a1.533,1.533,0,0,0,2.1,0l4.264-4.065,6.793,6.474a3.066,3.066,0,0,0,4.189,0l8.888-8.471,3,2.859a2.237,2.237,0,0,0,3.793-1.5V8.736A1.446,1.446,0,0,0,42.958,7.324Z" transform="translate(0 -4.5)" fill="#f2d658"/>
                                    </svg>
                                    <h4 className="text">Holdings</h4>
                                    
                                </button>
                                <button className="leftholdingButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53.518" height="37.463" viewBox="0 0 53.518 37.463">
                                        <path id="Icon_material-compare-arrows" data-name="Icon material-compare-arrows" d="M21.758,31.583H3v5.352H21.758v8.028l10.677-10.7-10.677-10.7v8.028Zm16-2.676V20.879H56.518V15.528H37.76V7.5L27.083,18.2Z" transform="translate(-3 -7.5)" fill="#f2d658"/>
                                    </svg>
                                    <h4 className="text">Transactions</h4>
                                    
                                </button>
                                <button className="leftholdingButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53.518" height="37.463" viewBox="0 0 85.199 56.799">
                                        <path id="Icon_awesome-newspaper" data-name="Icon awesome-newspaper" d="M81.649,4.5H13.016a3.55,3.55,0,0,0-3.55,3.55V9.233H3.55A3.55,3.55,0,0,0,0,12.783V53.016A8.283,8.283,0,0,0,8.283,61.3H78.1a7.1,7.1,0,0,0,7.1-7.1V8.05A3.55,3.55,0,0,0,81.649,4.5ZM8.283,54.2A1.183,1.183,0,0,1,7.1,53.016V16.333H9.467V53.016A1.183,1.183,0,0,1,8.283,54.2Zm34.908-2.367H20.708a1.775,1.775,0,0,1-1.775-1.775V48.874A1.775,1.775,0,0,1,20.708,47.1H43.191a1.775,1.775,0,0,1,1.775,1.775v1.183A1.775,1.775,0,0,1,43.191,51.833Zm30.766,0H51.474A1.775,1.775,0,0,1,49.7,50.058V48.874A1.775,1.775,0,0,1,51.474,47.1H73.957a1.775,1.775,0,0,1,1.775,1.775v1.183A1.775,1.775,0,0,1,73.957,51.833Zm-30.766-14.2H20.708a1.775,1.775,0,0,1-1.775-1.775V34.675A1.775,1.775,0,0,1,20.708,32.9H43.191a1.775,1.775,0,0,1,1.775,1.775v1.183A1.775,1.775,0,0,1,43.191,37.633Zm30.766,0H51.474A1.775,1.775,0,0,1,49.7,35.858V34.675A1.775,1.775,0,0,1,51.474,32.9H73.957a1.775,1.775,0,0,1,1.775,1.775v1.183A1.775,1.775,0,0,1,73.957,37.633Zm0-14.2H20.708a1.775,1.775,0,0,1-1.775-1.775V15.742a1.775,1.775,0,0,1,1.775-1.775H73.957a1.775,1.775,0,0,1,1.775,1.775v5.917A1.775,1.775,0,0,1,73.957,23.433Z" transform="translate(0 -4.5)" fill="#f2d658"/>
                                    </svg>

                                    <h4 className="text">Newsfeed</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                   
               
                
                    <div className="right-container">

                    <h3 className="t2">Your Holdings</h3>

                    <div className="personalButtons-left">
                    <button className="holdingButton" id="left1">
                    <div className="specificButton">
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="49.438" height="54.637" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="left2">
                        <div className="specificButton">
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="49.438" height="54.637" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="left3">
                        <div className="specificButton">
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="49.438" height="54.637" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                        </div>

                       
                    <div className="personalButtons-right">
                        <button className="holdingButton" id="right1">
                            <div className="specificButton">
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="49.438" height="54.637" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="right2">
                        <div className="specificButton">
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="49.438" height="54.637" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                        <button className="holdingButton" id="right3">
                        <div className="specificButton">
                                <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" width="49.438" height="54.637" viewBox="0 0 49.438 54.637">
                                    <path id="Icon_simple-tesla" data-name="Icon simple-tesla" d="M24.719,12.207l5.1-6.889a44.892,44.892,0,0,1,17.45,4.676,15.619,15.619,0,0,1-6.656,5.55c-.3-3.276-2.377-4.075-8.969-4.075L24.719,54.637,17.755,11.46c-6.551,0-8.627.806-8.93,4.08a15.537,15.537,0,0,1-6.652-5.532A44.886,44.886,0,0,1,19.621,5.327l5.1,6.88-.008,0h.008Zm0-8.876A52,52,0,0,1,48.054,8.521a22.133,22.133,0,0,0,1.384-3.176A61.916,61.916,0,0,0,24.719,0,61.805,61.805,0,0,0,0,5.348,28.373,28.373,0,0,0,1.384,8.526a52.056,52.056,0,0,1,23.335-5.2v.007Z" fill="#fff"/>
                                </svg>
                                    
                                <div className="specificDescription">
                                    <h4 className="text">Tesla Inc, TSLA </h4>
                                    <p className="text">Moderate Performing</p>            
                                </div>
                                <div className="procent">
                                    <p className="greenText">+8%</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    </div>
                   


          
                    
                   
               
            </div>
        )
    
}
