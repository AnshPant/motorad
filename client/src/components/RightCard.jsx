import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import "./RightCard.css";

const RightCard = () => {
  return (
    <div className="right-card" style={{ width: '300px' }}>
      <div className="icon-container2">
        <CiCirclePlus className="icon2" />
      </div>
      <p className="text2">Add Profile</p>
    </div>
  );
};

export default RightCard;
