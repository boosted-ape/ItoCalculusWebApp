import logo from './logo.svg';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import StockDataList from "./components/stockdata-list.component"
import CandleSticksGraph from './components/candlesticksGraph.component';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            PricingOptions
        </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/stockData"} className="nav-link">
                Stock Data
            </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "stockData"]} component={StockDataList} />
          </Switch>
          <Switch>
            <Route exact path={["/","stockData"]} component={CandleSticksGraph}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
