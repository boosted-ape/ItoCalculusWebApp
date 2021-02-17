import logo from './logo.svg';
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/stockData" className="navbar-brand">
          bj
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/stockData"} className="nav-link">
              Stock Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/","stockData"]} component={StockDataList}/>
          <Route exact path ="/add" component={AddStockData}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
