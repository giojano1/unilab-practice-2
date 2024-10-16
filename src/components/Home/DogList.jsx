import React, { useContext } from "react";
import ButtonLarge from "../Global/ButtonLarge";
import DogGrid from "../Global/DogGrid";
import { DogShopContext } from "../../context/DogShopContext";
import { arrowDownIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const DogList = () => {
  const { data } = useContext(DogShopContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/category");
  };
  return (
    <div>
      <div
        className="flex justify-between items-center
      "
      >
        <div>
          <span className="text-regular-24 leading-6 max-700:text-regular-14">
            Whats new?
          </span>
          <h2 className="text-bold-24 leading-[36px] text-primary mt-0.5 max-700:text-bold-20 max-700:mt-0">
            Take a look at some of our pets
          </h2>
        </div>
        <div className="max-700:hidden">
          <ButtonLarge
            func={handleNavigate}
            title="View More"
            variant="outline"
          >
            <img
              src={arrowDownIcon}
              alt="arrow down"
              className="transform -rotate-90"
            />
          </ButtonLarge>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 my-7 max-900:grid-cols-3 max-700:grid-cols-2 max-700:gap-4 max-500:gap-3 max-700:my-4">
        <DogGrid data={data} limit={8} />
      </div>
      <div className="hidden max-700:block w-full">
        <ButtonLarge
          func={handleNavigate}
          title="View More"
          variant="outline"
          width="full"
        >
          <img
            src={arrowDownIcon}
            alt="arrow down"
            className="transform -rotate-90"
          />
        </ButtonLarge>
      </div>
    </div>
  );
};

export default DogList;
