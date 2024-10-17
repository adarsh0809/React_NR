import React from "react";

const p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const Card = () => {
//   return (
//     <div>
//       <div className=" bg-gray-200 border-b shadow-md p-4 w-[350px] h-[300px] flex flex-col  hover:cursor-pointer hover:-translate-x-2 hover:-translate-y-2 transform transition duration-300 ease-in-out">
//         <img className="w-full h-40 object-cover object-center rounded-md bg-gray-300"></img>

//         <button className=" text-white p-4 rounded-md m-2 my-[30px] bg-slate-100"></button>
//       </div>
//     </div>
//   );
// };


const Shimmer = () => {
  return (
    <>
      <div className=" flex items-center justify-center flex-col ">
        <div className="w-[700px] h-10 my-6 bg-gray-200  "></div>
        <div className="w-[800px] h-14 my-6 bg-gray-200  "></div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 my-[10px]">
        {p.map((cards, index) => {
          {
            return (
              <div>
                <div className=" bg-gray-200 border-b shadow-md p-4 w-[350px] h-[300px] flex flex-col  hover:cursor-pointer hover:-translate-x-2 hover:-translate-y-2 transform transition duration-300 ease-in-out">
                  <img className="w-full h-40 object-cover object-center rounded-md bg-gray-300"></img>

                  <button className=" text-white p-4 rounded-md m-2 my-[30px] bg-slate-100"></button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Shimmer;
