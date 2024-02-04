import { IMAGE_URL } from "../utils/constant";
import React from "react";

function RestaurantCard(props) {
  const { resdata } = props;
  const { name, cuisines, areaName, cloudinaryImageId ,avgRating} = resdata.info;
  return (
    <div className="w-60 h-auto  m-4 p-2 border border-solid shadow-lg bg-blue-50 rounded-lg ">
      <img
        src={IMAGE_URL + cloudinaryImageId}
        alt="meghana"
        className="w-60 h-36 rounded-lg"
      />

      <h2 className="font-bold">{name.slice(0,20)}...</h2>
      <h4> {cuisines.join(", ").slice(0,25)}... </h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
}

export default RestaurantCard;
