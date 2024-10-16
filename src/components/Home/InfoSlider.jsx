import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { arrowDownIcon } from "../../assets";
import { usefulInfo } from "../../constans/index";
import "swiper/css";

const InfoSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <div
        className="flex justify-between items-center
      "
      >
        <div>
          <span className="text-regular-24 leading-6 max-700:text-regular-14">
            You already know ?
          </span>
          <h2 className="text-bold-24 leading-[36px] text-primary mt-0.5 max-700:text-bold-20 max-700:mt-0">
            Useful pet knowledge
          </h2>
        </div>
        <div className="flex items-center gap-5 max-650:hidden">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-transparent border border-primary !text-primary flex items-center h-11 px-7  text-medium-16 rounded-[57px] gap-2"
          >
            <img
              src={arrowDownIcon}
              alt="arrow down"
              className="transform rotate-90"
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-transparent border border-primary !text-primary flex items-center h-11 px-7  text-medium-16 rounded-[57px] gap-2"
          >
            <img
              src={arrowDownIcon}
              alt="arrow down"
              className="transform -rotate-90"
            />
          </button>
        </div>
      </div>
      <div className="my-5 max-650:my-1">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          breakpoints={{
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
              loop: false,
            },
          }}
          className="mySwiper"
        >
          {usefulInfo.map((box) => (
            <SwiperSlide
              key={box.id}
              className="w-full bg-white h-[460px] my-2  rounded-xl p-2 shadow"
            >
              <div className="w-full h-[240px]">
                <img
                  src={box.img}
                  alt="boxImg"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="my-4 px-2">
                <div className="bg-blueSea w-[140px] flex justify-center items-center h-6 rounded-[28px] text-white my-2">
                  <span className="text-bold-16 ">Pet knowledge</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-bold-16 text-neutral100">{box.title}</h3>
                </div>
                <div className="mt-3">
                  <p className="text-regular-14 text-neutral80 leading-5">
                    {box.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InfoSlider;
