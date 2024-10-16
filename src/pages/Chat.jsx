import React from "react";
import ChatBox from "../components/Chat/ChatBox";
import { dogImg } from "../assets";
const Chat = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <section className="container h-[400px]">
        <img
          src={dogImg}
          alt="dog"
          className="w-full h-full object-cover object-top"
        />
      </section>
      <section className="container ">
        <ChatBox />
      </section>
    </main>
  );
};

export default Chat;
