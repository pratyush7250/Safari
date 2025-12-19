import React, { useRef } from "react";
import "./Trip.css";
import TripCard from "../TripCard/TripCard";
import { tripData } from "../../assets/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Trip = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <div className="trip-section">
      {/* Header */}
      <div className="trip-header">
       <div className="title">
         <h2>Booked While You Were Scrolling</h2>
       </div>

        <div className="trip-arrows">
          <button onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <button onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="trip-slider" ref={sliderRef}>
        {tripData.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>

      
        <button className="view-all-btn">VIEW ALL TRIPS</button>
      
    </div>
  );
};

export default Trip;
