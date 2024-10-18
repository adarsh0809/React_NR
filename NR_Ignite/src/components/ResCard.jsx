import React from 'react'

const ResCard = (props) => {
    const {avgRatingString, city, costForTwoMessage , cuisines} = props.adet;
    const {minDeliveryTime, maxDeliveryTime} = props.adet.sla;
    
  return (
    <div className=' p-4 border shadow-2xl rounded-3xl w-[750px] h-[130px]'>
         <p> {avgRatingString} - {costForTwoMessage}</p>
         <p>{cuisines[0]}, {cuisines[1]} </p>
         <h1 className='font-bold'>{city}</h1>
         <p className='font-bold' >Ariving time {minDeliveryTime}-{maxDeliveryTime} min</p>
    </div>
  )
}

export default ResCard