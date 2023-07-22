import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  searchListProducts,
  setCurrentPage,
} from "../redux/actions/productActions";
import Pagination from "../components/CustomPagination";

let PAGE_SIZE = 10;

export default function ProductList() {
  const { data, loading, total, currentPage, keyword } = useSelector(
    (state) => ({
      ...state.products,
    })
  );

  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleKeywordPress = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, size: PAGE_SIZE }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(
      searchListProducts({
        keyword: searchKeyword,
        page: currentPage,
        size: PAGE_SIZE,
      })
    );
  }, [dispatch, currentPage, keyword]);

  return (
    <>
      <form className="form-inline">
        <div className="col-auto">
          <input
            type="text"
            value={searchKeyword}
            onChange={handleKeywordPress}
            className="form-control"
            placeholder="Từ khoá"
          />
        </div>
        <button
          type="button"
          onClick={() =>
            dispatch(
              searchListProducts({
                keyword: searchKeyword,
                page: currentPage,
                size: PAGE_SIZE,
              })
            )
          }
          className="btn btn-primary my-1"
        >
          Tìm kiếm
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            data.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                </tr>
              );
            })
          ) : (
            <tr />
          )}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={total}
        pageSize={PAGE_SIZE}
        onPageChange={handleChangePage}
      />
    </>
  );
}
