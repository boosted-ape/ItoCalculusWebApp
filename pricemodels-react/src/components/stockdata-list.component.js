import classes from "./BarGraph.module.css";
import React, { Component, useMemo, useState, useEffect } from "react";
import StockDataService from "../services/stockData.services";
var Chart = require("chart.js");
//import {Link} from "react-router-dom";

export default class StockDataList extends Component {


    constructor(props) {
        super(props);
        this.retrieveStockData = this.retrieveStockData.bind(this);
        this.addStockData = this.addStockData.bind(this);
        this.refreshList = this.refreshList.bind(this);

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

        const myChartRef = this.chartRef.current.getContext("2d");

        var chart = new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: this.state.stockData.map(() => {
                    return this.state.stockData.time;
                }),
                datasets: [{
                    label: "IBM",
                    data: this.state.stockData.map(() => {
                        return this.state.stockData["1. open"]
                    })
                }]
            }
        })

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
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    refreshList() {
        this.addStockData();
        this.retrieveStockData();
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

                </div>
            </div>
        )
    }
}