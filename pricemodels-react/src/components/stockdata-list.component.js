import React, {Component} from "react";
import StockDataService from "../services/stockData.services";
//import {Link} from "react-router-dom";

export default class AddStockData extends Component{
    
    constructor(props){
        super(props);
        this.retrieveStockData = this.retrieveStockData.bind(this);
        this.refreshList = this.refreshList.bind(this);
        
        this.state = {
            stockData: [],
            currentStockData: null,
            currentIndex: -1,
        };
    }

    componentDidMount(){
        this.retrieveStockData();

    }

    setActiveStockData(stockData, index){
        this.setState({
            currentStockData: stockData,
            currentIndex: index
        })
    }

    retrieveStockData(){
        StockDataService.getAll()
            .then(response => {
                this.setState({
                    stockData:response.data
                });
                console.log(response.data);
            })
            .catch( e => {
                console.log(e);
            });
    }
    refreshList(){
        this.retrieveStockData();
        this.setState({
            currentStockData: null,
            currentIndex: -1
        });
    }

    render(){
        const {stockData, currentIndex, currentStockData} = this.state;
        return(
            <div className= "list row">
                <div className= "col-md-6">
                    <h4>StockData</h4>

                    <ul className="list-group">
                        {stockData &&
                        stockData.map((stockDatum,index) => (
                            <li className={
                                "list-group-item" + (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActiveStockData(stockDatum,index)}
                            key={index}>
                                {stockDatum.high, stockDatum.low, stockDatum.volume}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}