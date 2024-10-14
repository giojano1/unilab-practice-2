import React, { createContext } from "react";
import useFetchDogs from "../hooks/useFetchDogs";
export const DogShopContext = createContext();

export const DogShopProvider = ({ children }) => {
  const { data, loading, error } = useFetchDogs();

  return (
    <DogShopContext.Provider value={{ data, loading }}>
      {children}
    </DogShopContext.Provider>
  );
};
