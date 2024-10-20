import React from "react";
import { Routes, Route } from "react-router-dom";
import { DogShopProvider } from "./context/DogShopContext";
import { UserProvider } from "./context/UserContext";
import PublicRoutes from "./components/Routes/PublicRoutes";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import Home from "./pages/Home";
import Category from "./pages/Category";
import DogDetail from "./pages/DogDetail";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Contact from "./pages/Contact";
import Forgot from "./pages/Forgot";
import ResetPassword from "./pages/ResetPassword";
const App = () => {
  return (
    <DogShopProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dog/:id" element={<DogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<PublicRoutes component={SignIn} />} />
          <Route path="/chat" element={<PrivateRoutes component={Chat} />} />
          <Route
            path="/register"
            element={<PublicRoutes component={Register} />}
          />
          <Route path="/forgot" element={<PublicRoutes component={Forgot} />} />
          <Route
            path="/resetpassword/:id"
            element={<PublicRoutes component={ResetPassword} />}
          />
        </Routes>
      </UserProvider>
    </DogShopProvider>
  );
};

export default App;
