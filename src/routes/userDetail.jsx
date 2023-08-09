import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tag,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import { getUserById } from "../redux/actions/userActions";
import "../styles/userDetail.scss";
import check from "../assets/check.png";

export default function UserDetail() {
  const { search } = useLocation();
  const regexUserId = /userId=\d*/;
  const userId = regexUserId.exec(search)[0].replace("userId=", "");
  const { data, loading } = useSelector((state) => state.users);
  const selectedUser = data.find((user) => user.id === Number(userId));
  console.log(selectedUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  return (
    <div className="user-detail">
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
                <BreadcrumbLink href="/create-user">User Detail</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="title">
              <div className="id">
                <h1>User Detail #{selectedUser.id}</h1>
                <h2>User ID: {selectedUser.id}</h2>
              </div>
            </div>
            <div className="content">
              <div className="top-content">
                <div className="info">
                  <img
                    style={{ width: 240, height: 240 }}
                    className="image"
                    src={selectedUser.avatar}
                    alt=""
                  />
                  <h1>{selectedUser.username}</h1>
                  <h2>{selectedUser.email}</h2>
                  <h3>{selectedUser.contact}</h3>
                </div>
              </div>
              <div className="bot-content">
                <div className="role">
                  <h4>Role:</h4>
                  <Tag>{selectedUser.role === "admin" ? "Admin" : "User"}</Tag>
                </div>
                <div className="role">
                  <h4>Status:</h4>
                  <Tag>
                    {selectedUser.isActive === true ? "Active" : "Disable"}
                  </Tag>
                </div>
                <div className="verify">
                  <h4>Verify Email:</h4>
                  <Tag>
                    {selectedUser.isEmailVerified === true ? (
                      <img src={check} alt="" />
                    ) : (
                      <span>X</span>
                    )}
                  </Tag>
                </div>
                <div className="verify">
                  <h4>Verify Contact:</h4>
                  <Tag>
                    {selectedUser.isContactVerified === true ? (
                      <img src={check} alt="" />
                    ) : (
                      <span>X</span>
                    )}
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
