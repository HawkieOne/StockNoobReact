import './App.css';
import {Helmet} from "react-helmet";

function App() {

  const api = (event) => {    
    const axios = require('axios');
    const params = {
      access_key: 'da50ae70b9dd9a40022f6cc5ef93f4e5'
    }

    axios.get('http://api.marketstack.com/v1/tickers', {params})
      .then(response => {
        const apiResponse = response.data;
        console.log(apiResponse);
        apiResponse.data.map((stock, index) =>                     
            axios.post('https://localhost:44388/api/stock/addStock',
              {
                "Stock_Name": stock.name,
                "Stock_Shortening": stock.symbol  
              }             
            )
            .then(
              console.log(stock.name + " added")
            ).catch(error =>
              console.log(stock.name + " was not added")
            )
         );
      }).catch(error => {
        console.log(error);
      });
  };


  const test = (event) => {    
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'http://localhost:3010/api/private',
      // headers: {authorization: 'Bearer YOUR_ACCESS_TOKEN'}
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };


  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>StockNoob</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header className="App-header" onClick={test}>
        Hello
      </header>
    </div>
  );
}

export default App;
