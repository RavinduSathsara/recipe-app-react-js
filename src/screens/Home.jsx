import React from "react";
import FoodCard from "../components/FoodCard";

const Home = () => {
  return (
    <div className="container">
      <input
        className="form-control m-5"
        placeholder="Search Food"
        type="text"
      />
      <div className="row">
        <div className="col-md-4">
          <FoodCard /> <FoodCard />
          <FoodCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
