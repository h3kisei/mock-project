import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import upload from "../assets/upload.png";
import AppBar from "../components/AppBar";
import Button from "../components/CustomButton";
import Input from "../components/CustomInputText";
import SelectPaid from "../components/SelectPaid";
import SelectStatuss from "../components/SelectStatuss";
import SideBar from "../components/SideBar";
import { getOrderById, updateOrderById } from "../redux/actions/orderActions";
import "../styles/orderDetail.scss";
import createat from "../assets/createat.png";
import updateat from "../assets/updateat.png";
import deliver from "../assets/deliver.png";
import customer from "../assets/customer.png";
import order from "../assets/order.png";

export default function OrderDetail() {
  const { search } = useLocation();
  const regexOrderId = /orderId=\d*/;
  const orderId = regexOrderId.exec(search)[0].replace("orderId=", "");

  const { data, loading } = useSelector((state) => state.orders);

  const selectedOrder = data.find((order) => order.id === Number(orderId));

  const [statuss, setStatuss] = useState();
  const [paid, setPaid] = useState();

  const handlePaid = (value) => {
    setPaid(value);
  };
  const handleStatuss = (value) => {
    setStatuss(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId]);

  const handleUpdate = () => {
    dispatch(
      updateOrderById({
        orderId,
        status: statuss.label,
      })
    );
  };

  return (
    <div className="order-detail">
      <SideBar />
      <div className="right-screen">
        <AppBar />
        {!loading && selectedOrder && (
          <div className="below-appbar">
            <Breadcrumb fontWeight="medium" fontSize="sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="/order">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/order-list">Order</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/order-detail">
                  Order Detail
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="id">
              <h1>Order Detail #{selectedOrder.id}</h1>
              <h2>Order ID: {selectedOrder.id}</h2>
            </div>
            <div className="content">
              <div className="top-content">
                <div className="at">
                  <div className="date">
                    <img src={createat} alt="" />
                    <h1>Create at: {selectedOrder.createdAt}</h1>
                  </div>
                  <div className="date">
                    <img src={updateat} alt="" />
                    <h1>Update at: {selectedOrder.updatedAt}</h1>
                  </div>
                  <h2>Order ID: {selectedOrder.id}</h2>
                </div>
                <div className="update-order">
                  <div className="select">
                    <h2>Status</h2>
                    <div className="select-status">
                      <SelectStatuss
                        onLabel={
                          (selectedOrder.status = "Progressing"
                            ? "Progressing"
                            : "Shipping")
                        }
                        onStatuss={handleStatuss}
                        value={statuss}
                      />
                    </div>
                  </div>
                  <div className="select">
                    <h2>Paided</h2>
                    <div className="select-paid">
                      <SelectPaid
                        onLabel={(selectedOrder.isPaid = "true" ? "Yes" : "No")}
                        onPaid={handlePaid}
                        value={paid}
                      />
                    </div>
                  </div>
                  <Button
                    border="none"
                    color="#FFD333"
                    height="40px"
                    radius="5px"
                    width="150px"
                    children="Update Order"
                    fontSize="20px"
                    fontWeight="600"
                    marginTop="35px"
                    onClick={handleUpdate}
                  />
                </div>
              </div>
              <div className="mid-content">
                <div className="info">
                  <img
                    style={{ width: 75, height: 75 }}
                    src={customer}
                    alt=""
                  />
                  <div className="text-info">
                    <h1>Customer</h1>
                    <h2>Name:</h2>
                    <h2>Email</h2>
                    <h2>Phone</h2>
                  </div>
                </div>
                <div className="info">
                  <img style={{ width: 75, height: 75 }} src={order} alt="" />
                  <div className="text-info">
                    <h1>Order Info</h1>
                    <h2>Status: {selectedOrder.status}</h2>
                    <h2>Pay method: {selectedOrder.paymentMethod}</h2>
                    <h2>
                      Paided: {(selectedOrder.isPaid = "true" ? "Yes" : "No")}
                    </h2>
                  </div>
                </div>
                <div className="info">
                  <img style={{ width: 75, height: 75 }} src={deliver} alt="" />
                  <div className="text-info">
                    <h1>Deliver to</h1>
                    <h2>Address: {selectedOrder.address}</h2>
                    <h2>Contact: {selectedOrder.contact}</h2>
                    <h2>Shipper: GHTK</h2>
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
