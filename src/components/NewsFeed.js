import React, { useState, useEffect } from 'react';
import News from './News'

export default function NewsFeed() {

    const [articles, setArticles] = useState([]);
    const [loaded, setLoaded] = useState(false); 

    const getNews = () => {    
        var axios = require("axios").default;

        var options = {
            method: 'POST',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list',
            params: {region: 'US', snippetCount: '28'},
            headers: {
              'content-type': 'text/plain',
              'x-rapidapi-key': '5b6d31f8cfmsh5598169723208c2p1be828jsn0b38fac79ee6',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            },
            data: 'Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page'
          };

          let data = [];
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              response.data.data.main.stream.map((item, index) => {      
                let article = {
                    id: item.content.id,
                    title: item.content.title,
                    provider: item.content.provider.displayName,
                    date: item.content.pubDate,
                    thumbnail: ""  
                } 
               if (item.content.thumbnail !== null) {
                 article.thumbnail = item.content.thumbnail.resolutions[0].url;
               }  
                data.push(article);        
              });  
            //   console.log(data);
              setArticles(data); 
              setLoaded(true);         
              console.log(articles);
          }).catch(function (error) {
              console.error(error);
          });
      };

    useEffect(() => {   
        getNews();
      }, []);

    return (
        <div className="d-flex flex-column align-items-center mt-4">            
            {loaded ?
                <>
                    <h1 className="text-light">News</h1>
                    <hr className="w-75 border-light"></hr>
                    {articles.map((article, index) => {
                      return <News key={index} article={article}></News>
                    })}
                </>
                    :
                    <h1 className="yellow">Loading...</h1>}                      
        </div>
    )
}
