import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
    const [dining] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/collections/019acf0c53e2ebf0e8658e471a20a2ab_1665210805.jpg",
            title: "Eid-e-Milad Specials",
            places: "12 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/b90996d69bfe8d8c7e36d3a56893df74_1657000323.jpg",
            title: "Picturesque Cafes",
            places: "17 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/49a6f1f89106fa09c5c287ed6a7511af_1656936838.jpg",
            title: "Legendary Places",
            places: "9 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/84b4804b88ed17fd5d11a9e09931077d_1656933762.jpg",
            title: "Themed Dining",
            places: "10 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/1ef2df5d2d43a974efa2622b99673a47_1657170762.jpg",
            title: "Family Time",
            places: "11 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/c747e98d5da55c38cfe933720c03d5b4_1656995833.jpg",
            title: "Best Pubs & Bars",
            places: "4 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/e124906b266de1412b172dd7a72b49c4_1656936610.jpg",
            title: "Classic Biryanis",
            places: "7 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/44f8dc2e7c69b133d954d6fb7f749d6a_1659514966.jpg",
            title: "Trending This Week",
            places: "15 Places",
        },
    ]);

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };

    return (
        <div className="w-full">
            <Swiper {...slideConfig}>
                {dining.map((item, index) => (
                    <SwiperSlide key={index}>
                        <PictureCarouselCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiningCarousel;
