import React from "react";
import { IMG_URL } from "../utility/url";
import { useDispatch } from "react-redux";
import { addition } from "../utility/cartSlice";

const Card = ({ det }) => {
  const { isVeg, name, price, imageId  , description} = det?.card?.info;
  // console.log(det?.card?.info);
  
  const dispatch = useDispatch();
  
  const HandleAddItems =()=>{
    // dispatch an action 
    dispatch(addition(det.card.info));

  }

  return (

     
    <div className=" flex justify-between  p-4 w-[700px] h-[170px] border-b-2 border-gray-300 items-center">
      <div>
        {isVeg ? <p className="text-green-700 font-bold">Veg</p> : <p className="text-red-700 font-bold">Non Veg</p>}
        <p className="font-bold">{name}</p>
        <p>₹ {price / 100}</p>
        <p className="text-xs text-slate-900">{description}</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          className="object-cover w-[130px] rounded-2xl"
          src={IMG_URL + imageId}
        ></img> 
        <button onClick={HandleAddItems} className="font-bold text-green-500 border w-[100px] rounded-lg z-10 ">
          ADD
        </button>
      </div>
    </div>
  );
};

const MenuCard = ({ data }) => {
  const recdet = data?.card?.card?.itemCards;
  return (
    <div className=" m-4 felx flex-col items-center justify-center">
      <div className="flex flex-col gap-3 border-b ">
        {recdet.map((det , index) => (
          <Card det={det} key = {index} />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
