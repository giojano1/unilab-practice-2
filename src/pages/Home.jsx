import React from "react";
import Header from "../components/Global/Header";
import Hero from "../components/Home/Hero";
import DogList from "../components/Home/DogList";
import Adv from "../components/Home/Adv";
import InfoSlider from "../components/Home/InfoSlider";
import Countdown from "../components/Home/Countdown";
import Footer from "../components/Global/Footer";

const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="bg-hero bg-cover max-w-[1440px] mx-auto w-full  max-h-[700px] max-800:max-h-max ">
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
          <Countdown />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
