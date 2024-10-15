import React, { useContext } from "react";
import Header from "../components/Global/Header";
import Adv from "../components/Category/Adv";
import DogGrid from "../components/Global/DogGrid";
import FilterHeader from "../components/Category/FilterHeader";
import Filters from "../components/Category/Filters";
import { DogShopContext } from "../context/DogShopContext";
import { arrowDownIcon } from "../assets";
import { Link } from "react-router-dom";
import Pagination from "../components/Category/Pagination";
const Category = () => {
  const { currentData } = useContext(DogShopContext);

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
              <DogGrid data={currentData} limit={15} />
            </div>
            <Pagination limit={15} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
