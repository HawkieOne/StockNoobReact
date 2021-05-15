import './App.css';
import {Helmet} from "react-helmet";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import LoginPopup from "./components/LoginPopup"

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
      <Header className="Header-component"/>
      {/* <header className="App-header" onClick={api}>
      
        Hello
      </header> */}
      <Login/>
      <Footer className="Footer-component"/>
    </div>
  );
}

export default App;
