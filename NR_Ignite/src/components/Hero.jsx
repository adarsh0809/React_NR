import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { GRID_URL, CLOU_URL } from "../utility/url";
import { Link } from "react-router-dom";

const ResturantCard = ({ item }) => {
  const { cloudinaryImageId, name, avgRating, costForTwo, id } = item.info;

  return (
    <>
      <div
        key={id}
        className="  border-b shadow-md p-4 w-[350px] h-[300px] flex flex-col  hover:cursor-pointer hover:-translate-x-2 hover:-translate-y-2 transform transition duration-300 ease-in-out"
      >
        <img
          className="w-full h-40 object-cover object-center rounded-3xl"
          src={CLOU_URL + cloudinaryImageId}
        ></img>
        <h1 className="font-bold text-[#F83002]">{name}</h1>
        <div className="flex gap-5 text-violet-900 text-md">
          <a>{avgRating} Star</a>
          <a>{item.info.sla.deliveryTime} mins</a>
          <a>Starting {costForTwo} </a>
        </div>
        <button className="bg-[#eb5938]  text-white p-2 rounded-md m-2">
          Order Food
        </button>
      </div>
    </>
  );
};
const Hero = () => {
  const [restData, setrestData] = useState([]);
  const [SData, setSData] = useState([]);

  const [clicked, setClicked] = useState(false);

  // for search input we have to create a state variable also , as we need to update the UI , and only way to do is via state variabe beacause when the state varibales changes React rerenders the component with the update result.
  const [searchKey, setsearchKey] = useState("");

  const handleButton = () => {
    setClicked(true);
    const Newdata = SData.filter((res) => res.info.avgRating >= 4.5);
    setSData(Newdata);
  };
  const handleBut = () => {
    console.log("clicked");
    setClicked(false);
    setSData(restData);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const deta = await fetch(GRID_URL);
    const res = await deta.json();
    // console.log(res);
    const k =
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setrestData(k);
    setSData(k);
     console.log(k);
  };

  return (
    <>
      {SData.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="flex gap-2 items-center justify-center ">
            <h1 className="font-bold text-2xl">
              Filter Resturant based on popularity
            </h1>
            {clicked ? (
              <button
                onClick={handleBut}
                className="bg-[#eb5938]  text-white p-2 rounded text-xl"
              >
                Restart
              </button>
            ) : (
              <button
                onClick={handleButton}
                className="bg-[#eb5938]  text-white p-2 rounded text-xl"
              >
                Filter Now
              </button>
            )}
          </div>

          <div className="flex flex-col  items-center justify-center ">
            <h1 className="font-bold text-[#F83002] text-2xl py-7">
              Find your Favourite Resturant NOW!!!
            </h1>
            <div className="flex">
              <input
                className="w-[500px] h-[30px]  border-[3px] rounded-lg "
                value={searchKey}
                onChange={(e) => setsearchKey(e.target.value)}
              ></input>
              <button
                onClick={() => {
                  const searchData = restData.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchKey.toLowerCase())
                  );
                  setSData(searchData);
                }}
                className="rounded-lg bg-[#F83002] px-3 text-white text-xl"
              >
                Search
              </button>
            </div>
          </div>

          <div className=" gap-[40px] flex flex-wrap  p-6  items-center justify-center ">
            {SData.map((item) => (
              <Link to={`/resturant/${item.info.id}`} key={item.info.id}>
                <ResturantCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
