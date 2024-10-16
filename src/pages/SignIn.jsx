import React from "react";
import Header from "../components/Global/Header";
import Login from "../components/Auth/Login";
import Footer from "../components/Global/Footer";
const SignIn = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Login />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
