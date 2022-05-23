import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ d }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${d.id}`)}
      className="item"
      style={{ border: "1px solid lightgray" }}
    >
      <img
        style={{ height: "150px", width: "150px" }}
        src="https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"
        className="productImage"
        alt="laptop_img"
      />
      <h4>{d.product_name}</h4>
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
        </Link>
      </span>
      <span className="productCategory">{d.category}</span>
      <br />
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${d.price}</span>
      <br />
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: {d.rating}</span>
      <br />
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
      {!d.isInCart ? <button>Add to cart</button> : <div>Already in Cart</div>}
    </div>
  );
}

export { Card };
