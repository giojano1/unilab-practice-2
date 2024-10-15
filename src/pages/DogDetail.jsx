import React from "react";
import Header from "../components/Global/Header";
import Details from "../components/Dogdetail/Details";
import Customers from "../components/Dogdetail/Customers";
import Featured from "../components/Dogdetail/Featured";
import Footer from "../components/Global/Footer";
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
        <section className="container">
          <Featured />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DogDetail;
