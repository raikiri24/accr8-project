import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export function Sidebar() {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Router>
          <Link to="/" className="navbar-brand m-0">
            <img
              src="./assets/img/logos/corn.png"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold text-white">
              CornWhRi Co.
            </span>
          </Link>
        </Router>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto  max-height-vh-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <Router>
            <li className="nav-item">
              <Link
                className="nav-link text-white active bg-gradient-primary"
                to="./pages/dashboard.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="./pages/tables.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="./pages/billing.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Billing</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white " to="./pages/rtl.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">
                    format_textdirection_r_to_l
                  </i>
                </div>
                <span className="nav-link-text ms-1">RTL</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white "
                to="./pages/notifications.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="./pages/profile.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="./pages/sign-in.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="#">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">assignment</i>
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </Link>
            </li>
          </Router>
        </ul>
      </div>
      <div className="sidenav-footer position-absolute w-100 bottom-0 ">
        <div className="mx-3">
          <Router>
            <Link
              className="btn bg-gradient-primary mt-4 w-100"
              to="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
              type="button"
            >
              --
            </Link>
          </Router>
        </div>
      </div>
    </aside>
  );
}
