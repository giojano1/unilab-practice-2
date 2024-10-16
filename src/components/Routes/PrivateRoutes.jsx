import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ component: Component }) => {
  const { isUser } = useContext(UserContext);

  return isUser ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
