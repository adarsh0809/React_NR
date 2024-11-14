import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOU_URL } from "../utility/url";
import { removeItem } from "../utility/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.item);
  //console.log(cartData);
  const dispatch = useDispatch();
  const handleItem = () => {
    dispatch(removeItem());
  };

  let sum = 0;
  for (let i =0; i<cartData.length; i++ ){
   
    
    sum += cartData[i].price;
    
  }
  sum = sum/100;
//  console.log(sum);
  

  return (
    <>
      <div>
        {cartData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center border-b gap-2 m-5 bg-gray-200 w-[800px] mx-auto "
            >
              <div className="p-4 w-8/12">
                <h1 className="font-semibold text-xl">{data.name}</h1>
                <h1 className="font-semibold"> ₹ {data.price / 100}</h1>
                <h1 className="text-gray-400"> ₹ {data.description}</h1>
              </div>
              <div className=" relative flex flex-col  justify-center items-center">
                <img
                  src={CLOU_URL + data.imageId}
                  className="w-[140px] p-3"
                ></img>
                <button
                  onClick={handleItem}
                  className="bg-black text-white rounded-xl text-sm p-1 w-[100px] absolute m-6 top-[90px]"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[800px] mx-auto h-10 flex justify-center items-center font-bold text-2xl text-[#F83002]">
        <h1>Total Amount to pay : ₹{sum}</h1>
        
      </div>
    </>
  );
};

export default Cart;
