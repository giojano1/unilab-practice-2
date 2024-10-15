import React, { useContext } from "react";
import DogGrid from "../Global/DogGrid";
import { DogShopContext } from "../../context/DogShopContext";
const Featured = () => {
  const { data } = useContext(DogShopContext);

  return (
    <div className="my-20">
      <div>
        <h3 className="text-medium-16 ">Whats new?</h3>
        <h2 className="text-bold-24 text-primary mt-3">See More Puppies</h2>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-5 max-900:grid-cols-2 ">
        <DogGrid data={data} limit={4} />
      </div>
    </div>
  );
};

export default Featured;
