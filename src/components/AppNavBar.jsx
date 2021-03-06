import React, { useState } from "react";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  const [active, setActive] = useState(0); // set active for nav items

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
        <div className="container-fluid">
          <Link
            onClick={() => {
              setActive(0);
            }}
            className="navbar-brand"
            to="/"
          >
            Recipe App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setActive(0);
                  }}
                  className={
                    active === 0 ? "nav-link active text-primary" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setActive(1);
                  }}
                  className={
                    active === 1 ? "nav-link active text-primary" : "nav-link"
                  }
                  to="/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
