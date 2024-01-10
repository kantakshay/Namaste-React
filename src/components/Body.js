import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fetchData = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9150177%26lng%3D77.6201171%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTINGhttps://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fmapi%2Fhomepage%2FgetCards%3Flat%3D12.9150177%26lng%3D77.6201171"
    );
    const json = await fetchData.json();

    const jsonData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
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
          <RestaurantCard resdata={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
