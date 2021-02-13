import http from "../http-common";

class StockDataTutorialService {
    create(data){
        return http.post("/tutorials",data);
    }
}

export default new StockDataTutorialService;