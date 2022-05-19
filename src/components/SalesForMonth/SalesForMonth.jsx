import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const months = [
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

function switchForDateArray(dateArr, forDate) {
  let monthsArr = [];
  dateArr.forEach((monthIdx) => {
    switch (monthIdx + forDate) {
      case 0:
        months.push(months[0]);
        break;
      case 1:
        monthsArr.push(months[1]);
        break;
      case 2:
        monthsArr.push(months[2]);
        break;
      case 3:
        monthsArr.push(months[3]);
        break;
      case 4:
        monthsArr.push(months[4]);
        break;
      case 5:
        monthsArr.push(months[5]);
        break;
      case 6:
        monthsArr.push(months[6]);
        break;
      case 7:
        monthsArr.push(months[7]);
        break;
      case 8:
        monthsArr.push(months[8]);
        break;
      case 9:
        monthsArr.push(months[9]);
        break;
      case 10:
        monthsArr.push(months[10]);
        break;
      case 11:
        monthsArr.push(months[11]);
        break;
      case -1:
        monthsArr.push(months[11]);
        break;
      case -2:
        monthsArr.push(months[10]);
        break;
      case -3:
        monthsArr.push(months[9]);
        break;
      case -4:
        monthsArr.push(months[8]);
        break;
      case -5:
        monthsArr.push(months[4]);
        break;
      default:
        break;
    }
  });
  monthsArr.reverse((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
  return monthsArr;
}
//DATE
function getFiveMonthsFromNow() {
  let monthsBefore = [];
  for (let i = 1; i <= 5; i++) {
    monthsBefore.push(new Date().getMonth() - i);
  }

  let fiveMonthBefore = switchForDateArray(monthsBefore, 1);

  return fiveMonthBefore;
}
export function SalesForMonth() {
  const [soldProductMonthly, setSoldProduct] = useState([]);
  const [fiveMonthsBeforeArr, setFiveMonthsBeforeArr] = useState();
  const [data, setData] = useState({
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
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });

  useEffect(() => {
    setFiveMonthsBeforeArr(getFiveMonthsFromNow());
    setData({
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
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    });
  }, []);

  //FUNCTION FOR SALES FOR MONTH
  function salesForMonthData() {
    let soldProductMonthObj = {
      soldProductMonthArr: [],
      soldProductQuantityArr: [],
      monthsAndQuantity: [{ month: "", quantity: 0 }],
    };
    ECommerceData.sold_products.map((sold_product) => {
      soldProductMonthObj["soldProductMonthArr"].push(
        new Date(sold_product.date_sold).getMonth()
      );
    });
    let newSoldProductMonthArr = switchForDateArray(
      soldProductMonthObj["soldProductMonthArr"],
      0
    );

    newSoldProductMonthArr.forEach((newSoldArr) => {
      let newSoldObj = { month: newSoldArr, quantity: 0 };
      if (soldProductMonthObj.monthsAndQuantity.includes(newSoldObj)) {
        return;
      } else {
      }
    });

    //   console.log(`${soldProductDate}`);
  }

  return (
    <CDBContainer>
      <h3 className="mt-5">Sales for Month</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
}
