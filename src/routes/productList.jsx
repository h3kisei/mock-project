import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postAction.js";

export default function ProductList() {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            posts.map((post) => {
              return (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.brand}</td>
                  <td>{post.category}</td>
                  <td>{post.description}</td>
                </tr>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </tbody>
      </table>
    </>
  );
}
