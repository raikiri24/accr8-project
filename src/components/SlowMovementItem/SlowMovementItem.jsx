import React, { useState } from "react";
import EcommerceData from "../../ecommerce-data.json";
import { Line } from "react-chartjs-2";
//CDBREACT BOOTSTRAP
import { CDBBox } from "cdbreact";
//CHARTJS NEEDED
import { Chart as ChartJS } from "chart.js/auto";
// CHART
import { Chart } from "react-chartjs-2";
export function SlowMovementItem() {
  //FUNCTION FOR BEST SALES
  function sort_by_slow_moving() {
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
    sort_by_slow_moving().map((product) => {
      label_arr.push(product.product_name);
    });
    return label_arr.reverse();
  }

  function getJsonQuantity() {
    let label_arr = [];
    sort_by_slow_moving().map((product) => {
      label_arr.push(product.sold);
    });

    return label_arr.reverse();
  }

  //GRAPH
  const [data] = useState({
    labels: get_json_label(),
    datasets: [
      {
        label: "Slow Movement Item",
        backgroundColor: "rgb(205,92,92)",
        borderColor: "rgb(205,92,92)",
        data: getJsonQuantity(),
      },
    ],
  });
  return (
    <div class="col-lg-4 col-md-6 mt-4 mb-4">
      <div class="card z-index-2  ">
        <div class="card-header card-header-graph p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
          <div class="bg-white border-radius-lg  py-3 pe-1">
            <div class="chart">
              <Line data={data} options={{ responsive: true }} />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3 class="" style={{ textAlign: "center" }}>
            SLOW MOVING PRODUCTS
          </h3>

          <hr class="dark horizontal" />
        </div>
      </div>
    </div>
  );
}
