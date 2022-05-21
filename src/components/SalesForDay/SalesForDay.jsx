import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Bar } from "react-chartjs-2";

function getSalesForDayObj() {
  let day = new Date().getDate();
  let date = new Date(new Date().getFullYear(), new Date().getMonth(), day);

  let dayBefore = [];
  let i = 0;
  do {
    if (dayBefore === undefined || dayBefore.length === 0) {
      ECommerceData.sold_products[i].sales_per_day =
        ECommerceData.sold_products[i].product.quantity *
        ECommerceData.sold_products[i].product.product_price;
      dayBefore.push(ECommerceData.sold_products[i]);

      day -= 1;
    } else {
      if (
        new Date(date).getTime() ===
        new Date(ECommerceData.sold_products[i].date_sold).getTime()
      ) {
        ECommerceData.sold_products[i].sales_per_day =
          ECommerceData.sold_products[i].product.quantity *
          ECommerceData.sold_products[i].product.product_price;

        dayBefore.push(ECommerceData.sold_products[i]);
      }

      day -= 1;
    }
    date = new Date(new Date().getFullYear(), new Date().getMonth(), day);

    i += 1;
  } while (i < ECommerceData.sold_products.length);

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

  return fiveDaysBefore;
}
function getFiveDaysSalesFromNow() {
  let sales = ECommerceData.sold_products;
  let salesPerDay = getSalesForDayObj();
  ECommerceData.sold_products.map((sold_product) => {
    sales.map((sale) => {
      if (JSON.stringify(sale.id) !== JSON.stringify(sold_product.id)) {
        if (
          JSON.stringify(sale.date_sold) ===
          JSON.stringify(sold_product.date_sold)
        ) {
          //salesArr.push(saleforday);
          if (
            JSON.stringify(sale.date_sold) ===
            JSON.stringify(sold_product.date_sold)
          ) {
            sold_product.sales_per_day +=
              sale.product.quantity * sale.product.product_price;
          }
        }
      }
    });
  });

  return salesPerDay;
}

export function SalesForDay() {
  const [fiveDaysBefore] = useState(getFiveDaysFromNow());
  const [fiveDaysSaleBeforeArr] = useState(
    getFiveDaysSalesFromNow()
      .reverse()
      .map((salesperday) => {
        return salesperday.sales_per_day;
      })
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
          data: fiveDaysSaleBeforeArr,
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
            SALES PER DAY
          </h3>

          <hr className="dark horizontal" />
        </div>
      </div>
    </div>
  );
}
