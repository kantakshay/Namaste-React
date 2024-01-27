import React, { useEffect, useState } from "react";
import { apiMenuItemes } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);

  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(apiMenuItemes + resid);
    const jsonData = await data.json();
    setResData(jsonData.data);
    console.log("json", jsonData);
  };

  console.log("resData", resData);

  if (resData !== null) {
    var resMenuItemes =
      resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card
        .itemCards;
    console.log(resMenuItemes);
    var { name, areaName, locality, avgRating } =
      resData?.cards[0]?.card?.card?.info;
  }

  return resData === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h4>{name}</h4>
        {areaName},{locality}
      </div>
      <p>&#9733;{avgRating}</p>
      <h3>Menu</h3>
      <div>
        {resMenuItemes.map((items) => (
          <li key={items.card.info.id}>{items.card.info.name}</li>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;