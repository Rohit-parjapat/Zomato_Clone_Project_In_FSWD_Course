import joi from 'joi';
import { Schema } from 'mongoose';

export const validateRestaurantCity = (restaurantObject) => {
    const Scehma = joi.object({
        city: joi.string().required(),
    });

    return Schema.valodateAsync(restaurantObject);
};

export const validateSearchString = (searchStringObject) => {
    const Scehma = joi.object({
        searchString: joi.string().required(),
    });

    return Schema.valodateAsync(searchStringObject);
};