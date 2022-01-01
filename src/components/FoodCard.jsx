import React from "react";

const FoodCard = (props) => {
  return (
    <div className=" card myCard m-2">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-text"> {props.title}</h3>
        <h4>ingredients :</h4>
        <ol className="card-text">
          {props.ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p className="card-text"> calories : {props.calories}</p>
      </div>
    </div>
  );
};

export default FoodCard;
