import React from "react";
import { useTranslation } from "react-i18next";
import { heroImg, playIcon } from "../../assets";
import ButtonLarge from "../Global/ButtonLarge";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/category");
  };
  return (
    <section className="flex items-center justify-between container my-10 max-800:flex-col max-800:my-5 max-650:my-3">
      <div className="flex-1">
        <div>
          <h2 className="text-[50px] font-bold text-primary  leading-[65px] max-900:text-[40px] max-900:leading-[50px]">
            {t(`hero.h2`)}
          </h2>
          <h3 className="text-[40px] font-bold text-primary leading-[60px]  max-900:text-[30px] max-900:leading-10">
            {t(`hero.h3`)}
          </h3>
        </div>
        <p className="max-w-[480px] text-neutral80 text-medium-16 leading-5 my-6 max-900:text-medium-14 max-900:max-w-[350px] max-800:max-w-full">
          {t(`hero.p`)}
        </p>
        <div className="flex gap-3.5">
          <ButtonLarge variant="outline" title={t(`hero.button_1`)}>
            <img src={playIcon} alt="play" />
          </ButtonLarge>
          <ButtonLarge
            func={handleNavigate}
            title={t(`hero.button_2`)}
          ></ButtonLarge>
        </div>
      </div>
      <div className="w-[500px] max-1000:w-[450px] max-850:w-[400px] max-450:w-full max-800:mt-6">
        <img src={heroImg} alt="hero" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
