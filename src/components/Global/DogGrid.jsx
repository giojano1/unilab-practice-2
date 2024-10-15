import React from "react";

const DogGrid = ({ data, limit }) => {
  const limitedData = data.slice(0, limit);

  return (
    <>
      {limitedData.map((dog) => (
        <div
          key={dog.id}
          className="bg-white rounded-xl p-2 h-[378px] shadow max-1000:h-[317px]  "
        >
          <div>
            <img
              src={dog.img}
              alt="dog"
              className="w-full h-[264px] object-cover rounded-[10px] max-1000:h-[200px] max-750:h-[170px]"
            />
          </div>
          <div className="mt-3">
            <h2 className="text-bold-16 text-neutral100">{dog.name}</h2>
            <div className="flex items-center gap-1.5 my-2 max-750:flex-col max-750:items-start max-750:gap-0">
              <div>
                <span className="text-medium-12 text-neutral60">Gene: </span>
                <span className="text-bold-12 text-neutral60">
                  {dog.gender}
                </span>
              </div>
              <span>&#183;</span>
              <div>
                <span className="text-medium-12 text-neutral60">Age: </span>
                <span className="text-bold-12 text-neutral60">{dog.age}</span>
              </div>
            </div>
            <div>
              <span className="text-bold-14 text-neutral100 ">{dog.price}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DogGrid;
