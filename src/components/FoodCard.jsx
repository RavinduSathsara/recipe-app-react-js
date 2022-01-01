import React from "react";

const FoodCard = (props) => {
  return (
    <div>
      <div className="card myCard m-2">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-text"> {props.title}</h3>
          <p className="card-text">{props.calories}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
