import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {URL} from '../utils/constant'

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fetchData = await fetch( URL);
    const json = await fetchData.json();
    const jsonData =    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantData(jsonData);
    setfilteredRestaurant(jsonData);
  };

  const searchFunction = () => {
    const searchFilterData = restaurantData.filter((e) =>
      e.info.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setfilteredRestaurant(searchFilterData);
  };

  return  filteredRestaurant.length === 0? <Shimmer/> :  (
    <div>
      <div className="mx-36 my-6">
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="border border-solid border-gray-300   bg-slate-50 py-1 rounded-md shadow-md"
        />
        <button onClick={searchFunction} className="px-4 py-2 mx-1 bg-gray-200 rounded-lg font-semibold shadow-md">Search</button>

        <button
          onClick={() => {
            const filteredData = restaurantData.filter(
              (filterValue) => filterValue.info.avgRating > 4
            );
            setfilteredRestaurant(filteredData);
          }}
          className="px-4 py-2 mx-1 border border-solid border-gray-400 rounded-lg font-semibold shadow-md" 
        >
          Top Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resdata={restaurant}  /></Link> 
        ))}
      </div>
    </div>
  );
}

export default Body;
