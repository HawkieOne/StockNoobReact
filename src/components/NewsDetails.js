import React, { useState, useEffect } from 'react';

export default function NewsDetails(prop) {

    const [article, setArticle] = useState();
    const [text, setText] = useState();

    const getNews = () => {    
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
            params: {uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd', region: 'US'},
            headers: {
              'x-rapidapi-key': '5b6d31f8cfmsh5598169723208c2p1be828jsn0b38fac79ee6',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setText(response.data.data.contents[0].content.summary)
          }).catch(function (error) {
              console.error(error);
          });
      };

    useEffect(() => {
        console.log("TEST");
        const {article} = prop.location.state;
        setArticle(article);
        getNews();
      }, []);

    return (
        <div className="w-100 p-5">
            <div className="d-flex flex-column shadow rounded text-light">
                <div className="d-flex justify-content-center mt-3">
                    <img src={article.thumbnail} className="w-50 rounded"></img>
                </div>            
                <div className="d-flex flex-column w-100">
                    <h5 className="mt-3 mx-3">{article.title}</h5>
                    <hr className="w-75 border-light"></hr>
                    <div>
                        <p>
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
        </div>        
    )
}
