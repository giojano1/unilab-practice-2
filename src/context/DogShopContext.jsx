import React, { createContext, useState } from "react";
import useFetchDogs from "../hooks/useFetchDogs";
import useFilteredDogs from "../hooks/useFilterDogs";
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
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = useFilteredDogs(data, filters, sortOption);
  const pageLimit = 15;
  const totalPages = Math.ceil(filteredData.length / pageLimit);
  const currentData = filteredData.slice(
    (currentPage - 1) * pageLimit,
    currentPage * pageLimit
  );
  return (
    <DogShopContext.Provider
      value={{
        data,
        loading,
        filters,
        setFilters,
        sortOption,
        setSortOption,
        filteredData,
        currentPage,
        setCurrentPage,
        totalPages,
        currentData,
      }}
    >
      {children}
    </DogShopContext.Provider>
  );
};
