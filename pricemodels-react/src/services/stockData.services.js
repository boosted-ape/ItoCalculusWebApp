import http from "../http-common";
import axios from "axios";

class StockDataService {
    create(){
        
        return http.post("/stockData", axios
        .get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=compact&apikey=demo")
        .then(response => {
            return response.data
        })
        .catch(error => console.log(error)));
    }

    getAll(){
        return http.get("/stockData");
    }

    deleteAll(){
        return http.delete("/stockData");
    }
}

export default new StockDataService();