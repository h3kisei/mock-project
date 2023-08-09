import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductList from "./routes/productList.jsx";
import Login from "./routes/login.jsx";
import UserList from "./routes/userList.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Register from "./routes/register.jsx";
import OrderList from "./routes/orderList.jsx";
import UpdateProduct from "./routes/updateProduct.jsx";
import CreateProduct from "./routes/createProduct.jsx";
import CreateUser from "./routes/createUser";
import UpdateUser from "./routes/updateUser.jsx";
import UserDetail from "./routes/userDetail.jsx";
import OrderDetail from "./routes/orderDetail.jsx";
import ProductDetail from "./routes/productDetail.jsx";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-list"
          element={
            <PrivateRoute roles={["admin"]}>
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-list"
          element={
            <PrivateRoute roles={["admin"]}>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-detail"
          element={
            <PrivateRoute roles={["admin"]}>
              <UserDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-product"
          element={
            <PrivateRoute roles={["admin"]}>
              <UpdateProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-user"
          element={
            <PrivateRoute roles={["admin"]}>
              <UpdateUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-product"
          element={
            <PrivateRoute roles={["admin"]}>
              <CreateProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-detail"
          element={
            <PrivateRoute roles={["admin"]}>
              <OrderDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-user"
          element={
            <PrivateRoute roles={["admin"]}>
              <CreateUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-list"
          element={
            <PrivateRoute roles={["admin"]}>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
         <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
