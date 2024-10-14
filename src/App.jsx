import React from "react";
import { Routes, Route } from "react-router-dom";
import { DogShopProvider } from "./context/DogShopContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
const App = () => {
  return (
    <DogShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </DogShopProvider>
  );
};

export default App;
