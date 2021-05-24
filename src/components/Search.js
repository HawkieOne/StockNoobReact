import React, {useState, useEffect} from 'react'

function Search() {
    const [stocks, setStocks] = useState([]);
    const [individualStock, setIndividualStock] = useState({
        Stock_ID: Number,
        stockName: "",
        stockSymbol: ""
    });
    
    const searchStock = () => {
        var dataarray = [];
        const axios = require('axios');
        var options = {
          method: 'GET',
          url: 'https://stocknoob.azurewebsites.net/stock/searchStocks/te',
          headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlwRW5tajh6MkE3MDFESTVJVVMwRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1wcGJvbHh0eS5ldS5hdXRoMC5jb20vIiwic3ViIjoiTXpJWFNqQVpsWGhXbW9XUmM2RmE4N0NtWXdadUxJeTlAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcXVpY2tzdGFydHMvYXBpIiwiaWF0IjoxNjIxMzUzOTY0LCJleHAiOjE2MjE0NDAzNjQsImF6cCI6Ik16SVhTakFabFhoV21vV1JjNkZhODdDbVl3WnVMSXk5IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.qZYRFYN5BowYMG_auGRFETmKKVAVBesxxrwt0CQ6wyKWowHLAgTHwlDgclMdWlQTp2ay8Ug-pcWQMmX4E8tfWzZuSBENYQU8wTyzBXgFOQwG91CiksoSVHSanTRvuVbpJTNiHaidSJCBY9mFBBzKh_dLJRc6fgrYr_OsQpxhWO01JhZFPnMxDcSe1ZGOU5ptWv3YlS3FOQusLlh7ltxeXcEGYbj-lUPwLUcf5ZNbMEL4RgVcYvAnKoGyjGlMY3DL43DePV08g_Z1kjHWdAEaMSXgOD9ZJ_v-CIPLBnaOzAsNreq91SC7661hIFGU8PwtDOqXV3tZNJVqH031sRNzNA'}
        };
        
         axios.request(options).then(function (response) {
          const apiResponse = response.data;
          {apiResponse.map((data, i) => (
                console.log(data.Stock_ID),
                console.log(data.Stock_Name),
                console.log(data.Stock_Shortening),
                setIndividualStock({
                    Stock_ID: data.Stock_ID,
                    stockName: data.Stock_Name,
                    stockSymbol: data.Stock_Shortening
                }),
                dataarray.push(individualStock)
            ))}
          console.log(apiResponse);
          console.log("här", dataarray)
          setStocks(dataarray);
          console.log(stocks)

          
        }).catch(function (error) {
          console.error(error);
          return "MSFT";
        });

    }
    
     useEffect(() => {
        searchStock();
    }, []); 
    return (
        <>
            <div>
                <div>
                    <h2 className="mt-5 text-warning">Search found</h2>
                    <hr className="w-75 hr-tag"></hr>
                    <button onClick={searchStock}>GHej</button>
                </div>
            </div>
        </>
    )
}

export default Search
