import React, { createContext, useState } from "react";
import useFetchDogs from "../hooks/useFetchDogs";
export const DogShopContext = createContext();

export const DogShopProvider = ({ children }) => {
  const { data, loading } = useFetchDogs();
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    price: { min: "", max: "" },
    size: [],
  });
  const [sortOption, setSortOption] = useState("default");
  return (
    <DogShopContext.Provider
      value={{ data, loading, filters, setFilters, sortOption, setSortOption }}
    >
      {children}
    </DogShopContext.Provider>
  );
};
