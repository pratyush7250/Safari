import React from 'react'
import './PopularWayCard.css'
const PopularWayCard = ({ image, title }) => {
  return (
    <div
      className="popular-way-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="popular-way-label">
        {title}
      </div>
    </div>
  );
}

export default PopularWayCard
