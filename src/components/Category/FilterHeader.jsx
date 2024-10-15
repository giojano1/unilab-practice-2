import React, { useContext, useState } from "react";
import ButtonLarge from "../Global/ButtonLarge";
import { DogShopContext } from "../../context/DogShopContext";
import { arrowDownIcon } from "../../assets";
const FilterHeader = () => {
  const { data, setSortOption } = useContext(DogShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [option, setOption] = useState("Default");
  const handleFilterToggle = () => {
    setShowFilter((prev) => !prev);
  };
  const handleSort = (option, title) => {
    setSortOption(option);
    setOption(title);
    setShowFilter((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <h2 className="text-bold-24 text-primary">Dogs</h2>
        <span>{data.length} puppies</span>
      </div>
      <div className="relative min-w-[160px]">
        <ButtonLarge
          title={option}
          variant="outline"
          h="2"
          func={handleFilterToggle}
        >
          <img src={arrowDownIcon} alt="arrow down" />
        </ButtonLarge>
        {showFilter && (
          <div className="absolute bg-white w-full text-medium-14 border p-4 text-neutral60 shadow">
            <button
              onClick={() =>
                handleSort("priceLowToHigh", "Price : Low to High")
              }
            >
              Price : Low to High
            </button>
            <button
              onClick={() =>
                handleSort("priceHighToLow", "Price : High to Low")
              }
              className="mt-2.5"
            >
              Price : High to Low
            </button>
            <button
              onClick={() => handleSort("popularity", "  Sort by Popular")}
              className="mt-2.5"
            >
              Sort by Popular
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterHeader;
