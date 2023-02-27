import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BarChart from "./Component/DashboardComponent/BarChart";
import LineChart from "./Component/DashboardComponent/LineChart";
import PieChart from "./Component/DashboardComponent/PieChart";
import ProductInfo from "./Component/ProductInfo";
import Registeration from "./Component/Registeration";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome </h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link
                  to={"/Component/DashboardComponent/pieChart"}
                  className="nav-link"
                >
                  {" "}
                  Dashboard - PieChart
                </Link>
              </li>
              <li>
                <Link
                  to={"/Component/DashboardComponent/BarChart"}
                  className="nav-link"
                >
                  Dashboard - BarChart
                </Link>
              </li>
              <li>
                <Link
                  to={"/Component/DashboardComponent/LineChart"}
                  className="nav-link"
                >
                  Dashboard - LineChart
                </Link>
              </li>
              <li>
                <Link to={"/Component/ProductInfo"} className="nav-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to={"/Component/Registeration"} className="nav-link">
                  Registeration
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route
              path="/Component/DashboardComponent/pieChart"
              component={PieChart}
            />
            <Route
              path="/Component/DashboardComponent/BarChart"
              component={BarChart}
            />
            <Route
              path="/Component/DashboardComponent/LineChart"
              component={LineChart}
            />
            <Route path="/Component/ProductInfo" component={ProductInfo} />

            <Route path="/Component/Registeration" component={Registeration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
