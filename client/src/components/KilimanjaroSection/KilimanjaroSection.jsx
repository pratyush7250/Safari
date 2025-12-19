import React from "react";
import "./KilimanjaroSection.css";
import { kilimanjaroData } from "../../assets/assets";
import { RiSecurePaymentLine } from "react-icons/ri";

import {
    FaStar,
    FaLock,
    FaRegCalendarAlt,
    FaRegClock,
    FaPlay,
} from "react-icons/fa";

import TripCard from "../TripCard/TripCard";

const KilimanjaroSection = () => {
    return (
        <section className="kili-wrapper">
            {/* TOP RATING BAR */}
            <div className="rating-bar">
                <span>
                    RATED 4.7/5{" "}
                    <span className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>{" "}
                    BASED ON 25,000 VERIFIED REVIEWS
                </span>
            </div>

            {/* BOOK WITH CONFIDENCE */}
            <div className="confidence">
                <h2>Book With Confidence</h2>

                <div className="confidence-items">
                    <div className="confidence-item">
                        <div className="icon">
                            <FaLock size={18} />
                        </div>
                        <p>Lock in your spot with a $200 deposit</p>
                    </div>

                    <div className="confidence-item">
                        <div className="icon">
                            <FaRegClock  size={18} />
                        </div>
                        <p>Pay monthly or bi-weekly</p>
                    </div>

                    <div className="confidence-item">
                        <div className="icon">

                            <FaRegCalendarAlt  size={18} />
                        </div>
                        <p>Amend your booking up to 60 days pre-trip</p>
                    </div>

                    <div className="confidence-item">
                        <div className="icon">
                            <RiSecurePaymentLine size={20} />
                        </div>
                        <p>Plans changed? Your payments are protected</p>
                    </div>
                </div>

                <button className="confidence-btn">FIND OUT MORE</button>
            </div>

            {/* KILIMANJARO TREKKING */}
            <div className="kili-trekking">
                <h2>Kilimanjaro Trekking</h2>

                <div className="kili-grid">
                    {kilimanjaroData.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>

                <button className="kili-btn">EXPLORE KILIMANJARO</button>
            </div>
        </section>
    );
};

export default KilimanjaroSection;
