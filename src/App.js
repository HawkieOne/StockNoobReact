import './App.css';
import {Helmet} from "react-helmet";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"

function App() {
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

  const login = (event) => {    
    const axios = require('axios');
    console.log("LOGIN");
    axios.post('http://localhost:3010/user/login',
              {
                "Username": "hali0151",
                "Password": "1234"  
              }             
            )
            .then(response => {
              console.log("RESPONSE: " + response.data)
              console.log("DATA: " + response.data)
              const data = response.data;

              user.LoginID = data.Login_ID;
              user.Username = data.Username;
              user.UserID = data.User_ID;
              user.Mail = data.Mail;
              user.Money = data.Money;
              user.Holdings = data.Holdings;
              user.Goal = data.Goal;
              user.GoalItem = data.GoalItem;
              user.SavingMonth = data.SavingMonth;
              user.Token = data.Token.access_token;              
              console.log(user);  
            }).catch(error =>
              console.log(error)
            )
  };


  const test = (event) => {    
    var axios = require("axios").default;
    console.log("API");
    var options = {
      method: 'GET',
      url: 'http://localhost:3010/api/private',
      headers: { authorization: 'Bearer ' + user.Token}
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
      <Header className="Header-component"/>
      {/* <header className="App-header" onClick={api}>
      
        Hello
      </header> */}
      <Login/>
      <p onClick={login}>Login</p>
      <p onClick={test}>Test</p>
      <Footer className="Footer-component"/>
    </div>
  );
}

export default App;
