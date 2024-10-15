import React from "react";
import { Routes, Route } from "react-router-dom";
import { DogShopProvider } from "./context/DogShopContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
import DogDetail from "./pages/DogDetail";
const App = () => {
  return (
    <DogShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dog/:id" element={<DogDetail />} />
      </Routes>
    </DogShopProvider>
  );
};

export default App;
