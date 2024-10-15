import React, { useContext, useState } from "react";
import ButtonLarge from "../Global/ButtonLarge";
import { DogShopContext } from "../../context/DogShopContext";
import { arrowDownIcon, filterIcon } from "../../assets";
import Filters from "./Filters";
const FilterHeader = () => {
  const { data, setSortOption } = useContext(DogShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [showFilterBox, setShowFilterBox] = useState(false);
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
    <>
      <div className="flex items-center justify-between w-full max-700:flex-col-reverse max-700:items-start relative">
        <div className="flex items-center gap-4 max-700:mt-6">
          <h2 className="text-bold-24 text-primary">Dogs</h2>
          <span>{data.length} puppies</span>
        </div>
        <div className=" flex  items-center justify-between max-700:w-full ">
          <div className=" min-w-[160px]">
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
          <div className="hidden max-700:block  ">
            <button
              onClick={() => setShowFilterBox((prev) => !prev)}
              className="flex items-center gap-2"
            >
              <img src={filterIcon} alt="filter icon" />
              <span className="text-bold-16 text-primary">Filter</span>
            </button>
          </div>
        </div>
        {showFilterBox && (
          <div className="absolute top-10 left-0 bg-white p-4 w-full hidden max-700:block">
            <Filters />
          </div>
        )}
      </div>
    </>
  );
};

export default FilterHeader;
