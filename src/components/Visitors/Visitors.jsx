import React, { useState, useEffect } from "react";
import ECommerceData from "../../ecommerce-data.json";
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

export function Visitors() {
  //FUNCTION FOR NUMBER OF VISITOR
  function numberOfVisitor() {
    let number_of_user = 0;
    ECommerceData.users.map((user) => {
      if (user.isCustomer) number_of_user += 1;
    });
    console.log(number_of_user);
  }
}
