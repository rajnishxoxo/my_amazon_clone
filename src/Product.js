import React from "react";
import "./Product.css";

function product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          The lean Startup
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>★</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
        alt=""
      ></img>

      <button>Add to basket</button>
    </div>
  );
}

export default product;
