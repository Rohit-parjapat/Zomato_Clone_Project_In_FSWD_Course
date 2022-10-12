import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";

// components
import DeliveryCarousel from "./DeliveryCarousel";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "124ksjf435245jv34fg3",
            imageLocation: "https://b.zmtcdn.com/data/pictures/chains/1/91711/f3704598c336542166b781026fc5ad4b_o2_featured_v2.jpg",
            isPro: true,
            isOff: true,
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
        {
            _id: "sdffdsadadsfadfadsfadsf",
            imageLocation: "https://b.zmtcdn.com/data/pictures/chains/4/584/bdab27a41125cd45ddf814c7fad470b2_o2_featured_v2.jpg",
            isPro: true,
            isOff: true,
            name: "Master Koii's",
            restaurantReviewValue: "4.6",
            cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
            averageCost: "600",
        },
        {
            _id: "124ksjf435245jfdfv34fg3",
            imageLocation: "https://b.zmtcdn.com/data/pictures/4/90574/029efc78361161c5a1aa5395ba1ed1df_o2_featured_v2.jpg",
            isPro: true,
            isOff: true,
            name: "Hotel Shadab",
            restaurantReviewValue: "4.7",
            cuisine: [
                "North Indian", "Kebab", "Seafood", "Chinese", "Fast Food", "Biryani", "Desserts", "Beverages"
            ],
            averageCost: "150",
        },
        {
            _id: "124ksjf435245j4fdfv34fg3",
            imageLocation: "https://b.zmtcdn.com/data/pictures/chains/0/93970/ff2a033de7e1e643935b8899a1e2b42e_o2_featured_v2.jpg",
            isPro: true,
            isOff: true,
            name: "Grand Hotel",
            restaurantReviewValue: "3.7",
            cuisine: [
                "North Indian", "Chinese", "Mughlai", "Seafood",
            ],
            averageCost: "200",
        },
        {
            _id: "124ksjf435245j3fdfv34fg3",
            imageLocation: "https://b.zmtcdn.com/data/pictures/chains/8/90148/efddf4dcd9d31e4a3b2e93dc2d086cd0_o2_featured_v2.jpg",
            isPro: true,
            isOff: true,
            name: "Crystal Restaurant and Bar",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Chinese",
                "Mughlai",
                "North Indian",
            ],
            averageCost: "320",
        },
        {
            _id: "124ksjf435245j2fdfv34fg3",
            imageLocation: "https://b.zmtcdn.com/data/pictures/chains/0/92020/3088315ab85025468fb789f2871bf131_o2_featured_v2.jpg",
            isPro: true,
            isOff: true,
            name: "Shah Ghouse Hotel & Restaurant",
            restaurantReviewValue: "3.7",
            cuisine: [
                "North Indian", "Chinese", "Mughlai", "Biryani", "Kebab", "Arabian", "Lebanese", "Mandi Charminar", "Hyderabad"
            ],
            averageCost: "125",
        },
    ]);

    return (
        <>
            <DeliveryCarousel />
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in NCR (Delhi)
            </h1>
            <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;
