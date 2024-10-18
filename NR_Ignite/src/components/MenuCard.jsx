import React from "react";
import { IMG_URL } from "../utility";

const Card = ({ det }) => {
  const { isVeg, name, price, imageId } = det?.card?.info;
//   console.log(det);
  

  return (
    <div className=" flex justify-between  w-[750px] h-[150px] border-b items-center">
      <div>
        <p>{isVeg ? "Veg" : "Non Veg"}</p>
        <p>{name}</p>
        <p>₹ {price / 100}</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          className="object-cover w-[120px] rounded-2xl"
          src={IMG_URL + imageId}
        ></img>
        <button className="font-bold text-green-500 border w-[100px] rounded-lg z-10 ">
          ADD
        </button>
      </div>
    </div>
  );
};

const MenuCard = ({ recdet }) => {
  return (
    <div className=" m-4 felx flex-col items-center justify-center">
      <h1>MENU</h1>
      <input
        placeholder="Search for dishes"
        className=" border  text-center shadow-2xl rounded-3xl w-[750px] h-[35px]"
      ></input>
      <div className="flex gap-3 my-3">
        <button className="rounded-3xl border px-3 text-green-600">
          Pure Veg
        </button>
        <button className="rounded-3xl border px-3">Bestseller</button>
      </div>
      <div className="w-[750px] bg-gray-500 h-[1px]"></div>
      <br />
      <h1>Recommended</h1>
      <div className="flex flex-col gap-3 border-b ">
        {recdet.map((det) => (
          <Card det={det} />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
