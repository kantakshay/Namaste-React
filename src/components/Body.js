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
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fmapi%2Fhomepage%2FgetCards%3Flat%3D12.9150177%26lng%3D77.6201171"
    );
    const json = await fetchData.json();
console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants  );
    setRestaurantData(
     json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants 
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
