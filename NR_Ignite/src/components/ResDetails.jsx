import React, { useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntant from "../utility/useRestrauntant";
import Accordian from "./Accordian";

const ResDetails = () => {
  const [showIndex, setshowIndex] = useState(0); // Initialize as null for no open accordion
  const { resID } = useParams();
  const rData = useRestrauntant(resID);

  if (rData.length === 0) {
    return <Shimmer />;
  }

  const { text } = rData?.data?.cards[0]?.card?.card;
  const Adet = rData?.data?.cards[2]?.card?.card.info;
  const cat = rData?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards;
  const categorie = cat.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold m-3">{text}</h1>
      <br />
      <ResCard adet={Adet} />
      {categorie.map((data, index) => (
        <Accordian
          key={index}
          data={data}
          showItems={index === showIndex} // Pass true if current index matches showIndex
          setshowIndex={() => setshowIndex(index === showIndex ? null : index)} // Toggle between index and null
          index={index}
        />
      ))}
    </div>
  );
};

export default ResDetails;
