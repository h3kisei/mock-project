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
  Tr
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sort from "../assets/sort.png";
import AppBar from "../components/AppBar";
import Button from "../components/CustomButton";
import Input from "../components/CustomInputText";
import Pagination from "../components/CustomPagination";
import SideBar from "../components/SideBar";
import {
  deleteUserByID, fetchUsers,
  setCurrentPage
} from "../redux/actions/userActions";
import "../styles/productList.scss";

let PAGE_SIZE = 5;

export default function UserList() {
  const { data, loading, total, currentPage } = useSelector((state) => ({
    ...state.users,
  }));
  const dispatch = useDispatch();

  const handleChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };
  const handleDelete = (userId) => {
    dispatch(deleteUserByID(userId));
  };

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, size: PAGE_SIZE }));
  }, [dispatch, currentPage]);

  return (
    <div className="productList">
      <SideBar />
      <div className="rightScreen">
        <AppBar />
        <div className="below-appbar">
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/user-list">User</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="product-bar">
            <h1>User</h1>
            <Button
              border="none"
              color="#FFD333"
              height="40px"
              onClick={() => console.log("New product!")}
              radius="5px"
              width="150px"
              children="New User"
              fontSize="20px"
              fontWeight="600"
            />
          </div>
          <div className="content">
            <div className="search">
              <Input
                type="text"
                name="search"
                placeholder="Search Users"
                border="1px"
                borderColor="#C4C4C4"
                borderStyle="solid"
                width="1000px"
                height="50px"
              />
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
            </div>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>
                      <div className="th">
                        <h1>ID</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>User</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Contact</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Status</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Verify Email</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Verify Contact</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th isNumeric></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {!loading ? (
                    data.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>
                            <div className="product">
                              <img
                                style={{ width: 60, height: 60 }}
                                src={user.avatar}
                                alt=""
                              />
                              <div className="info">
                                <Link to={`/user-detail?userId=${user.id}`}>
                                  <h1>{user.username}</h1>
                                </Link>
                                <h2>{user.email}</h2>
                              </div>
                            </div>
                          </td>
                          <td>{user.contact}</td>
                          <td>
                            {user.isActive === true ? "Active" : "Disable"}
                          </td>
                          <td>
                            {user.isEmailVerified === true ? "Yes" : "No"}
                          </td>
                          <td>
                            {user.isContactVerified === true ? "Yes" : "No"}
                          </td>
                          <td>
                            <div className="icon-button">
                              <Link to={`/update-user?userId=${user.id}`}>
                                <IconButton
                                  aria-label="Edit User"
                                  variant="unstyled"
                                  icon={<EditIcon />}
                                />
                              </Link>
                              <IconButton
                                aria-label="Delete User"
                                variant="unstyled"
                                icon={<DeleteIcon />}
                                onClick={() => handleDelete(user.id)}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr />
                  )}
                </Tbody>
              </Table>
            </TableContainer>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={total}
              pageSize={PAGE_SIZE}
              onPageChange={handleChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
