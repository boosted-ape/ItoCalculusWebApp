import http from "../http-common";

class StockDataTutorialService {
    create(){
        data = http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo");
        return http.post("/stockdata",data);
    }

    getAll(){
        return http.get("/stockdata");
    }

    delete(id){
        return http.delete(`/stockdata/${id}`);
    }
}

export default new StockDataTutorialService;