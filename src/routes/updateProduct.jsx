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
import { getProductById } from "../redux/actions/productActions";
import "../styles/updateProduct.scss";
import Input from "../components/CustomInputText";
import NumberInputStock from "../components/NumberInputStock";
import NumberInputPrice from "../components/NumberInputPrice";
import upload from "../assets/upload.png";
import SelectRating from "../components/SelectRating";

export default function UpdateProduct(productId) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [priceValue, setPriceValue] = useState();
  const [brandValue, setBrandValue] = useState("");
  const { data, loading } = useSelector((state) => ({
    ...state.product,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(productId));
    console.log(productId);
  }, [dispatch, productId]);

  return (
    <div className="updateProduct">
      <SideBar />
      <div className="rightScreen">
        <AppBar />
        <div className="below-appbar">
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/product-list">Product</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/update-product">
                Update Product
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="update-product-bar">
            <h1>Update Product</h1>
            <Button
              border="none"
              color="#FFD333"
              height="40px"
              radius="5px"
              width="150px"
              children="Add product"
              fontSize="20px"
              fontWeight="600"
            />
          </div>
          {!loading ? (
            data.map((product) => {
              return (
                <div className="content" key={product.id}>
                  <div className="left-content">
                    <div className="top-left">
                      <h1>Basic information</h1>
                    </div>
                    <div className="bot-left">
                      <div className="input">
                        <h2>Name</h2>
                        <Input
                          type="text"
                          name="search"
                          border="1px"
                          borderColor="#929395"
                          borderStyle="solid"
                          radius="2px"
                          width="620px"
                          height="40px"
                          value={product.name}
                          onChange={(e) => setNameValue(e.target.value)}
                        />
                      </div>
                      <div className="input">
                        <h2>Description</h2>
                        <Input
                          type="text"
                          name="search"
                          border="1px"
                          borderColor="#929395"
                          borderStyle="solid"
                          radius="2px"
                          width="620px"
                          height="110px"
                          value={product.description}
                          onChange={(e) => setDescriptionValue(e.target.value)}
                        />
                      </div>
                      <div className="number-input">
                        <div className="input">
                          <h2>Price</h2>
                          <NumberInputPrice defaultValue={product.price} />
                        </div>
                        <div className="input">
                          <h2>Discount Percent</h2>
                          <NumberInputPrice />
                        </div>
                      </div>
                      <div className="input">
                        <h2>Brand</h2>
                        <Input
                          type="text"
                          name="search"
                          border="1px"
                          borderColor="#929395"
                          borderStyle="solid"
                          radius="2px"
                          width="620px"
                          height="40px"
                          value={product.brand}
                          onChange={(e) => setBrandValue(e.target.value)}
                        />
                      </div>
                      <div className="input">
                        <h2>Stock Quantity</h2>
                        <NumberInputStock defaultValue={product.countInStock} />
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
                    <div className="categories">
                      <div className="top-categories">
                        <h1>Categories</h1>
                      </div>
                      <div className="bot-categories">
                        <SelectRating />
                      </div>
                    </div>
                    <div className="rating">
                      <div className="top-rating">
                        <h1>Rating</h1>
                      </div>
                      <div className="bot-rating">
                        <SelectRating />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
