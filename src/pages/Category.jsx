import React, { useContext } from "react";
import Header from "../components/Global/Header";
import Adv from "../components/Category/Adv";
import DogGrid from "../components/Global/DogGrid";
import FilterHeader from "../components/Category/FilterHeader";
import Filters from "../components/Category/Filters";
import { DogShopContext } from "../context/DogShopContext";
import { arrowDownIcon } from "../assets";
import { Link } from "react-router-dom";
const Category = () => {
  const { data, filters } = useContext(DogShopContext);
  const filteredData = data.filter((dog) => {
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

  return (
    <>
      <Header />
      <main>
        <section className="container">
          <div className="flex items-center gap-2 my-3">
            <Link to="/" className="text-medium-14 text-neutral60">
              Home
            </Link>
            <img
              src={arrowDownIcon}
              alt="arrow"
              className="transform -rotate-90"
            />
            <span className="text-medium-14 text-neutral60">Dog</span>
          </div>
          <Adv />
        </section>
        <section className="container flex mt-8">
          <div className="w-[280px] ">
            <Filters />
          </div>
          <div className="ml-5 flex-1  w-full">
            <FilterHeader />
            <div className=" my-6 grid grid-cols-3 gap-5 max-900:grid-cols-3 max-700:grid-cols-2 max-700:gap-4 max-500:gap-3 ">
              <DogGrid data={filteredData} limit={15} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
