import ResCard from './ResCard'
import MenuCard from './MenuCard'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestrauntant from '../utility/useRestrauntant'


const ResDetails = () => {
     const {resID} = useParams();
    //  console.log(resID);
    const rData = useRestrauntant(resID);  // creating custom hook for fetching data from the api and making the code more redable , resubale , and modular based on singkle modularity priciple i.e., one component shhould only contains single resposibility in our case it sould only display the data FOR fetching it must be done by automatically through custom hook
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