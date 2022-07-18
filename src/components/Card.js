import React from "react";
import Swim from "../images/swimming.png"
import Star from "../images/star.png"


export default function Card() {
    return (
        <div className="card">
            <img src={Swim} alt="swimming person" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="star icon" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) •  </span>
                <span className="gray"> USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136 / person</strong></p>
        </div>
    )
}