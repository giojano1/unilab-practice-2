import React, { useState, useEffect } from "react";

const Countdown = ({ endingDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = new Date(endingDate).getTime() - now;

      if (distance > 0) {
        let dayForm = 24 * 60 * 60 * 1000;
        let hourForm = 60 * 60 * 1000;
        let secondForm = 60 * 1000;
        let milsecForm = 1000;

        let days = Math.floor(distance / dayForm);
        let hours = Math.floor((distance % dayForm) / hourForm);
        let minutes = Math.floor((distance % hourForm) / secondForm);
        let seconds = Math.floor((distance % secondForm) / milsecForm);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endingDate]);

  const options = [
    {
      id: 1,
      title: "DAYS",
      value: timeLeft.days,
    },
    {
      id: 2,
      title: "HOURS",
      value: timeLeft.hours,
    },
    {
      id: 3,
      title: "MINUTES",
      value: timeLeft.minutes,
    },
    {
      id: 4,
      title: "SECONDS",
      value: timeLeft.seconds,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-[48px] font-bold text-primary max-750:text-[30px]">
          Big Summer Event
        </h2>
      </div>
      <div>
        <div className="flex justify-between items-center gap-8 mt-8 max-900:flex-wrap max-900:gap-4">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-primary w-[24%] rounded-lg shadow-md h-[200px] flex items-center justify-center flex-col max-900:w-[48%] max-450:h-[150px] max-450:w-[47%]"
            >
              <h3 className="text-[64px] text-white font-bold max-500:text-[40px]">
                {option.value}
              </h3>
              <span className="text-regular-16 text-white mt-2 max-450:text-regular-14">
                {option.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
