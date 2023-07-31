import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sort from "../assets/sort.png";
import AppBar from "../components/AppBar";
import Button from "../components/CustomButton";
import Pagination from "../components/CustomPagination";
import SideBar from "../components/SideBar";
import { createUser } from "../redux/actions/userActions";
import "../styles/createUser.scss";
import Input from "../components/CustomInputText";
import NumberInputStock from "../components/NumberInputStock";
import NumberInputPrice from "../components/NumberInputPrice";
import upload from "../assets/upload.png";
import SelectRole from "../components/SelectRole";
import CategoriesSelect from "../components/SelectCategory";

export default function UpdateProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { users } = useSelector((state) => ({
    ...state.users,
  }));

  const [role, setRole] = useState();

  const handleRole = (value) => {
    setRole(value);
  };

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(
      createUser({
        username: nameValue,
        email: emailValue,
        password: passwordValue,
        role: role.label,
      })
    );
    console.log(role.label);
  };

  return (
    <div className="updateProduct">
      <SideBar />
      <div className="rightScreen">
        <AppBar />
        <div className="below-appbar">
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/product">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/user-list">User</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/create-user">Create User</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="update-product-bar">
            <h1>Create User</h1>
            <Button
              border="none"
              color="#FFD333"
              height="40px"
              onClick={handleCreate}
              radius="5px"
              width="150px"
              children="Add product"
              fontSize="20px"
              fontWeight="600"
            />
          </div>
          <div className="content">
            <div className="left-content">
              <div className="top-left">
                <h1>User information</h1>
              </div>
              <div className="bot-left">
                <div className="input">
                  <h2>Name</h2>
                  <Input
                    type="text"
                    name="name"
                    border="1px"
                    borderColor="#929395"
                    borderStyle="solid"
                    radius="2px"
                    width="620px"
                    height="40px"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </div>
                <div className="input">
                  <h2>Email</h2>
                  <Input
                    type="email"
                    name="email"
                    border="1px"
                    borderColor="#929395"
                    borderStyle="solid"
                    radius="2px"
                    width="620px"
                    height="40px"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
                <div className="input">
                  <h2>Password</h2>
                  <Input
                    type="password"
                    name="password"
                    border="1px"
                    borderColor="#929395"
                    borderStyle="solid"
                    radius="2px"
                    width="620px"
                    height="40px"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                </div>
                <div className="input">
                  <h2>Retype password</h2>
                  <Input
                    type="password"
                    name="retype password"
                    border="1px"
                    borderColor="#929395"
                    borderStyle="solid"
                    radius="2px"
                    width="620px"
                    height="40px"
                  />
                </div>
                <div className="input">
                  <h2>Retype password</h2>
                  <div className="select-role">
                    <SelectRole onRole={handleRole} value={role} />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="images">
                <div className="top-images">
                  <h1>Images</h1>
                </div>
                <div className="bot-images">
                  {selectedImage ? (
                    <div>
                      <img
                        alt="not found"
                        width={"150px"}
                        height={"150px"}
                        src={URL.createObjectURL(selectedImage)}
                      />
                    </div>
                  ) : (
                    <img src={upload} alt="" />
                  )}
                  <Input
                    border="1px"
                    borderColor="#929395"
                    borderStyle="solid"
                    radius="2px"
                    width="390px"
                    height="40px"
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setSelectedImage(event.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
