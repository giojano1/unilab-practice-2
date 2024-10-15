import React, { useContext } from "react";
import { DogShopContext } from "../../context/DogShopContext";
import { colorFilters, sizeFilters } from "../../constans";
const Filters = () => {
  const { filters, setFilters, setCurrentPage } = useContext(DogShopContext);
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const filterCategory = prevFilters[name];
      if (checked) {
        return {
          ...prevFilters,
          [name]: [...filterCategory, value],
        };
      } else {
        return {
          ...prevFilters,
          [name]: filterCategory.filter((item) => item !== value),
        };
      }
    });
    setCurrentPage(1);
  };
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: { ...prevFilters.price, [name]: value },
    }));
    setCurrentPage(1);
  };
  return (
    <section>
      <div>
        <h2 className="text-bold-24 text-primary">Filter</h2>
      </div>
      <div>
        <div className="mt-3.5">
          <h3 className="text-bold-16 text-neutral100">Gender</h3>
          <div className="flex flex-col mt-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="gender"
                value="Male"
                onChange={handleCheckboxChange}
                className="h-4 w-4 "
              />

              <span className="text-medium-14 text-neutral100 ml-2">Male</span>
            </label>
            <label className="mt-2.5 flex items-center">
              <input
                type="checkbox"
                name="gender"
                value="Female"
                onChange={handleCheckboxChange}
                className="h-4 w-4 "
              />
              <span className="text-medium-14 text-neutral100 ml-2">
                Female
              </span>
            </label>
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral20 my-4"></div>
        <div>
          <h3 className="text-bold-16 text-neutral100">Color</h3>
          <div className="flex flex-col mt-3 gap-3">
            {colorFilters.map((color) => (
              <div key={color.name}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="color"
                    value={color.filter}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 "
                  />
                  <div
                    className={`w-[15px] h-[15px] rounded-full ml-2.5 ${color.style}`}
                  ></div>
                  <span className="ml-2.5 text-medium-14 text-neutral100">
                    {color.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral20 my-4"></div>
        <div>
          <h3 className="text-bold-16 text-neutral100">Price</h3>
          <div className="flex items-center mt-3 gap-3">
            <input
              type="number"
              name="min"
              placeholder="Min"
              value={filters.price.min}
              onChange={handlePriceChange}
              className="w-[48%] shadow-sm text-medium-14 text-neutral80 h-10 p-2.5 focus:outline-none"
            />
            <input
              type="number"
              name="max"
              placeholder="Max"
              value={filters.price.max}
              onChange={handlePriceChange}
              className="w-[48%] shadow-sm text-medium-14 text-neutral80 h-10 p-2.5 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral20 my-4"></div>
        <div>
          <h3 className="text-bold-16 text-neutral100">Breed</h3>
          <div className="flex flex-col mt-3 gap-3">
            {sizeFilters.map((size) => (
              <div key={size.name}>
                <label>
                  <input
                    type="checkbox"
                    name="size"
                    value={size.name}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 "
                  />
                  <span className="ml-2.5 text-medium-14 text-neutral100">
                    {size.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral20 my-4"></div>
      </div>
    </section>
  );
};

export default Filters;
