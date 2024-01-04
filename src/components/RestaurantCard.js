import { IMAGE_URL } from "../utils/constant";
import React from "react";

function RestaurantCard(props) {
  const { resdata } = props;
  const { name, cuisines, areaName, cloudinaryImageId ,avgRating} = resdata.info;
  return (
    <div className="res-card">
      <img
        src={IMAGE_URL + cloudinaryImageId}
        alt="meghana"
        className="res-image"
      />

      <h2>{name}</h2>
      <h4> {cuisines.join(", ")} </h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
}

export default RestaurantCard;
