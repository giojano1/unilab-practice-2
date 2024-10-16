import React, { useState } from "react";
import { dogImg } from "../../assets";
const ChatBox = () => {
  const [chatInfo, setChatInfo] = useState([]);
  const [question, setQuestion] = useState("");
  const handleAddQuestion = () => {
    if (question.trim() !== "") {
      setChatInfo((prev) => [...prev, { desc: question }]);
      setQuestion("");
    }
  };
  return (
    <div className="mt-10">
      <div className="mb-10">
        <div className="w-[400px] mt-5">
          <p className="bg-primary p-4 text-white text-regular-14 rounded-xl rounded-bl-none leading-5 ml-7 mb-[1px]">
            Rapidly build stunning Web Apps with Frest 🚀 Developer friendly,
            Highly customizable & Carefully crafted HTML Admin Dashboard
            Template.
          </p>
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <img
              src={dogImg}
              alt="dog"
              className="w-12 h-12 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="w-[400px] ml-auto mt-5">
          <p className="bg-[#F7DBA7] p-4 text-black text-regular-14 rounded-xl rounded-br-none leading-5 mr-7 mb-[1px]">
            Rapidly build stunning Web Apps with Frest 🚀 Developer friendly,
            Highly customizable & Carefully crafted HTML Admin Dashboard
            Template.
          </p>
        </div>
        {chatInfo.length > 0 &&
          chatInfo.map((box) => (
            <div key={box.desc}>
              <div className="w-[400px] ml-auto mt-5">
                <p className="bg-[#F7DBA7] p-4 text-black text-regular-14 rounded-xl rounded-br-none leading-5 mr-7 mb-[1px]">
                  {box.desc}
                </p>
              </div>
              <div className="w-[400px] mt-5">
                <p className="bg-primary p-4 text-white text-regular-14 rounded-xl rounded-bl-none leading-5 ml-7 mb-[1px]">
                  For more info please contact us with Email
                </p>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <img
                    src={dogImg}
                    alt="dog"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="py-5 flex items-center ">
        <label className=" flex-1">
          <input
            type="text"
            placeholder="Type your message here..."
            value={question}
            className="bg-[#E8EBF0] w-full h-12 p-4 rounded-xl rounded-r-none outline-none"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <button
          onClick={handleAddQuestion}
          className="bg-primary text-white h-12 text-regular-14 w-20 rounded-xl rounded-l-none"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
