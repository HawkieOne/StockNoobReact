import React, {useState, useEffect} from 'react'
import './Search.css'

export default function Search(prop) {

    const [stocks, setStocks] = useState([]);
    const [individualStock, setIndividualStock] = useState({
        stock_ID: Number,
        stockName: "",
        stockSymbol: ""
    });
    
    const searchStock = () => {
        const axios = require('axios');
        var dataarray = [];
        var options = {
          method: 'GET',
          url: `https://stocknoob.azurewebsites.net/stock/searchStocks/${searchVal}`,
          headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxODU2NzU1LCJleHAiOjE2MjE5NDMxNTUsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.a3U6rp2OeetV2R2aPid4tw9fKCPZv2rwGpQkG_WGM-dMKrhHKtLZ7ejg-UjdO11a8XG-pB9UxiXeEX2gde3POpiDaq-4WCwkQsUIk3EsgDBhpmmOHDPMlgmH0SUlllwUDhcRFRhVkGnLWZ9iYVQH_Z4f01EvZNTb_v_EXypGiP-3wtaChwgC8B88YLYnPfkSqaQ6il6Q6occpmXFOnHtQhviv9-qkxk41BFHUphWpb5N19tw1UvRAAdQIO9NmyVEw5EZNByxRHydWXIavO9sBpUwmTKd_KfarS-CZR8b1u5Pk-joau0l-Sg8941etgWNovLlEC7dnWk_AY4c4u1Xuw'}
        };
        axios.request(options).then(function (response) {
            let apiResponse = response.data;
            { apiResponse.map( (apiData) => {
                let stock = {
                    stock_ID: apiData.Stock_ID,
                    stockName: apiData.Stock_Name,
                    stockSymbol: apiData.Stock_Shortening
                };
                dataarray.push(stock);
            })} 
        }).catch(function (error) {
            console.error(error);
        });
        setStocks(dataarray);
        console.log(stocks);
    }

    const [searchVal, setSearchVal] = useState({
        searchValue: ""  
      });

    // useEffect(() => {
    //     const {searchValue} = prop.location.state;
    //     console.log(searchValue);
    //     setSearchVal(searchValue);
    // }, []);

    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning">Search found</h2>
                    <hr className="w-75 hr-tag"></hr>
                    <button className="btn-goTo" onClick={searchStock}>Testing</button>
                    {stocks.map((val) => {
                        return (
                            <>
                                <div className="w-75 searched">
                                    <div className="searchedItem">
                                        <p>{val.stockName}</p>
                                        <p>{val.stockSymbol}</p>
                                        <button className="btn-goTo">Go to</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
