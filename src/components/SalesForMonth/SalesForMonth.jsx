import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Bar } from "react-chartjs-2";

const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getAllSales() {
  ECommerceData.sold_products.map((soldproducts) => {
    soldproducts.sales_for_month = 0;
    soldproducts.sales_for_month =
      soldproducts.product.quantity * soldproducts.product.product_price;
    console.log(soldproducts);
  });
}

function getSalesForMonth() {
  let monthsBefore = [];

  for (let i = 0; i < 5; i++) {
    ECommerceData.sold_products.map((productsold) => {
      const month = new Date(productsold.date_sold).getMonth();
      if (month === new Date().getMonth() - i) {
        productsold.month =
          monthsArr[new Date(productsold.date_sold).getMonth()];
        productsold.sales_per_month = 0;
        monthsBefore.push(productsold);
      }
    });
  }

  return monthsBefore;
}

//get Five Month from this month
function getFiveMonthsFromNow() {
  const fiveMonthBefore = getSalesForMonth().map((sales_for_month) => {
    return monthsArr[new Date(sales_for_month.date_sold).getMonth()];
  });

  fiveMonthBefore.reverse((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
  return fiveMonthBefore;
}

function getFiveMonthsSalesFromNow() {
  let sales = ECommerceData.sold_products;
  //console.log(sales);
  const fiveMonthSalesBefore = getSalesForMonth().map((sales_for_month) => {
    sales.map((sale) => {
      if (
        new Date(sales_for_month.date_sold).getMonth() ===
        new Date(sale.date_sold).getMonth()
      ) {
        //console.log(sales_for_month.sales_per_month);
        sales_for_month.sales_per_month +=
          sale.product.quantity * sale.product.product_price;
      }
    });
    return sales_for_month.sales_per_month;
  });
  fiveMonthSalesBefore.reverse((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
  return fiveMonthSalesBefore;
}

export function SalesForMonth() {
  const [fiveMonthsBeforeArr] = useState(getFiveMonthsFromNow());
  const [fiveMonthsSaleBeforeArr] = useState(getFiveMonthsSalesFromNow());
  // getFiveMonthsFromNow()
  const fiveMonthsBeforeArrRemovedRedundancy = [
    ...new Set(fiveMonthsBeforeArr),
  ];
  const [data, setData] = useState({ labels: [], datasets: [] });
  getAllSales();
  useEffect(() => {
    setData({
      ...data,
      labels: fiveMonthsBeforeArrRemovedRedundancy,
      datasets: [
        {
          label: "Sales for Month",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(1, 116, 50, 0.5)",
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
          data: fiveMonthsSaleBeforeArr,
        },
      ],
    });
  }, []);

  return (
    <div className="col-lg-4 mt-4 mb-3">
      <div className="card z-index-2 ">
        <div className="card-header card-header-graph p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
          <div className="bg-white shadow-dark z-depth-4 border-radius-lg py-3 pe-1">
            <div className="chart">
              <Bar data={data} options={{ responsive: true }} />
            </div>
          </div>
        </div>
        <div className="card-body">
          <h3 className="" style={{ textAlign: "center" }}>
            SALES PER MONTH
          </h3>

          <hr className="dark horizontal" />
        </div>
      </div>
    </div>
  );
}
