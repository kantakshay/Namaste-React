import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resid } = useParams();
const resData = useRestaurantMenu(resid)

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
    <div className="mx-48 ">
      <div>
        <h4 className="font-medium text-2xl">{name}</h4>
        {areaName},{locality}
      </div>
      <p>&#9733;{avgRating}</p>
      <h3>Menu</h3>
      <div>
        {resMenuItemes.map((items) => (
          <li className="list-none my-6" key={items.card.info.id}>{items.card.info.name}</li>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
