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
import SearchResults from './components/SearchResults';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';



function App() {
  const [user, setUser] = useState(null);



  return (
    <div className="App d-flex flex-column justify-items-between bgdark">
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
          <Route path="/overview" exact render={() => (<Overview user={user}/>)}/>
          <Route path="/stockList" exact component={StockList}/>
          <Route path="/transactionList" exact component={TransactionList}/>
          <Route path="/explore" exact component={Explore}/>
          <Route path="/guide" exact component = {Guide}/>
          <Route path="/news" exact component={News}/>
          <Route path="/NewsDetails" exact component={NewsDetails}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/login" exact render={() => (<Login setUser={setUser}/>)}/>
          <Route path="/logout" exact render={() => (<Logout setUser={setUser}/>)}/>
          <Route path="/register" exact component={Register}/>   
        </Switch>            
      </Router>  

      <Footer className="fixed-bottom"/>
    </div>
  );
}

export default App;
