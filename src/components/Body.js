import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572588&lng=77.273265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await fetchData.json();
    const jsonData =    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantData(jsonData);
    console.log(jsonData);
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
      <div className="search">
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={searchFunction}>Search</button>

        <button
          onClick={() => {
            const filteredData = restaurantData.filter(
              (filterValue) => filterValue.info.avgRating > 4
            );
            setfilteredRestaurant(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resdata={restaurant}  /></Link> 
        ))}
      </div>
    </div>
  );
}

export default Body;
