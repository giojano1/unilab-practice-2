import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DogShopContext } from "../../context/DogShopContext";
import {
  arrowDownIcon,
  chatIcon,
  dogdet2Icon,
  dogdetIcon,
  shareIcon,
} from "../../assets";
import { socialLinks } from "../../constans/index";
import ButtonLarge from "../Global/ButtonLarge";
const Details = () => {
  const { data, loading } = useContext(DogShopContext);
  const { id } = useParams();
  if (loading) return <p>loading</p>;
  const pageData = data[id];
  const details = [
    {
      title: "SKU",
      value: pageData.sku,
    },
    {
      title: "Gender",
      value: pageData.gender,
    },
    {
      title: "Age",
      value: pageData.age,
    },
    {
      title: "Size",
      value: pageData.size,
    },
    {
      title: "Color",
      value: pageData.color,
    },
    {
      title: "Vaccinated",
      value: pageData.vaccinated,
    },
    {
      title: "Dewormed",
      value: pageData.dewormed,
    },
    {
      title: "Cert",
      value: pageData.cert,
    },
    {
      title: "Microchip",
      value: pageData.microchip,
    },
    {
      title: "Location",
      value: pageData.location,
    },
    {
      title: "Published Date",
      value: pageData.publishedDate,
    },
    {
      title: "Additional Information",
      value: pageData.additionalInfo,
    },
  ];

  return (
    <div className="border border-neutral10 rounded-[20px] p-[22px] flex justify-between  max-800:flex-col max-700:p-2.5">
      <div className="w-[560px] max-1100:w-[500px] max-950:w-[400px] max-900:w-full">
        <div className="w-full">
          <img
            src={pageData.img}
            alt="dog"
            className="w-full object-contain rounded-[10px]"
          />
        </div>
        <div className="flex max-800:hidden items-center justify-between my-6 bg h-12 px-3 rounded-lg max-1100:flex-col max-1100:items-start max-1100:justify-center max-1100:gap-3 max-1100:h-20">
          <div className="flex items-center gap-2">
            <img
              src={dogdetIcon}
              alt="dogdet"
              className="w-6 h-6 object-contain"
            />
            <span className="text-bold-14 text-primary">
              100% health guarantee for pets
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={dogdet2Icon}
              alt="dogdet"
              className="w-6 h-6 object-contain"
            />
            <span className="text-bold-14 text-primary ">
              100% guarantee of pet identification
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5 max-800:hidden">
          <div className="flex items-center gap-2">
            <img src={shareIcon} alt="share" />
            <span className="text-bold-14 text-primary">Share :</span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a href="/" key={link.id}>
                <img
                  src={link.icon}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 ml-6 max-800:ml-0 max-800:mt-10">
        <div className="flex items-center gap-2 ">
          <Link to="/" className="text-medium-14 text-neutral60">
            Home
          </Link>
          <img
            src={arrowDownIcon}
            alt="arrow"
            className="transform -rotate-90"
          />
          <span className="text-medium-14 text-neutral60">Dog</span>
          <img
            src={arrowDownIcon}
            alt="arrow"
            className="transform -rotate-90"
          />
          <span className="text-medium-14 text-neutral60 text-nowrap">
            {pageData.size} Dog
          </span>
          <img
            src={arrowDownIcon}
            alt="arrow"
            className="transform -rotate-90"
          />
          <span className="text-medium-14 text-neutral60 max-w-[150px] text-truncate">
            {pageData.name}
          </span>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <span className="text-medium-14 text-neutral40">
            SKU#{pageData.sku}
          </span>
          <h2 className="text-bold-24 text-neutral100">{pageData.name}</h2>
          <h3 className="text-[20px] text-primary font-bold">
            {pageData.price} USD
          </h3>
        </div>
        <div className="flex items-center gap-4 max-850:flex-col max-850:items-start max-800:flex-row">
          <ButtonLarge>
            <span className="text-medium-14">Contact Us</span>
          </ButtonLarge>
          <ButtonLarge variant="outline" icon="l">
            <span className="text-medium-14  max-850:text-[13px]">
              Chat with Monito
            </span>
            <img src={chatIcon} alt="chat" className="w-5" />
          </ButtonLarge>
        </div>
        <div className="hidden max-800:flex w-full justify-between items-center mt-10 mb-4">
          <h3 className="text-bold-16 text-neutral100">Infromation</h3>
          <div className="flex items-center gap-3">
            <img src={shareIcon} alt="share" />
            <span className="text-bold-14 text-primary">Share</span>
          </div>
        </div>
        <div className="my-4">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="flex items-center justify-between w-full min-h-10 border-b py-3 border-neutral10"
            >
              <div className="flex-1">
                <h3 className="text-medium-14 text-neutral60">
                  {detail.title}
                </h3>
              </div>
              <div className="w-[45%]">
                <p className="text-medium-14 text-neutral60">:{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden max-800:flex items-center justify-between my-6 bg h-12 px-3 rounded-lg max-1100:flex-col max-1100:items-start max-1100:justify-center max-1100:gap-3 max-1100:h-20">
          <div className="flex items-center gap-2">
            <img
              src={dogdetIcon}
              alt="dogdet"
              className="w-6 h-6 object-contain"
            />
            <span className="text-bold-14 text-primary">
              100% health guarantee for pets
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={dogdet2Icon}
              alt="dogdet"
              className="w-6 h-6 object-contain"
            />
            <span className="text-bold-14 text-primary ">
              100% guarantee of pet identification
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
