import React from "react";
import Header from "../components/Global/Header";
import Hero from "../components/Home/Hero";
const Home = () => {
  return (
    <>
      <div className="bg h-screen">
        <div className="bgImg h-full">
          <Header />
          <Hero />
        </div>
      </div>
      <main></main>
    </>
  );
};

export default Home;
