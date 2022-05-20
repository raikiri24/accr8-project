import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "../../stylesheets/custom_css.css";
import ECommerceData from "../../ecommerce-data.json";

function visitorsNonCustomer() {
  let visitor_counter = 0;
  ECommerceData.visitors.map((user) => {
    if (!user.isCustomer) {
      visitor_counter += 1;
    }

    return visitor_counter;
  });

  return visitor_counter;
}
function visitorsCustomer() {
  let visitor_counter = 0;
  ECommerceData.visitors.map((user) => {
    if (user.isCustomer) {
      visitor_counter += 1;
    }
  });

  return visitor_counter;
}
export function Visitors() {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [customer] = useState(visitorsCustomer());
  const [noncustomer] = useState(visitorsNonCustomer());
  useEffect(() => {
    setData({
      labels: ["Visitor", "Customer"],
      datasets: [
        {
          label: "Visitors",
          data: [noncustomer, customer],
          borderColor: ["rgba(255,206,86,0.2)"],
          backgroundColor: ["rgba(232,99,132,1)", "rgba(232,211,6,1)"],
          pointBackgroundColor: "rgba(255,206,86,0.2)",
        },
      ],
    });
  }, [customer, noncustomer]);
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };
  return (
    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
      <div className="visitor-graph ">
        <h3>Visitors</h3>
        <Doughnut data={data} options={{ options }} />
      </div>
    </div>
  );
}
