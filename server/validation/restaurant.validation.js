import joi from 'joi';
import { Schema } from 'mongoose';

export const validateRestaurantCity = (restaurantObject) => {
    const Schema = joi.object({
        city: joi.string().required(),
    });

    return Schema.validateAsync({ restaurantObject });
};

export const validateSearchString = (searchStringObject) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
    });

    return Schema.validateAsync({ searchStringObject });
};