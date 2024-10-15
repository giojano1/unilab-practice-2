import React, { useContext } from "react";
import { DogShopContext } from "../../context/DogShopContext";
const Pagination = ({ data }) => {
  const { dogs } = useContext(DogShopContext);

  return <div>Pagination</div>;
};

export default Pagination;
