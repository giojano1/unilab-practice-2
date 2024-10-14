import React from "react";
import { adImg, playIcon, hero2Img } from "../../assets";
import ButtonLarge from "../Global/ButtonLarge";
import { useTranslation } from "react-i18next";

const Adv = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between  bg-primary rounded-[20px] bg-ad1 bg-cover bg-right  px-10 max-800:flex-col-reverse max-800:pt-10  max-500:px-4">
      <img
        src={hero2Img}
        alt="adv"
        className="w-[400px] max-1000:w-[300px] pt-10 max-450:w-full"
      />
      <div className=" text-right max-800:text-center max-800:w-full">
        <div>
          <h2 className="text-[50px] font-bold text-primary  leading-[65px] max-900:text-[40px] max-900:leading-[50px] max-700:text-[35px]">
            {t(`hero.h2`)}
          </h2>
          <h3 className="text-[40px] font-bold text-primary leading-[60px]  max-900:text-[30px] max-900:leading-10 max-700:text-[25px]">
            {t(`hero.h3`)}
          </h3>
        </div>
        <p className="max-w-[480px] text-neutral80 text-medium-16 leading-5 my-6 max-900:text-medium-14 max-900:max-w-[350px] max-800:max-w-full">
          {t(`hero.p`)}
        </p>
        <div className="flex gap-3.5 justify-end max-800:justify-center max-500:gap-2 whitespace-nowrap">
          <ButtonLarge variant="outline" title={t(`hero.button_1`)}>
            <img src={playIcon} alt="play" />
          </ButtonLarge>
          <ButtonLarge title={t(`hero.button_2`)}></ButtonLarge>
        </div>
      </div>
    </div>
  );
};

export default Adv;
