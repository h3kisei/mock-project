import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductList from "./routes/productList.jsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
