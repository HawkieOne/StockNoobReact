import './App.css';
import {Helmet} from "react-helmet";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { Route, Router, Switch } from 'react-router-dom';
import history from './components/History';

import React, { useState } from 'react';
import Overview from './components/Overview';
import StockList from './components/StockList';
import TransactionList from './components/TransactionList'
import Explore from './components/Explore'
import Guide from './components/Guide';
import News from './components/NewsFeed'
import NewsDetails from './components/NewsDetails'
import Search from './components/Search';



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
      Token: "",
      loggedIn: false
  });

  const api = (event) => {    
    const axios = require('axios');
    const params = {
      access_key: '42afa58ed9a8332cd53fb1a45d75b29b'
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
              user.loggedIn = true;             
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
      url: 'http://localhost:3010/stock/userstock/3',
      headers: { authorization: 'Bearer ' + user.Token}
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };


  return (
    <div className="App d-flex flex-column justify-items-between bg-dark">
      <Helmet>
        <meta charSet="utf-8" />
        <title>StockNoob</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header className="header" user={user}/>
      {/* <header className="App-header" onClick={api}>
      
        Hello
      </header> */}
     
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/overview" exact component={Overview}/>
          <Route path="/stockList" exact component={StockList}/>
          <Route path="/transactionList" exact component={TransactionList}/>
          <Route path="/explore" exact component={Explore}/>
          <Route path="/guide" exact component = {Guide}/>
          <Route path="/news" exact component={News}/>
          <Route path="/NewsDetails" exact component={NewsDetails}/>
          <Route path="/search" exact component={Search}/>
          
        </Switch>            
      </Router>  

      <Footer className="mt-5"/>
    </div>
  );
}

export default App;
