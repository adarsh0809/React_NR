import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import MenuCard from './MenuCard'
import { RES_URL , RESU_URL } from '../utility'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'


const ResDetails = () => {
    const [rData , setrData] = useState([]);
     const {resID} = useParams();
    //  console.log(resID);
     
    useEffect (() => {
        FetchData();
    }, [])

    const FetchData = async()=>{
        try {
            const data = await fetch(RESU_URL+resID );
            
            
            const json = await data.json();
            setrData(json);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    if (rData.length === 0){
        return <Shimmer/>
    }

    const {text} = rData?.data?.cards[0]?.card?.card;
    const Adet = rData?.data?.cards[2]?.card?.card.info;
    
    
    const recdet = rData?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card?.itemCards;

    
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold m-3' >{text}</h1>
        <br/>
        <ResCard adet = {Adet}/>
        <MenuCard recdet = {recdet}/>
    </div>
  )
}

export default ResDetails