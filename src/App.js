import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
