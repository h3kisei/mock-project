import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tag,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
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
import { getProductWithReviews } from "../redux/actions/productActions";
import "../styles/productDetail.scss";
import MainBar from "../components/MainBar";
import Rating from "../components/Rating";
import red from "../assets/red.png";
import black from "../assets/black.png";
import blue from "../assets/blue.png";
import yellow from "../assets/yellow.png";
import cart from "../assets/addtocart.png";
import QuantityInput from "../components/QuantityInput";
import Pagination from "../components/CustomPagination";

let PageSize = 5;

export default function ProductDetail() {
  const { search } = useLocation();
  const regexProductId = /productId=\d*/;
  const productId = regexProductId.exec(search)[0].replace("productId=", "");

  const { data, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedProduct = data.find(
    (product) => product.product.id === Number(productId)
  );

  const reviews = selectedProduct?.reviews;
  console.log(reviews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductWithReviews(productId));
  }, [dispatch, productId]);

  return (
    <div className="product-detail">
      <MainBar />
      <div className="content">
        {!loading && selectedProduct && (
          <div>
            <Breadcrumb fontWeight="medium" fontSize="sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  {selectedProduct.product.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{selectedProduct.product.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="product" key={selectedProduct.product.id}>
              <img
                style={{ width: 480, height: 480 }}
                src={selectedProduct.product.images[0].url}
                alt=""
              />
              <div className="info">
                <div className="top-info">
                  <h1>{selectedProduct.product.name}</h1>
                  <div className="rating">
                    <Rating count={5} value={selectedProduct.product.rating} />
                    <h3>|</h3>
                    <h2>{selectedProduct.product.numOfReviews} Reviews</h2>
                    <h3>|</h3>
                    <h2>{selectedProduct.product.countInStocks} Sold</h2>
                  </div>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ornare, mi in ornare elementum, libero nibh
                    lacinia urna, quis convallis lorem erat at purus. Maecenas
                    eu varius nisi
                  </h3>
                </div>
                <div className="bot-info">
                  <div className="avai">
                    <h1>Availability: In stock</h1>
                    <h1>Brand: {selectedProduct.product.brand}</h1>
                    <h1>SKU: 83690/32</h1>
                  </div>
                  <div className="cost">
                    <h1>$ {selectedProduct.product.price}</h1>
                    <Tag>50% Off</Tag>
                  </div>
                  <div className="select-color">
                    <h1>Select Color</h1>
                    <div className="color">
                      <img
                        style={{ width: 28, height: 28 }}
                        src={blue}
                        alt=""
                      />
                      <img style={{ width: 28, height: 28 }} src={red} alt="" />
                      <img
                        style={{ width: 28, height: 28 }}
                        src={black}
                        alt=""
                      />
                      <img
                        style={{ width: 28, height: 28 }}
                        src={yellow}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="quantity">
                    <h1>Quantity:</h1>
                    <div className="number">
                      <QuantityInput />
                      <Button
                        border="none"
                        color="#FFD333"
                        height="40px"
                        radius="5px"
                        width="150px"
                        children="Add to Cart"
                        fontSize="16px"
                        fontWeight="700"
                      />
                    </div>
                  </div>
                  <div className="rate">
                    <h1>Rate:</h1>
                    <Rating count={5} value={selectedProduct.product.rating} />
                  </div>
                </div>
              </div>
            </div>
            <div className="reviews">
              <Tabs variant="enclosed" align="center">
                <TabList>
                  <Tab
                    _selected={{
                      color: "black",
                      bg: "blue.500",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Description
                  </Tab>
                  <Tab
                    _selected={{
                      color: "black",
                      bg: "green.400",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Specification
                  </Tab>
                  <Tab
                    _selected={{
                      color: "black",
                      bg: "#E7E2E2",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Reviews
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <h1>Customer Reviews</h1>
                      {!loading &&
                        reviews?.result?.length &&
                        reviews.result.map((review) => {
                          return (
                            <div key={review.content}>{review.content}</div>
                          );
                        })}

                      <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={reviews.total}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                      />
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
