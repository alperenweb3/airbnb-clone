import React from "react";
import "./styles/Card.css";
import star from "./images/star.svg";

function Card(props) {
  let cardStatus;
  if(props.data.openSpots === 0){
    cardStatus = "Sold Out";
  }
  else{
    cardStatus = "Online";
  }

  return (

        <div className="card">

          <div className="card__img-container">
            <img src={process.env.PUBLIC_URL + "/images/" + props.data.coverImg} alt="Swimmer" className="card__img" />
            <div className="card__status">{cardStatus}</div>
          </div>

          <div className="card__body">

            <div className="card__rating">
              <img src={star} alt="" className="card__star" />
              <span className="card__rating-point">{props.data.stats.rating}</span>
              <span className="card__rating-comment-count">({props.data.stats.reviewCount})</span>
              <span className="card__location">{props.data.location}</span>
            </div>

            <p className="card__title">{props.data.title}</p>
            <p className="card__price">
              From ${props.data.price}<span className="card__price-for"> / person</span>
            </p>
          </div>

        </div>

  );
}

export default Card;
