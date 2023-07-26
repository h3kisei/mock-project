import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductList from "./routes/productList.jsx";
import Login from "./routes/login.jsx";
import UserList from "./routes/userList.jsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
