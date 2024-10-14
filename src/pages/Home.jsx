import React, { useContext } from "react";
import Header from "../components/Global/Header";
import Hero from "../components/Home/Hero";
import DogList from "../components/Home/DogList";
import Adv from "../components/Home/Adv";
import { DogShopContext } from "../context/DogShopContext";
import InfoSlider from "../components/Home/InfoSlider";
import Countdown from "../components/Home/Countdown";

const Home = () => {
  const { data, loading, error } = useContext(DogShopContext);
  const targetDate = "2024-10-31T23:59:59";
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
        <section className="my-16 max-700:my-10 ">
          <InfoSlider />
        </section>
        <section className="my-16 max-700:my-10 ">
          <Countdown endingDate={targetDate} />
        </section>
      </main>
    </>
  );
};

export default Home;
