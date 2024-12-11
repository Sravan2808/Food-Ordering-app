import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="res-logo rounded-lg "
        alt="res-logo  "
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time: {sla?.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestuarantCard => RestaurantCardPromoted

export const withSpecialOffers = (ResturantCard) => {
  return (props) => {
    const { header, subHeader } =
      props.resData?.info?.aggregatedDiscountInfoV3 || {};
    return (
      <div className="relative">
        {/* If offer data exists, display it */}
        {header && subHeader && (
          <span className="bg-black text-white absolute top-1 left-[60%] z-10 p-2 rounded-xl">
            {`${header} ${subHeader}`}
          </span>
        )}
        {/* Render the original RestaurantCard component with the offer label */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
