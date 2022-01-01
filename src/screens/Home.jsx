import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const Home = () => {
  const AppId = "cf4f9486";
  const AppKey = "c4878490c89ff0e78b40116db340994b";

  // const exaampleReq = `https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`
    );
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <form onSubmit={getSearch} className="m-4">
        <div className="row">
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              value={search}
              onChange={updateSearch}
              placeholder="Search Recipes here eg : Banana"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {recipes.map((recipe) => (
            <FoodCard
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
