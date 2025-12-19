import React from 'react'
import './PopularWay.css'
import PopularWayCard from '../PopularWayCard/PopularWayCard';
import { wayData } from "../../assets/assets";

const PopularWay = () => {
    return (
        <div className="popular-way-container">
            <h2>Popular Way To Go</h2>

            <div className="popular-way-grid">
                {wayData.map((item, index) => (
                    <PopularWayCard
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

export default PopularWay
