import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Bar } from "react-chartjs-2";

function getSalesForDayObj() {
  let dayBefore = [];
  let arr = [];
  let day = new Date().getDate() + 1;
  let date = new Date(new Date().getFullYear(), new Date().getMonth(), day);
  for (let i = 0; i < 5; i++) {
    ECommerceData.sold_products.map((sold_product) => {
      if (date.getTime() === Date.parse(sold_product.date_sold)) {
        dayBefore.push(sold_product);
      }
    });

    date = new Date(new Date().getFullYear(), new Date().getMonth(), day);
    day -= 1;
  }

  for (let i = 0; dayBefore.length > i; i++) {
    if (Object.values(arr).indexOf(Date.parse(dayBefore[i].date_sold)) > -1) {
      console.log(true);
    } else {
      arr.push(dayBefore[i]);
      console.log();
    }
  }
  console.log(dayBefore);

  return dayBefore;
}
//get Five Month from this month
function getFiveDaysFromNow() {
  const fiveDaysBefore = getSalesForDayObj().map((sales_for_month) => {
    return sales_for_month.date_sold;
  });
  fiveDaysBefore.reverse((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });

  // console.log(fiveDaysBefore);
  return fiveDaysBefore;
}
function getFiveDaysSalesFromNow() {
  const fiveMonthSalesBefore = getSalesForDayObj().map((sales_for_month) => {
    return sales_for_month.sales;
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

export function SalesForDay() {
  const [fiveDaysBefore, setFiveDaysBefore] = useState(getFiveDaysFromNow());
  const [fiveMonthsSaleBeforeArr, setFiveMonthsSaleBeforeArr] = useState(
    getFiveDaysSalesFromNow()
  );
  // getFiveMonthsFromNow()

  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    setData({
      ...data,
      labels: fiveDaysBefore,
      datasets: [
        {
          label: "Sales for Day",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(194, 116, 161, 0.5)",
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
    <div class="col-lg-4 mt-4 mb-3">
      <div class="card z-index-2 ">
        <div class="card-header card-header-graph p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
          <div class="bg-white shadow-dark z-depth-4 border-radius-lg py-3 pe-1">
            <div class="chart">
              <Bar data={data} options={{ responsive: true }} />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3 class="" style={{ textAlign: "center" }}>
            SALES PER MONTH
          </h3>

          <hr class="dark horizontal" />
        </div>
      </div>
    </div>
  );
}
