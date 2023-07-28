import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductList from "./routes/productList.jsx";
import Login from "./routes/login.jsx";
import UserList from "./routes/userList.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Register from "./routes/register.jsx";

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
        <Route path="/user-list" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
