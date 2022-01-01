import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const Home = () => {
  const AppId = "cf4f9486";
  const AppKey = "c4878490c89ff0e78b40116db340994b";

  // const exaampleReq = `https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="container">
      <form className="m-4">
        <input className="form-control" type="text" />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
