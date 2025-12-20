import React from 'react'
import './Destination.css'
import DestinationCard from '../DestinationCard/DestinationCard'
import { destinations } from "../../assets/assets";

const Destination = () => {
  return (
    <div className="popular-section" id='destination'>
      <h2>Popular Destinations</h2>

      <div className="destination-grid">
        {destinations.map((item, index) => (
          <DestinationCard
            key={index}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>

      <button className="view-all-btn">VIEW ALL TRIPS</button>

    </div>
  )
}

export default Destination
