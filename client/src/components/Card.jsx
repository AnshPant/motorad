import React from 'react';
import './card.css';

const Card = ({ icon, title, value, percentage }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="text">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </div>
      <div className="percentage">{percentage}</div>
    </div>
  );
};

export default Card;
