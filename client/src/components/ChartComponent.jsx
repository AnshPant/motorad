import React from "react";
import Chart from "react-apexcharts";
import './Chart.css'
import ChartComponent2 from "./chartnew";

const ChartComponent = () => {
  const options = {
    chart: {
      id: "basic-bar",
      height: 100
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 6,
    },
  };

  const series = [
    {
        name: "User",
        data: [500, 350, 200, 400],
        color: "#FF4560",
      },
    {
      name: "Guest",
      data: [400, 450, 300, 350],
       color:"#4CAF50",
    },
  ];

  return (
    <div className="card chart-card">
      <div className="card-header">
        <div className="header-left">
          <h3>Activities</h3>
          <p>May-June 2021</p>
        </div>
        <div className="header-right">
          <div className="legend">
            <div className="legend-item">
              <div className="circle light-green"></div>
              <p>Guest</p>
            </div>
            <div className="legend-item">
              <div className="circle pink"></div>
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
       {/* {<Chart options={options} series={series} type="bar" />} */}
        <ChartComponent2/>
      </div>
    </div>
  );
};

export default ChartComponent;
