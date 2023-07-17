import menu from "../assets/menu.png";
import search from "../assets/search.png";
import notify from "../assets/notify.png";
import ava from "../assets/ava.png";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import "../styles/appBar.scss";

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-bar-left">
        <img src={menu} alt="" />
        <div className="search">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <img src={search} alt="" />
            </InputLeftElement>
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
        </div>
      </div>
      <div className="app-bar-right">
        <img src={notify} alt="" />
        <div className="user">
          <img style={{ width: 40, height: 40 }} src={ava} alt="" />
          <div className="info">
            <span>Nam Nguyen</span>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
