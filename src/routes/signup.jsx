import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/SideBar";

function Signup() {
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}>Button</MenuButton>
        <MenuList>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
        </MenuList>
      </Menu>
      <SideBar />
    </>
  );
}

export default Signup;
