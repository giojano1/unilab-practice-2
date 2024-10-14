import React, { useContext } from "react";
import Header from "../components/Global/Header";
import Hero from "../components/Home/Hero";
import DogList from "../components/Home/DogList";
import Adv from "../components/Home/Adv";
import { DogShopContext } from "../context/DogShopContext";

const Home = () => {
  const { data, loading, error } = useContext(DogShopContext);

  return (
    <>
      <div className="bg ">
        <div className="bgImg max-w-[1440px] mx-auto w-full  max-h-[700px] max-800:max-h-max ">
          <Header />
          <Hero />
        </div>
      </div>
      <main className="container">
        <section className="my-16 max-700:my-10">
          <DogList />
        </section>
        <section className="my-16 max-700:my-10 ">
          <Adv />
        </section>
      </main>
    </>
  );
};

export default Home;
