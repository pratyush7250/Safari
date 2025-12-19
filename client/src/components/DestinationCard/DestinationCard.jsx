import React from 'react'
import './DestinationCard.css'
const DestinationCard = ({ image, title }) => {
  return (
    <div
      className="destination-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="destination-label">
        {title}
      </div>
    </div>
  );

}

export default DestinationCard
