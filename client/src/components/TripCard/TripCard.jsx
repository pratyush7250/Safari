import React from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaGlobe,
  FaSearch
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import "./TripCard.css";

const TripCard = ({ trip }) => {

  if (trip.blackFriday) {
    return (
      <div className="trip-card black-friday-card">
        <img src={trip.image} alt="Black Friday" />

        <div className="black-friday-overlay">
          <h2>
            <span className="bf-black">BLACK</span>
            <span className="bf-friday">FRIDAY</span>
          </h2>

          <p>{trip.description}</p>

          <button className="btn-trip">BOOK NOW</button>
        </div>
      </div>
    );
  }

  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={trip.image} alt={trip.title} />

        <div className="quick-view">
          <FaSearch />
          <span>Quick View</span>
        </div>
      </div>

      <div className="trip-content">
        <div className="header rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="rating-text">{trip.rating}</span>
        </div>

        <h3>{trip.title}</h3>

        <div className="trip-meta">
          <span><MdAccessTime /> {trip.days} Days</span>
          <span><FaMapMarkerAlt /> {trip.places} Places</span>
          <span><FaGlobe /> {trip.country} Country</span>
        </div>

        <p className="trip-desc">{trip.description}</p>
      </div>

      <div className="trip-footer">
        <div className="price">
          <span className="label">Standard Price</span>
          <span className="old-price">${trip.standardPrice}</span>
          <span className="from">From ${trip.fromPrice}</span>
        </div>

        <button className="btn-trip">VIEW TRIP</button>
      </div>
    </div>
  );
};

export default TripCard;
