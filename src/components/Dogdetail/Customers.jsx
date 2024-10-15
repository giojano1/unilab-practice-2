import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { customers } from "../../constans";
import "swiper/css";
import "swiper/css/pagination";

const Customers = () => {
  return (
    <div className="my-20">
      <div className="my-4">
        <h2 className="text-bold-24 text-neutral100 ">Our lovely customer</h2>
      </div>
      <div className="my-5 max-650:my-1">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 20,
              loop: false,
            },
          }}
          className="mySwiper"
        >
          {customers.map((box) => (
            <SwiperSlide
              key={box.id}
              className="w-full bg-white h-[350px] my-2"
            >
              <img
                src={box.img}
                alt="boxImg"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;
