import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Bar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

function getSalesForMonth() {
  let monthsBefore = [];
  for (let i = 0; i < 5; i++) {
    ECommerceData.sales_per_month.map((sale_per_month) => {
      if (sale_per_month.id === new Date().getMonth() - i) {
        monthsBefore.push(sale_per_month);
      }
    });
  }
  console.log("Month before", monthsBefore);

  return monthsBefore;
}
//get Five Month from this month
function getFiveMonthsFromNow() {
  console.log(getSalesForMonth());
  const fiveMonthBefore = getSalesForMonth().map((sales_for_month) => {
    return sales_for_month.month;
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
  console.log(getSalesForMonth());
  const fiveMonthSalesBefore = getSalesForMonth().map((sales_for_month) => {
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

export function SalesForMonth() {
  const [fiveMonthsBeforeArr, setFiveMonthsBeforeArr] = useState(
    getFiveMonthsFromNow()
  );
  const [fiveMonthsSaleBeforeArr, setFiveMonthsSaleBeforeArr] = useState(
    getFiveMonthsSalesFromNow()
  );
  // getFiveMonthsFromNow()

  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    //console.log("useEffect", fiveMonthsBeforeArr);
    setData({
      ...data,
      labels: fiveMonthsBeforeArr,
      datasets: [
        {
          label: "Sales for Month",
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
    <CDBContainer>
      <h3 className="mt-5">Sales for Month</h3>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
}
