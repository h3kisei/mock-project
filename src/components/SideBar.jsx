import dashboard from "../assets/Vector.png";
import product from "../assets/database.png";
import user from "../assets/user.png";
import orders from "../assets/shopping-cart.png";
import settings from "../assets/settings.png";
import arrow from "../assets/arrow-down.png";
import { Tag } from "@chakra-ui/react";
import "../styles/sideBar.scss";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-top">
        <h1>SHOP APP</h1>
        <Tag>ADMIN</Tag>
      </div>
      <div className="side-bar-bot">
        <div className="application">
          <h3>APPLICATION</h3>
        </div>
        <div className="dashboard">
          <img src={dashboard} alt="" />
          <h2>Dashboard</h2>
        </div>
        <div className="side-bar-element">
          <div className="left">
            <img src={product} alt="" />
            <h2>Product</h2>
          </div>
          <img src={arrow} alt="" />
        </div>
        <div className="side-bar-element-drop">
          <Link to="/product-list">
            <h2>Product List</h2>
          </Link>
        </div>
        <div className="side-bar-element-drop">
          <Link to="/create-product">
            <h2>Add Product</h2>
          </Link>
        </div>
        <div className="side-bar-element">
          <div className="left">
            <img src={user} alt="" />
            <h2>User</h2>
          </div>
          <img src={arrow} alt="" />
        </div>
        <div className="side-bar-element-drop">
          <Link to="/user-list">
            <h2>User List</h2>
          </Link>
        </div>
        <div className="side-bar-element-drop">
          <Link to="/create-user">
            <h2>Add User</h2>
          </Link>
        </div>
        <Link to="/order-list">
          <div className="dashboard">
            <img src={orders} alt="" />
            <h2>Orders</h2>
          </div>
        </Link>
        <div className="side-bar-element">
          <div className="left">
            <img src={settings} alt="" />
            <h2>Settings</h2>
          </div>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
