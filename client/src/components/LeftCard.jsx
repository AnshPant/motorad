import React from "react";
import PieChart from "./PieChart"; // Import the PieChart component
import './LeftCard.css'; // Import the CSS file for styling

const LeftCard = () => {
  return (
    <div className="left-card">
      <div className="top-products">
        <h3>Top Products</h3>
        <p className="month">May-June 2021</p>
      </div>
      <div className="pie-chart">
        <PieChart />
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-circle light-green"></div>
          <p>Basic Trees</p>
          <p>55%</p>
        </div>
        <div className="legend-item">
          <div className="legend-circle yellow"></div>
          <p>Custom Short Pants</p>
          <p>31%</p>
        </div>
        <div className="legend-item">
          <div className="legend-circle pink"></div>
          <p>Super Hoodies</p>
          <p>14%</p>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
