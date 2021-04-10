import React, { Component } from "react";
import classes from "./BarGraph.module.css";
import {Chart, BarController, registerables} from "chart.js";

Chart.register(...registerables);


export default class CandleSticksGraph extends Component{
    chartref = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartref.current.getContext("2d");

        var candlesticks = new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Jan","Feb"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86,87],
                    }
                ]
            }
        })
    }

    render(){
        return(
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartref}
                    />
            </div>
        )
    }
}
