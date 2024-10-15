import { useEffect, useState } from "react";

const useFilteredDogs = (data, filters, sortOption) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let tempData = data;
    tempData = tempData.filter((dog) => {
      const genderMatch =
        filters.gender.length === 0 || filters.gender.includes(dog.gender);
      const colorMatch =
        filters.color.length === 0 || filters.color.includes(dog.color);
      const sizeMatch =
        filters.size.length === 0 || filters.size.includes(dog.size);
      const priceMatch =
        (filters.price.min === "" || dog.price >= filters.price.min) &&
        (filters.price.max === "" || dog.price <= filters.price.max);

      return genderMatch && colorMatch && sizeMatch && priceMatch;
    });

    const sortData = (data) => {
      if (sortOption === "priceLowToHigh") {
        return [...data].sort((a, b) => a.price - b.price);
      } else if (sortOption === "priceHighToLow") {
        return [...data].sort((a, b) => b.price - a.price);
      } else if (sortOption === "popularity") {
        return [...data].sort((a, b) => b.popularity - a.popularity);
      }
      return data;
    };

    setFilteredData(sortData(tempData));
  }, [data, filters, sortOption]);
  return filteredData;
};

export default useFilteredDogs;
