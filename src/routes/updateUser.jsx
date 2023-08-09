import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import upload from "../assets/upload.png";
import AppBar from "../components/AppBar";
import Button from "../components/CustomButton";
import Input from "../components/CustomInputText";
import SelectRole from "../components/SelectRole";
import SideBar from "../components/SideBar";
import { getUserById, updateUserById } from "../redux/actions/userActions";
import "../styles/createUser.scss";

export default function UpdateUser() {
  const { search } = useLocation();
  const regexUserId = /userId=\d*/;
  const userId = regexUserId.exec(search)[0].replace("userId=", "");

  const [selectedImage, setSelectedImage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { data, loading } = useSelector((state) => state.users);

  const selectedUser = data.find((user) => user.id === Number(userId));

  const [role, setRole] = useState();

  const handleRole = (value) => {
    setRole(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const handleUpdate = () => {
    dispatch(
      updateUserById({
        userId,
        username: nameValue,
        email: emailValue,
        password: passwordValue,
        role: role.label,
      })
    );
    console.log(role);
  };

  return (
    <div className="update-product">
      <SideBar />
      <div className="right-screen">
        <AppBar />
        {!loading && selectedUser && (
          <div className="below-appbar" key={selectedUser.id}>
            <Breadcrumb fontWeight="medium" fontSize="sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="/product">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/user-list">User</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/create-user">Update User</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="update-product-bar">
              <div className="id">
                <h1>Update User #{selectedUser.id}</h1>
                <h2>User ID: {selectedUser.id}</h2>
              </div>
              <Button
                border="none"
                color="#FFD333"
                height="40px"
                onClick={handleUpdate}
                radius="5px"
                width="60px"
                children="Save"
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
                      placeholder={selectedUser.username}
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
                      placeholder={selectedUser.email}
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
                      placeholder="********"
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
                    <h2>Role</h2>
                    <div className="select-role">
                      <SelectRole
                        defaultValue={selectedUser.role}
                        onRole={handleRole}
                        value={role}
                      />
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
        )}
      </div>
    </div>
  );
}
