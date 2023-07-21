import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/postProducts.js";
import Pagination from "../components/CustomPagination";
import SearchBar from "../components/SearchBar";

let PageSize = 3;

export default function ProductList() {
  const { products, loading } = useSelector((state) => ({ ...state.data }));
  console.log(products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastPost = currentPage * PageSize;
  // const indexOfFirstPost = indexOfLastPost - PageSize;
  // const filterProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
      />
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
            products.map((product) => {
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
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
