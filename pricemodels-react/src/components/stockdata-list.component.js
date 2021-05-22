import classes from "./BarGraph.module.css";
import React, { Component, useMemo, useState, useEffect } from "react";
import StockDataService from "../services/stockData.services";
import {Chart, BarController, registerables} from "chart.js";
//import {Link} from "react-router-dom";

export default class StockDataList extends Component {


    constructor(props) {
        super(props);
        this.retrieveStockData = this.retrieveStockData.bind(this);
        this.addStockData = this.addStockData.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.deleteStockData = this.deleteStockData.bind(this);

        this.state = {
            stockData: [],
            currentStockData: null,
            currentIndex: -1,
        };
    }

    chartRef = React.createRef();

    componentDidMount() {
        this.addStockData();
        this.retrieveStockData();



        console.log(this.state.stockData);
    }

    componentDidUpdate(prevProps, prevState){
        



        
    }

    addStockData() {
        StockDataService.create()
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    deleteStockData() {
        StockDataService.deleteAll()
            .then(response => {
                this.setState({
                    stockData: []
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    setActiveStockData(stockData, index) {
        this.setState({
            currentStockData: stockData,
            currentIndex: index
        })
    }

    retrieveStockData() {
        StockDataService.getAll()
            .then(response => {
                this.setState({
                    stockData: response.data
                });
                const myChartRef = this.chartRef.current.getContext("2d");
                var candlesticks = new Chart(myChartRef, {
                    type: "bar",
                    data: {
                        labels: this.state.stockData.map( x => {
                            return x.time;
                        }),
                        datasets: [
                            {
                                label: "open",
                                data: this.state.stockData.map ( x => {
                                    return x["1. open"];
                                })
                            }
                        ]
                    }
                })
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    refreshList() {
        this.addStockData();
        this.retrieveStockData();
        this.deleteStockData();
        this.setState({
            currentStockData: null,
            currentIndex: -1
        });
    }


    render() {
        const { stockData, currentIndex, currentStockData } = this.state;
        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>StockData</h4>
                    {/*
                    <ul className="list-group">
                        {stockData &&
                            stockData.map((stockDatum, index) => (
                                <li className={
                                    "list-group-item" + (index === currentIndex ? "active" : "")
                                }
                                    onPointerOver={() => this.setActiveStockData(stockDatum, index)}
                                    key={index}>
                                    {stockDatum["1. open"], stockDatum["2. high"], stockDatum["3. low"], stockDatum["4. close"], stockDatum["5. volume"]}
                                </li>
                            ))}
                            </ul>*/}
                    <div className={classes.graphContainer}>
                        <canvas
                            id="chart"
                            ref={this.chartRef}/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}