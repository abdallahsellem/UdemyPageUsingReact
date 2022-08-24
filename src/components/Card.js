import React from "react";
import listStyles from "./StyleCard.module.css";
const Card = (props) => {
  console.log(props);
  return (
    <div className={listStyles.card}>
      <img src={props["image"]} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <span
          className="udlite-heading-sm StarRating--rating-number--2o8YM"
          aria-hidden="hidden"
          data-purpose="rating-number"
        ></span>
        <section className={listStyles.StarRating}>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <a>({props.people})</a>
        </section>
        <h5>{props.title}</h5>
        <h6>{props.price}</h6>
      </div>
    </div>
  );
};
export default Card;
