import http from "../http-common";

class StockDataService{
    getAll(){
        return http.get("stockdata");
    }

    create(data){
        return http.post("/stockdata", data);
    }

    update(data){
        return http.post("/stockdata", data);
    }


}