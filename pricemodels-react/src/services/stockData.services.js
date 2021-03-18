import http from "../http-common";

class StockDataService {
    create(){
        
        return http.post("/stockdata", http
        .get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=compact&apikey=demo")
        .then(response => {
            return response.data
        })
        .catch(error => console.log(error)));
    }

    getAll(){
        return http.get("/");
    }

    deleteAll(){
        return http.delete("/");
    }
}

export default new StockDataService;