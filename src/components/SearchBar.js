import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/actions/postProducts";

const SearchBar = ({ search, setSearch, onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search, dispatch]);

  return (
    <header>
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
