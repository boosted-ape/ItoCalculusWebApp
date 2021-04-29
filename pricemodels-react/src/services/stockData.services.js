import http from "../http-common";
import axios from "axios";

class StockDataService {
    async create(){
        const alphaData = await Promise.resolve(axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=60min&outputsize=compact&apikey=W5GVI7U0ZGG13BFL"));
        http.post("/stockData", alphaData);
    }

    getAll(){
        return http.get("/stockData");
    }

    deleteAll(){
        http.delete("/stockData");
    }
}

export default new StockDataService();