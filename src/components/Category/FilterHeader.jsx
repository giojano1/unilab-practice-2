import React, { useContext } from "react";
import ButtonLarge from "../Global/ButtonLarge";
import { DogShopContext } from "../../context/DogShopContext";
import { arrowDownIcon } from "../../assets";
const FilterHeader = () => {
  const { data } = useContext(DogShopContext);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <h2 className="text-bold-24 text-primary">Dogs</h2>
        <span>{data.length} puppies</span>
      </div>
      <div>
        <ButtonLarge title="Sort by popular" variant="outline" h="2">
          <img src={arrowDownIcon} alt="arrow down" />
        </ButtonLarge>
      </div>
    </div>
  );
};

export default FilterHeader;
