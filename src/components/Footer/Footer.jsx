import React from "react";

export function Footer() {
  return (
    <footer class="footer py-4  ">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="copyright text-center text-sm text-muted text-lg-start">
              © {new Date().getFullYear()}, made by {"\u00A0"}
              <a
                href="https://github.com/raikiri24"
                class="font-weight-bold"
                target="_blank"
              >
                Paul Leandro Lanot
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
              <li class="nav-item">
                <a
                  href="https://github.com/raikiri24"
                  class="nav-link text-muted"
                  target="_blank"
                >
                  Paul Leandro Lanot
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/raikiri24"
                  class="nav-link text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/raikiri24"
                  class="nav-link text-muted"
                  target="_blank"
                ></a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/raikiri24"
                  class="nav-link pe-0 text-muted"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
