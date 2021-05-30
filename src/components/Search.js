import React, {useState, useEffect, useRef} from 'react'
import './Search.css'

export default function Search(prop) {

    const [searchVal, setSearchVal] = useState(null);     
    const [stocks, setStocks] = useState(null);
    const [loaded, setLoaded] = useState(false); 
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
           isInitialMount.current = false;
        } else {
            // console.log(prop);
            const {search} = prop.location.state;
            console.log(search);
            setSearchVal(search);
        }
      });

    useEffect(() => {
        // console.log(prop);
        const {search} = prop.location.state;
        console.log(search);
        setSearchVal(search);
    }, []);

    useEffect(() => {
        if (searchVal !== null) {            
            searchStock();  
        }         
    }, [searchVal]);

    useEffect(() => {  
        if (stocks !== null) {        
            console.log(stocks);            
            setLoaded(true);
        }}, [stocks]);
    
    const searchStock = () => {
        const axios = require('axios');
        var dataarray = [];
        var options = {
          method: 'GET',
          url: `https://stocknoob.azurewebsites.net/stock/searchStocks/${searchVal}`,
        //   headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIyMDMxMDAyLCJleHAiOjE2MjIxMTc0MDIsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.BKmW2-ZeqqspCYLD7cy161NzK1oPYlqWkXynYODj4rD1SpAM073nNtjqoA5G7QdM-mrSsvRFPcO5eDndNfWhS_VNh51hHxNsgALxhG7asgLk1uWyrCRMV8HfELUPyxIHrrAXTg3dNkQ55O1pN1OmrYd0-GLmRldY8ajCj-NcBwFWDs20SlejTyz-e6nr7o8YUy2goF70aLg6sxcTUtXlcH1ycSDpMPwrue_2zDoDq2isjnwxyG7bEJx3bMH3i_2d-PEikCXR7mmR__tVl_zhYNeIoAmp1IyVEkfUBNTPfE2k4-sj1ktpLUqOJzwlaRdw6HFC1cs8a1cHKhEyPIirXQ'}
        };
        axios.request(options).then(function (response) {
            let apiResponse = response.data;
            // console.log(apiResponse);
            { apiResponse.map( (apiData) => {
                let stock = {
                    stock_ID: apiData.Stock_ID,
                    stockName: apiData.Stock_Name,
                    stockSymbol: apiData.Stock_Shortening
                };
                dataarray.push(stock);
            })} 
            setStocks(dataarray);
        }).catch(function (error) {
            console.error(error);
        });          
    } 

    const showResults = () => {
        if (loaded) {
            console.log(stocks);
            if(stocks.length > 0) {
                return stocks.map((stock, index) => (
                    <div key={index} className="w-75 searched row">
                        <p className="col-2 text-right">({stock.stockSymbol})</p>  
                        <p className="yellow col text-left">{stock.stockName}</p>                                     
                    </div>                     
                ))
            } else {
                return <h3 className="yellow">No stocks were found</h3>
            }
        } else {
            return <h3 className="yellow">Loading...</h3>
        }                     
    }

    return (
        <>
            <div className="mb-5">
                <div>
                    <h2 className="mt-5 text-warning">Search results</h2>
                    <hr className="w-75 hr-tag"></hr>          
                    {/* <button className="btn-goTo" onClick={searchStock}>Testing</button>                    */}
                    {showResults()}
                </div>
            </div>
        </>
    )
}
