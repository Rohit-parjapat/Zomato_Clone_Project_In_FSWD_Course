import React from 'react';
import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForwordLine } from 'react-icons/ri';
import { BiBookmarkPlus } from 'react-icons/bi';

//Components

import Navbar from '../components/Navbar';
// import ImageGrid from '../components/Restaurant/ImageGrid';
// import InfoButton from '../components/Restaurant/InfoButton';
// import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
// import Tabs from '../components/Restaurant/Tabs';
// import CartContainer from '../components/Cart/CardtContainer';

const RestaurantLayout = (Component) => ({ ...props }) => {
    return (
        <>
            <Navbar />
            <Component {...props} />
            {/* <div className='conttainer mx-auto px-4 mt-8 lg:px-5 pb-20'>
                <ImageGrid images={ } />
                <RestaurantInfo name='' restaurantRating='' deliveryRating='' cuisine='' address='' />
                <div className='m-4 flex flex-wrap gap-3 mx-auto'>
                    <InfoButton isactive='true'>
                        <TiStarOutline />  Add Review
                    </InfoButton>
                    <InfoButton >
                        <RiDirectionLine />  Direction
                    </InfoButton>
                    <InfoButton >
                        <BiBookmarkPlus />  Bookmark
                    </InfoButton>
                    <InfoButton >
                        <RiShareForwordLine />  Share
                    </InfoButton>
                </div>
                <div className='my-10'>
                    <Tabs />
                </div>
               <Component {...props} />
            </div>
            <CartContainer /> */}
        </>
    )
}

export default RestaurantLayout;