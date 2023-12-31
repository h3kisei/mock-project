import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import upload from "../assets/upload.png";
import AppBar from "../components/AppBar";
import Button from "../components/CustomButton";
import Input from "../components/CustomInputText";
import NumberInputPrice from "../components/NumberInputPrice";
import NumberInputStock from "../components/NumberInputStock";
import SelectCategory from "../components/SelectCategory";
import SelectRating from "../components/SelectRating";
import SideBar from "../components/SideBar";
import {
  getProductById,
  updateProductById,
} from "../redux/actions/productActions";
import "../styles/updateProduct.scss";

export default function UpdateProduct() {
  const { search } = useLocation();
  const regexProductId = /productId=\d*/;
  const productId = regexProductId.exec(search)[0].replace("productId=", "");

  const [selectedImage, setSelectedImage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [priceValue, setPriceValue] = useState();
  const [brandValue, setBrandValue] = useState("");
  const { data, loading } = useSelector((state) => state.products);

  const selectedProduct = data.find(
    (product) => product.id === Number(productId)
  );

  const [selected, setSelected] = useState();

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handlePrice = (value) => {
    setPriceValue(value);
  };

  const handleStock = (value) => {
    setStockValue(value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const handleUpdate = () => {
    dispatch(
      updateProductById({
        productId,
        name: nameValue,
        description: descriptionValue,
        countInStock: stockValue,
        brand: brandValue,
        price: priceValue,
        category: selected.label,
      })
    );
  };

  return (
    <div className="update-product">
      <SideBar />
      <div className="right-screen">
        <AppBar />
        {!loading && selectedProduct && (
          <div className="below-appbar" key={selectedProduct.id}>
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
              <div className="id">
                <h1>Update Product #{selectedProduct.id}</h1>
                <h2>Product ID: {selectedProduct.id}</h2>
              </div>
              <Button
                border="none"
                color="#FFD333"
                height="40px"
                radius="5px"
                width="60px"
                children="Save"
                fontSize="20px"
                fontWeight="600"
                onClick={handleUpdate}
              />
            </div>
            <div className="content">
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
                      placeholder={selectedProduct.name}
                      value={nameValue}
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
                      placeholder={selectedProduct.description}
                      value={descriptionValue}
                      onChange={(e) => setDescriptionValue(e.target.value)}
                    />
                  </div>
                  <div className="number-input">
                    <div className="input">
                      <h2>Price</h2>
                      <NumberInputPrice
                        defaultValue={selectedProduct.price}
                        onPrice={handlePrice}
                        value={priceValue}
                      />
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
                      placeholder={selectedProduct.brand}
                      value={brandValue}
                      onChange={(e) => setBrandValue(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <h2>Stock Quantity</h2>
                    <NumberInputStock
                      defaultValue={selectedProduct.countInStock}
                      onStock={handleStock}
                      value={stockValue}
                    />
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
                    <SelectCategory onSelect={handleSelect} value={selected} />
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
          </div>
        )}
      </div>
    </div>
  );
}
