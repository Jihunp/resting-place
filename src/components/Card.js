import React from "react";
import Swim from "../images/swimming.png"
import Star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            {/* <img src={`./images/${props.img}`} alt="swimming person" className="card--image" /> */}
            <img src={Swim} alt="swimming person" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="star icon" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •  </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price} / person</strong></p>
        </div>
    )
}