import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ component: Component }) => {
  const { isUser } = useContext(UserContext);
  return isUser ? <Navigate to="/" /> : <Component />;
};

export default PublicRoutes;
