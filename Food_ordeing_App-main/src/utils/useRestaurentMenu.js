import { RESTAURENT_MENU } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {
const RESTAURANT_DETAIL = Process.env.RESTAURANT_DETAIL
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{

        const data = await fetch(`${RESTAURANT_DETAIL}` + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json);

    }
    return resInfo;
}
export default useRestaurantMenu;