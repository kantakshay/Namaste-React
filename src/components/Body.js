import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { data } from "../utils/Mockdata";
function Body() {
const [restaurantData,setRestaurantData] =useState(data)

  return (
    <div>
      <div className="search">Search</div>
      <button onClick={()=>{
        const filteredData = restaurantData.filter((filterValue)=> filterValue.info.avgRating>4)
        setRestaurantData(filteredData)
      }}>Top Restaurants</button>
      <div className="res-container">
        {restaurantData.map((restaurant) => (
          <RestaurantCard resdata={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
