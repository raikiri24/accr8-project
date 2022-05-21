import React from "react";

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
import { Topbar } from "./components/Topbar/Topbar";
import { NonRelated } from "./components/NonRelated/NonRelated";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Sidebar />

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Topbar />
        <div className="scroll">
          <div className="nonrelated">
            <NonRelated />
          </div>
          <div className="row mt-4">
            <TopSellingItem />

            <SlowMovementItem />
            <Visitors />
          </div>
          <div className="row mt-4">
            <SalesForTheCity />
            <SalesForMonth />
            <SalesForDay />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
