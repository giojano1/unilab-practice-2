import React from "react";
import Header from "../components/Global/Header";
import Details from "../components/Dogdetail/Details";
const DogDetail = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Details />
        </section>
      </main>
    </>
  );
};

export default DogDetail;
