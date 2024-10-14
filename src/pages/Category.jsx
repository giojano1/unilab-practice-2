import React from "react";
import Header from "../components/Global/Header";
import Adv from "../components/Category/Adv";
const Category = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Adv />
        </section>
      </main>
    </>
  );
};

export default Category;
