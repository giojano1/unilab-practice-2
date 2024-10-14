import React from "react";
import { Routes, Route } from "react-router-dom";
import { DogShopProvider } from "./context/DogShopContext";
import Home from "./pages/Home";
const App = () => {
  return (
    <DogShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DogShopProvider>
  );
};

export default App;
