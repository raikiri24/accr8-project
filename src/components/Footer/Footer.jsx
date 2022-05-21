import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="footer py-4  ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              © {new Date().getFullYear()}, made by {"\u00A0"}
              <Router>
                <Link to="/" className="font-weight-bold" target="_blank">
                  Paul Leandro Lanot
                </Link>
              </Router>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <Router>
                <li className="nav-item">
                  <Link
                    to="https://github.com/raikiri24"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    Paul Leandro Lanot
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://github.com/raikiri24"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://github.com/raikiri24"
                    className="nav-link text-muted"
                    target="_blank"
                  ></Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="https://github.com/raikiri24"
                    className="nav-link pe-0 text-muted"
                    target="_blank"
                  ></Link>
                </li>
              </Router>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
