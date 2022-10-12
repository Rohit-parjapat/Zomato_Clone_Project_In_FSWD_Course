import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

// components
import DiningCarousel from "./DiningCarousel";

const Dining = () => {
    return (
        <div className="mb-10">
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                Collections
            </h1>
            <div className="flex justify-between mt-4 mb-2 text-gray-500">
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p>
                <a href="#" className="z-10 text-zomato-500 flex items-center">All Collections in Gurugram <IoMdArrowDropright /></a>
            </div>
            <DiningCarousel />
        </div>
    );
};

export default Dining;
