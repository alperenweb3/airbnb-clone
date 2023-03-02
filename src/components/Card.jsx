import React from "react";
import "./styles/Card.css";
import swimmer from "./images/swimmer.png";
import star from "./images/star.svg";

function Card() {
  return (
    <div className="container">
      <div className="card__wrapper">
        <div className="card">

          <div className="card__img-container">
            <img src={swimmer} alt="Swimmer" className="card__img" />
            <div className="card__status">sold out</div>
          </div>

          <div className="card__body">

            <div className="card__rating">
              <img src={star} alt="" className="card__star" />
              <span className="card__rating-point">5.0</span>
              <span className="card__rating-comment-count">(6)</span>
              <span className="card__location">USA</span>
            </div>

            <p className="card__title">Life lessons with Katie Zaferes</p>
            <p className="card__price">
              From $136<span className="card__price-for"> / person</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
