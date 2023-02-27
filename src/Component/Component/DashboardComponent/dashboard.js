import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Routes,
  Link,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";

import BarChart from "./Component/DashboardComponent/BarChart";
import LineChart from "./Component/DashboardComponent/LineChart";
import PieChart from "./Component/DashboardComponent/PieChart";
//import ProductInfo from "./Component/ProductInfo";
function dashboard() {
  return (

    <div>
      <BrowserRouter>
        <nav />

        <Routes>
          <Route>
            <Route exact path="/Component/DashboardComponent/LineChart" element={<LineChart />} />
            <Route
              exact
              path="/Component/DashboardComponent/BarChart"
              element={<BarChart />}
            />
            <Route
              exact
              path="./Component/DashboardComponent/LineChart"
              component={<PieChart />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default dashboard;
