import "../styles/mainBar.scss";
import search from "../assets/search.png";
import menu from "../assets/menu.png";
import cart from "../assets/Cart-vector.png";
import user from "../assets/UserItem.png";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";

const MainBar = () => {
  return (
    <>
      <TopBar />
      <div className="main-bar">
        <h1>SHOP APP</h1>
        <div className="main-bar-mid">
          <div className="categories">
            <img src={menu} alt="" />
            <h2>Categories</h2>
          </div>
          <div className="search">
            <h3>Search Item</h3>
            <img style={{ width: 28, height: 28 }} src={search} alt="" />
          </div>
        </div>
        <img src={cart} alt="" />
        <div>
          <Link to="/login">
            <IconButton
              aria-label="User"
              variant="outline"
              icon={<img src={user} alt="" />}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainBar;
