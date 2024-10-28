import React from "react";
import MenuCard from "./MenuCard";

const Accordian = ({ data, showItems, setshowIndex, index }) => {
  const handleClick = () => {
    // Toggle the current accordion: if it's already open, setshowIndex(null)
    if (showItems) {
      setshowIndex(null); // Close the accordion by setting index to null
    } else {
      setshowIndex(index); // Open the accordion by setting the current index
    }
  };

  return (
    <div className="border rounded-lg m-2 p-2 bg-gray-200">
      <div
        className="flex justify-between mx-auto w-[700px] font-bold cursor-pointer"
        onClick={handleClick}
      >
        <p>{data.card.card.title}</p>
        {showItems ? <p>Close</p> : <p>Open</p>}
      </div>
      {showItems && <MenuCard data={data} />}
    </div>
  );
};

export default Accordian;
