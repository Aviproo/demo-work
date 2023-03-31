import React from "react";
import shopkaimg from "../assets/shopkaimg.png";
const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search_item">
        <img src={shopkaimg} className="shopka" />
      </div>
      <div className="search_item">
        <div>Sell on Shopka</div>
      </div>
      <div className="search_item">Register</div>
      <div className="search_item">
        <input placeholder="Search Here" className="search" />
      </div>
      <div className="search_item">
        <div className="customer">Customer Electronics</div>
      </div>
      <div className="search_item">
        <button className="sign">Sign In</button>
      </div>
      <div className="search_item">
        <button className="sign">My Cart</button>
      </div>
    </div>
  );
};

export default Searchbar;
