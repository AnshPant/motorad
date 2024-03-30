import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Chart.css';

const ChartComponent2 = () => {
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const parentHeight = chartRef.current.clientHeight;
    setChartHeight(parentHeight);
  }, []);

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false // Hide the chart toolbar
      }
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
      color: "#4CAF50",
    },
  ];

  return (
    <div className="card chart-card" ref={chartRef} style={{ height: "300px" }}>
      {/* <div className="card-header">
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
      </div> */}
      <div className="card-body" style={{ height: chartHeight }}>
        <Chart options={options} series={series} type="bar" height={chartHeight} />
      </div>
    </div>
  );
};

export default ChartComponent2;
