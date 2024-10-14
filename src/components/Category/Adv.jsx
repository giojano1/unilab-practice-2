import React from "react";
import { play2Icon, playIcon, hero3Img } from "../../assets";
import ButtonLarge from "../Global/ButtonLarge";
import { useTranslation } from "react-i18next";

const Adv = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between bg-[#fceed5] bg-ad2 rounded-[20px] bg-[length:60%_100%] bg-no-repeat bg-right  px-10 max-850:flex-col-reverse  max-850:pt-0  max-500:px-4 max-850:bg-[length:100%_30%] max-850:bg-bottom">
      <img
        src={hero3Img}
        alt="adv"
        className="w-[550px] pt-20 max-1100:w-[500px] max-1050:w-[450px] object-contain object-bottom max-900:w-[400px] max-850:w-full max-850:pt-0 "
      />
      <div className=" text-right max-850:text-center max-850:w-full py-10 max-750:py-5">
        <div>
          <h2 className="text-[50px] font-bold text-white  leading-[65px] max-1000:text-[40px] max-1000:leading-[50px] max-700:text-[35px]  max-850:text-primary">
            {t(`hero.h2`)}
          </h2>
          <h3 className="text-[40px] font-bold text-white leading-[60px]  max-1000:text-[30px] max-1000:leading-10 max-700:text-[25px] max-850:text-primary">
            {t(`hero.h3`)}
          </h3>
        </div>
        <p className="max-w-[480px] text-white text-medium-16 leading-5 my-6 max-1000:text-medium-14 max-1000:max-w-[350px] max-850:max-w-full max-850:text-primary">
          {t(`hero.p`)}
        </p>
        <div className="flex gap-3.5 justify-end max-850:justify-center max-500:gap-2 whitespace-nowrap max-850:hidden">
          <ButtonLarge variant="outline2" title={t(`hero.button_1`)}>
            <img src={play2Icon} alt="play" />
          </ButtonLarge>
          <ButtonLarge
            variant="default2"
            title={t(`hero.button_2`)}
          ></ButtonLarge>
        </div>
        <div className=" gap-3.5 justify-end max-850:justify-center max-500:gap-2 whitespace-nowrap hidden max-850:flex">
          <ButtonLarge variant="outline" title={t(`hero.button_1`)}>
            <img src={playIcon} alt="play" />
          </ButtonLarge>
          <ButtonLarge
            variant="default"
            title={t(`hero.button_2`)}
          ></ButtonLarge>
        </div>
      </div>
    </div>
  );
};

export default Adv;
