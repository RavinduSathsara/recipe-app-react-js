import React from "react";

const FoodCard = () => {
  return (
    <div>
      <div className="card myCard">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-text"> Hello World</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
