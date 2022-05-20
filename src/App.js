//USE STATE
import React, { useState } from "react";
// REACTCHARTJS2
import { Line } from "react-chartjs-2";
//CDBREACT BOOTSTRAP
import { CDBContainer, CDBBox } from "cdbreact";
//CHARTJS NEEDED
import { Chart as ChartJS } from "chart.js/auto";
// CHART
import { Chart } from "react-chartjs-2";

import { Visitors } from "./components/Visitors/Visitors";

import { SalesForMonth } from "./components/SalesForMonth/SalesForMonth";
//JSON FILE
import EcommerceData from "./ecommerce-data.json";

import { SalesForTheCity } from "./components/SalesForTheCity/SalesForTheCity";

function App() {
  //FUNCTION FOR BEST SALES
  function sort_by_best_sold() {
    let sold_products = [];

    EcommerceData.products.map((product) => {
      sold_products.push(product);
    });

    sold_products.sort((a, b) => {
      if (a.sold > b.sold) {
        return 1;
      } else {
        return -1;
      }
    });
    return sold_products;
  }

  function get_json_label() {
    let label_arr = [];
    sort_by_best_sold().map((product) => {
      label_arr.push(product.product_name);
    });
    return label_arr;
  }

  function getJsonQuantity() {
    let label_arr = [];
    sort_by_best_sold().map((product) => {
      label_arr.push(product.sold);
    });
    console.log(EcommerceData.products.quantity);
    return label_arr;
  }

  //GRAPH
  const [data] = useState({
    labels: get_json_label(),
    datasets: [
      {
        label: "Top Selling Product",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: getJsonQuantity(),
      },
    ],
  });
  return (
    <>
      <CDBContainer>
        <CDBBox display="flex">
          <CDBBox display="block">
            <h3 className="mt-5">TOP SELLING</h3>
            <Line data={data} options={{ responsive: true }} />
          </CDBBox>
          <CDBBox display="block">
            <SalesForMonth />
          </CDBBox>
          <CDBBox display="block">
            <SalesForTheCity />
          </CDBBox>
          <CDBBox display="block">
            <Visitors />
          </CDBBox>
        </CDBBox>
      </CDBContainer>
    </>
  );
}

export default App;
