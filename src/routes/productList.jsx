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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sort from "../assets/sort.png";
import AppBar from "../components/AppBar";
import Button from "../components/CustomButton";
import Pagination from "../components/CustomPagination";
import SideBar from "../components/SideBar";
import {
  fetchProducts,
  searchListProducts,
  setCurrentPage,
  setKeyword,
  deleteProductByID,
} from "../redux/actions/productActions";
import "../styles/productList.scss";
import Input from "../components/CustomInputText";

let PAGE_SIZE = 5;

export default function ProductList() {
  const { data, loading, total, currentPage, keyword } = useSelector(
    (state) => ({
      ...state.products,
    })
  );
  const dispatch = useDispatch();

  const handleChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleKeywordPress = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  const handleDelete = (productId) => {
    dispatch(deleteProductByID(productId));
    console.log(productId);
  };

  useEffect(() => {
    if (!keyword) {
      dispatch(fetchProducts({ page: currentPage, size: PAGE_SIZE }));
    } else {
      dispatch(
        searchListProducts({
          keyword,
          page: currentPage,
          size: PAGE_SIZE,
        })
      );
    }
  }, [dispatch, currentPage, total]);

  const handleSearch = () => {
    dispatch(
      searchListProducts({
        keyword,
        page: currentPage,
        size: PAGE_SIZE,
      })
    );
  };

  return (
    <div className="productList">
      <SideBar />
      <div className="rightScreen">
        <AppBar />
        <div className="below-appbar">
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/product">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/product-list">Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="product-bar">
            <h1>Product</h1>
            <Button
              border="none"
              color="#FFD333"
              height="40px"
              onClick={() => console.log("New product!")}
              radius="5px"
              width="150px"
              children="New product"
              fontSize="20px"
              fontWeight="600"
            />
          </div>
          <div className="content">
            <div className="search">
              <Input
                type="text"
                name="search"
                placeholder="Search products"
                border="1px"
                borderColor="#C4C4C4"
                borderStyle="solid"
                width="1000px"
                height="50px"
                onChange={handleKeywordPress}
              />
              <IconButton
                onClick={handleSearch}
                aria-label="Search database"
                icon={<SearchIcon />}
              />
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
                        <h1>Product</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Brand</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Category</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Stock</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Price</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th>
                      <div className="th">
                        <h1>Rating</h1>
                        <img src={sort} alt="" />
                      </div>
                    </Th>
                    <Th isNumeric></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {!loading ? (
                    data.map((product) => {
                      return (
                        <tr className="tr" key={product.id}>
                          <td>{product.id}</td>
                          <td>
                            <div className="product">
                              <img
                                style={{ width: 60, height: 60 }}
                                src={product.images[0].url}
                                alt=""
                              />
                              <div className="info">
                                <h1>{product.name}</h1>
                                <h2>ID: {product.id}</h2>
                              </div>
                            </div>
                          </td>
                          <td>{product.brand}</td>
                          <td>{product.category}</td>
                          <td>{product.countInStock} items</td>
                          <td>{product.price}</td>
                          <td>{product.rating}</td>
                          <td>
                            <div className="icon-button">
                              <IconButton
                                aria-label="Edit Product"
                                variant="unstyled"
                                icon={<EditIcon />}
                              />
                              <IconButton
                                aria-label="Delete Product"
                                variant="unstyled"
                                onClick={() => handleDelete(product.id)}
                                icon={<DeleteIcon />}
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
