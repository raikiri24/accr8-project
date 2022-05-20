import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import ECommerceData from "../../ecommerce-data.json";

function visitorsObj() {
  let visitor_counter = 0;
  let visitorCount = ECommerceData.visitors.map((user) => {
    if (user.isCustomer) {
      visitor_counter += 1;
    }

    return user;
  });

  console.log("Count of Visitors", visitor_counter);

  return visitorCount;
}

export function Visitors() {
  visitorsObj();
  const [data] = useState({
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer>
      <h3 className="mt-5">Visitor Chart</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
}
