import React from 'react'
import { useState } from "react";
import "./Hero.css";
import { slides } from '../../assets/assets'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const Hero = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };
    return (
        <div className="hero">
            <div
                className="hero-slider"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        className="hero-slide"
                        key={index}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="overlay"></div>

                        <div className="hero-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <button className="hero-btn">SEND AN INQUIRY</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrow left" onClick={prevSlide}>
                <FaArrowLeftLong size={20} />
            </div>
            <div className="arrow right" onClick={nextSlide}>
                <FaArrowRightLong size={20} />
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={current === index ? "dot active" : "dot"}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero
