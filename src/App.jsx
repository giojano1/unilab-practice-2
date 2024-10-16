import React from "react";
import { Routes, Route } from "react-router-dom";
import { DogShopProvider } from "./context/DogShopContext";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
import DogDetail from "./pages/DogDetail";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
const App = () => {
  return (
    <DogShopProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dog/:id" element={<DogDetail />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserProvider>
    </DogShopProvider>
  );
};

export default App;
