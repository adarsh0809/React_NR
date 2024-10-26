import { useEffect, useState } from "react"
import { RESU_URL } from "./url";


const useRestrauntant = (resID)=>{
    const [rData , setrData] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        const data = await fetch (RESU_URL + resID)
        const json = await data.json();
        setrData(json)
    }
    return rData;
}

export default useRestrauntant;