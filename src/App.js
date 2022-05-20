import React, { useState } from "react";
import { CDBContainer, CDBBox } from "cdbreact";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Visitors } from "./components/Visitors/Visitors";
import { SalesForMonth } from "./components/SalesForMonth/SalesForMonth";
import { SalesForTheCity } from "./components/SalesForTheCity/SalesForTheCity";
import { TopSellingItem } from "./components/TopSelling/TopSellingItem";
import { SlowMovementItem } from "./components/SlowMovementItem/SlowMovementItem";
import { SalesForDay } from "./components/SalesForDay/SalesForDay";
import "./stylesheets/custom_css.css";
import { Sidebar } from "./components/SideBar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { NonRelated } from "./components/non-related/NonRelated";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Sidebar />

      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Topbar />
        <div class="nonrelated">
          <NonRelated />
        </div>
        <div class="row mt-4">
          <TopSellingItem />

          <SlowMovementItem />
          <Visitors />
        </div>
        <div className="row mt-4">
          <SalesForTheCity />
          <SalesForMonth />
          <SalesForDay />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
