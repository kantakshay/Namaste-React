import React, { useEffect, useState } from "react";
import { apiMenuItemes } from "../utils/constant";


const useRestaurantMenu = (resid) =>{
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(apiMenuItemes + resid);
        const jsonData = await data.json();
        setResData(jsonData.data);
        console.log("json", jsonData);
      };

      return resData;
    
}

export default useRestaurantMenu