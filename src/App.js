import './App.css';
import {Helmet} from "react-helmet";
import StockList from './components/StockList';

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
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>StockNoob</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <header className="App-header" onClick={api}>
        Hello
      </header> */}
      <StockList/>
    </div>
  );
}

export default App;
