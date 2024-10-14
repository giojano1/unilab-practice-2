import React from "react";
import Header from "../components/Global/Header";
import Hero from "../components/Home/Hero";
const Home = () => {
  return (
    <>
      <div className="bg ">
        <div className="bgImg max-w-[1440px] mx-auto w-full  max-h-[700px] max-800:max-h-max ">
          <Header />
          <Hero />
        </div>
      </div>
      <main></main>
    </>
  );
};

export default Home;
