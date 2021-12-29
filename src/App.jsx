import React from "react";
import AppNavBar from "./components/AppNavBar";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Categories from "./screens/Categories";
const App = () => {
  return (
    <div>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
    </div>
  );
};

export default App;
