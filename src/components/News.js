import React, { useState, useEffect } from 'react';
import "./News.css";
import history from './History';

export default function News(prop) {

    const showNews = () => {    
        // console.log("PUSH");
        console.log(prop.article);
        const path = "/NewsDetails";
            history.push({
            pathname: path,
            state: { 
                article: prop.article
            }
        })  
      };


    return (
        <div className="w-75 d-flex shadow rounded my-3 text-light article" onClick={showNews}>
            <img src={prop.article.thumbnail} className="w-25"></img>
            <div className="d-flex flex-column w-100">
                <h5 className="mt-3 mx-3">{prop.article.title}</h5>
                <hr className="w-75 border-light"></hr>
                <div className="d-flex justify-content-around mt-auto"> 
                    <p className="">{new Date(prop.article.date).toUTCString()}</p>
                    <p className="">{prop.article.provider}</p>                    
                </div>
            </div>
        </div>
    )
}
