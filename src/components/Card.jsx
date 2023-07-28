import { Tag } from "@chakra-ui/react";
import addcart from "../assets/addcart.png";
import { fetchProducts } from "../redux/actions/productActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/card.scss";
import { FaStar } from "react-icons/fa";

const Card = () => {
  const { data, loading } = useSelector((state) => ({
    ...state.products,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, size: 100 }));
  }, [dispatch]);
  return (
    <div className="list-card">
      <div className="card">
        {!loading ? (
          data.map((product) => {
            return (
              <div className="in-card" key={product.id}>
                <img
                  style={{ width: 250, height: 200 }}
                  src={product.images[0].url}
                  alt=""
                />
                <div className="content-card">
                  <h1>{product.name}</h1>
                  <h2>ID: {product.id}</h2>
                  <div className="rating-row">
                    <h3>{product.rating}</h3>
                    <span>50% Off</span>
                  </div>
                  <div className="price-row">
                    <h4>$ {product.price}</h4>
                    <img src={addcart} alt="" />
                  </div>
                  <Tag colorScheme="green">Available</Tag>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Hoang</h1>
        )}
      </div>
    </div>
  );
};

export default Card;
