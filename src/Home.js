import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/e9/cf/60/e9cf607e5a6f19f73b3dd9b1716890bb.png"
        ></img>
      </div>

      <div className="home__row">
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default home;
