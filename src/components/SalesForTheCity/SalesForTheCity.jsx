import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Bar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const cityThatSoldItemsObj = ECommerceData.cities.map((sales_per_city) => {
  return {
    city: sales_per_city.city,
    moneyTaken: sales_per_city.sales,
  };
});

export function SalesForTheCity() {
  const [moneyPerCity] = useState(() => {
    let moneyPerCitiesArr = [];
    cityThatSoldItemsObj.map((cityObj) => {
      moneyPerCitiesArr.push(cityObj.moneyTaken);
    });
    return moneyPerCitiesArr;
  });

  const [cities, setCities] = useState(() => {
    let citiesArr = [];
    cityThatSoldItemsObj.map((cityObj) => {
      citiesArr.push(cityObj.city);
    });
    return citiesArr;
  });
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    setData({
      ...data,
      labels: cities,
      datasets: [
        {
          label: "Sales for Month",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(1, 116, 161, 0.5)",
          borderColor: "rgb(194, 116, 161)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(71, 225, 167, 0.5)",
          pointHoverBorderColor: "rgb(71, 225, 167)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: moneyPerCity,
        },
      ],
    });
  }, []);
  return (
    <div class="col-lg-4 mt-4 mb-3">
      <div class="card z-index-2 ">
        <div class="card-header  card-header-graph p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
          <div class="bg-white shadow-dark z-depth-4 border-radius-lg py-3 pe-1">
            <div class="chart">
              <Bar data={data} options={{ responsive: true }} />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3 class="" style={{ textAlign: "center" }}>
            SALES PER CITY
          </h3>
          <hr class="dark horizontal" />
        </div>
      </div>
    </div>
  );
}
