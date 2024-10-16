import React from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Form from "../components/Contact/Form";
const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
