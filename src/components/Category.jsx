import menu from "../assets/menu1.png";
import right from "../assets/right.png";
import "../styles/category.scss";
import React from "react";

const Category = () => {
  return (
    <div className="category">
      <div className="title">
        <img src={menu} alt="" />
        <h1>Categories</h1>
      </div>
      <div className="menu">
        <div className="element">
          <h2>Computer</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Hand Tools</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Machine Tools</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Power Tools</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Storage Tools</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Clothes & PBE</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Electrical</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Building Tools</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Food</h2>
          <img src={right} alt="" />
        </div>
        <div className="element">
          <h2>Drink</h2>
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
