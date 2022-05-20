import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const cityThatSoldItems = ECommerceData.sold_products.map((sold_product) => {
  const moneyTaken = sold_product.quantity * sold_product.price;
  return {
    city: sold_product.city,
    moneyTaken: moneyTaken,
  };
});

export function SalesForTheCity() {
  console.log(cityThatSoldItems);

  return <></>;
}
