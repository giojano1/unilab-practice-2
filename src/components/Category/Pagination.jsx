import React, { useContext } from "react";
import { DogShopContext } from "../../context/DogShopContext";
import { arrowL } from "../../assets";
const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(DogShopContext);
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center my-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8"
      >
        <img src={arrowL} alt="arrow" />
      </button>
      <div className="flex gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`h-8 w-8 rounded-lg ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center"
      >
        <img src={arrowL} alt="arrow" className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
