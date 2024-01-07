import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchData,setSearchData] = useState("")

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const fetchData = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0035068%26lng%3D77.5890953%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await fetchData.json();

    setRestaurantData(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
console.log(restaurantData)
  return (
    <div>
      <div className="search">
        <input type="text" value={searchData} onChange={(e)=> setSearchData(e.target.value)} />
        <button onClick={()=>{
          const searchFilterData = restaurantData.filter((value)=> value.info.name.toLowerCase().includes(searchData.toLowerCase))
          console.log(searchFilterData)
        }}>Search</button>
      
        <button
        onClick={() => {
          const filteredData = restaurantData.filter(
            (filterValue) => filterValue.info.avgRating > 4
          );
          setRestaurantData(filteredData);
        }}
      >
        Top Restaurants
      </button>
      </div>
    
      <div className="res-container">
        {restaurantData.map((restaurant) => (
          <RestaurantCard resdata={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
