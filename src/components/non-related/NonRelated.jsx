import React, { useState } from "react";
import EcommerceData from "../../ecommerce-data.json";

function webVisitors() {
  let visitor_counter = 0;
  EcommerceData.visitors.map((user) => {
    visitor_counter += 1;

    return visitor_counter;
  });

  return visitor_counter;
}
function visitorsCustomer() {
  let visitor_counter = 0;
  EcommerceData.visitors.map((user) => {
    if (user.isCustomer) {
      visitor_counter += 1;
    }
  });
  return visitor_counter;
}
export function NonRelated() {
  const [visitors] = useState(webVisitors());
  const [clients] = useState(visitorsCustomer());
  return (
    <div className="row mt-6 mb-5 non-related">
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
          <div className="card-header p-3 pt-2">
            <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
              <i className="material-icons opacity-10">weekend</i>
            </div>
            <div className="text-end pt-1">
              <p className="text-sm mb-0 text-capitalize">Today's Money</p>
              <h4 className="mb-0"> {"\u20b1"} 3k</h4>
            </div>
          </div>
          <hr className="dark horizontal my-0" />
          <div className="card-footer p-3">
            <p className="mb-0">
              <span className="text-success text-sm font-weight-bolder">
                +55%{" "}
              </span>
              than lask week
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
          <div className="card-header p-3 pt-2">
            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="material-icons opacity-10">person</i>
            </div>
            <div className="text-end pt-1">
              <p className="text-sm mb-0 text-capitalize">Today's Visitor</p>
              <h4 className="mb-0">{visitors}</h4>
            </div>
          </div>
          <hr className="dark horizontal my-0" />
          <div className="card-footer p-3">
            <p className="mb-0">
              <span className="text-success text-sm font-weight-bolder">
                +3%{" "}
              </span>
              than last month
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 ">
        <div className="card">
          <div className="card-header p-3 pt-2">
            <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i className="material-icons opacity-10">person</i>
            </div>
            <div className="text-end pt-1">
              <p className="text-sm mb-0 text-capitalize">New Clients</p>
              <h4 className="mb-0">{clients}</h4>
            </div>
          </div>
          <hr className="dark horizontal my-0" />
          <div className="card-footer p-3">
            <p className="mb-0">
              <span className="text-success text-sm font-weight-bolder">
                +400%
              </span>{" "}
              than last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
