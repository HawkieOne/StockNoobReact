import React, { useState, useEffect } from 'react';
import history from './History'
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./News.css";

export default function NewsDetails(prop) {

    const [article, setArticle] = useState(null);
    const [text, setText] = useState();
    const [loaded, setLoaded] = useState(false); 

    const getNews = () => {    
        var axios = require("axios").default;
        console.log(article);
        var options = {
            method: 'GET',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
            params: {uuid:  article.id, region: 'US'},
            headers: {
              'x-rapidapi-key': '5b6d31f8cfmsh5598169723208c2p1be828jsn0b38fac79ee6',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setText(response.data.data.contents[0].content.summary)
              setLoaded(true);
          }).catch(function (error) {
              console.error(error);
          });
      };

    useEffect(() => {
        console.log("TEST");
        const {article} = prop.location.state;
        console.log(article);
        setArticle(article);        
      }, []);

      useEffect(() => {
          if (article !== null) {
              console.log(article);
            getNews();
          }        
      }, [article]);

      const goBack = () => {    
        const path = "/News";
            history.push({
            pathname: path
        })  
    };

    return (
        <div className="w-100 p-5">
            {loaded ?
                    <div className="d-flex flex-column shadow rounded text-light">                                          
                        <div className="d-flex justify-content-statr">
                            <FontAwesomeIcon className="icon fa-lg yellow m-3 mr-auto arrow" icon={faArrowLeft} onClick={goBack}/>    
                            <h5 className="mt-3 mr-auto">{article.title}</h5>                                                          
                        </div>
                        <hr className="w-75 border-light"></hr>
                        <div className="d-flex justify-content-center mt-3">
                            <img src={article.thumbnail} className="w-50 rounded"></img>
                        </div>            
                        <div className="d-flex flex-column w-100">                                                             
                            <div className="text-left mx-4">
                                <p className="mt-3">
                                    {text}
                                </p>
                            </div>                            
                            <hr className="w-75 border-light"></hr>
                            <div className="d-flex justify-content-around mt-auto"> 
                                <p className="">{new Date(article.date).toUTCString()}</p>
                                <p className="">{article.provider}</p>                    
                            </div>
                        </div>
                    </div>
                    :
                    <h1 className="yellow">Loading...</h1>}
        </div>        
    )
}
