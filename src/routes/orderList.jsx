import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sort from "../assets/sort.png";
import AppBar from "../components/AppBar";
import Input from "../components/CustomInputText";
import Pagination from "../components/CustomPagination";
import SideBar from "../components/SideBar";
import {
  fetchOrders,
  setCurrentPage,
  deleteOrderByID,
} from "../redux/actions/orderActions";
import "../styles/productList.scss";
import { Link } from "react-router-dom";

let PAGE_SIZE = 5;

export default function UserList() {
  const { data, loading, total, currentPage } = useSelector((state) => ({
    ...state.orders,
  }));
  const dispatch = useDispatch();

  const handleChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleDelete = (orderId) => {
    dispatch(deleteOrderByID(orderId));
  };

  useEffect(() => {
    dispatch(fetchOrders({ page: currentPage, size: PAGE_SIZE }));
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
              <BreadcrumbLink href="/user-list">Order</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="product-bar">
            <h1>Order</h1>
          </div>
          <div className="content">
            <div className="search">
              <Input
                type="text"
                name="search"
                placeholder="Search Orders"
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
                        <h1>User ID</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Amount</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Address</h1>
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
                        <h1>Date</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Paided</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Status</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th isNumeric></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {!loading &&
                    data.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.userId}</td>
                          <td>{order.totalPrice}</td>
                          <td>{order.address}</td>
                          <td>{order.contact}</td>
                          <td>{order.createdAt}</td>
                          <td>
                            <Tag
                              colorScheme={
                                order.isPaid === true ? "#FFD333" : "#366AB8"
                              }
                            >
                              {order.isPaid === true ? "Yes" : "No"}
                            </Tag>
                          </td>
                          <td>{order.status}</td>
                          <td>
                            <div className="group-ib">
                              <div className="icon-button">
                                <Link to={`/order-detail?orderId=${order.id}`}>
                                  <IconButton
                                    aria-label="Edit Product"
                                    variant="unstyled"
                                    icon={<EditIcon />}
                                  />
                                </Link>
                              </div>
                              <div className="icon-button">
                                <IconButton
                                  aria-label="Delete Product"
                                  variant="unstyled"
                                  onClick={() => handleDelete(order.id)}
                                  icon={<DeleteIcon />}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
