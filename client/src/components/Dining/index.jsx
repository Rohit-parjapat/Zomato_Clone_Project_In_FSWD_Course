import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";

// components
import DiningCarousel from "./DiningCarousel";

// redux
import { useSelector } from "react-redux";

const Dining = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxState && setRestaurantList(reduxState);
  }, [reduxState]);

  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Collections
      </h1>
      <DiningCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Dinning Restaurants in Gurugram
      </h1>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </div>
  );
};

export default Dining;
