import React, { useState } from "react"; //USE STATE

import { Line } from "react-chartjs-2"; // REACTCHARTJS2

import { CDBContainer } from "cdbreact"; //CDBREACT BOOTSTRAP

import { Chart as ChartJS } from "chart.js/auto"; //CHARTJS NEEDED

import { Chart } from "react-chartjs-2"; // CHART

import { Visitors } from "./components/Visitors/Visitors";

import { SalesForMonth } from "./components/SalesForMonth/SalesForMonth";

import EcommerceData from "./ecommerce-data.json"; //JSON FILE

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
    <div>
      <CDBContainer>
        <h3 className="mt-5">TOP SELLING</h3>
        <Line data={data} options={{ responsive: true }} />
      </CDBContainer>
      <SalesForMonth />
    </div>
  );
}

export default App;
