import React from "react";
import Header from "../components/Global/Header";
import Details from "../components/Dogdetail/Details";
import Customers from "../components/Dogdetail/Customers";
const DogDetail = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Details />
        </section>
        <section className="container">
          <Customers />
        </section>
      </main>
    </>
  );
};

export default DogDetail;
