import express from "express";
import passport from 'passport';
import { RestaurantModel } from "../../database/allModels";
import { validateRestaurantCity, validateSearchString } from "../../validation/restaurant.validation";

const Router = express.Router();

/**
 * Route   /
 * Des     Get all the restaurant details based on the city
 * Params   none
 * Access  Public
 * Method  Get
 */
Router.get('/', async (req, res) => {
    try {

        //Query = http://localhost:4000/retaurant/?city=ncr   
        const { city } = req.query;
        await validateRestaurantCity(req.query);
        const restaurants = await RestaurantModel.find({ city })

        if (restaurants.length === 0) {
            return res.json({ error: "No restaurant found in ths city." });
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route   /:_id
 * Des     Get individual restaurant details based on _id
 * Params   none
 * Access  Public
 * Method  Get
 */
Router.get('/:_id', async (req, res) => {
    try {

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if (!restaurant) {
            return res.status(400).json({ error: "No restaurant found." });
        }
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route   /search/:searchString
 * Des     Get restaurant details based on searchSrting
 * Params   searchSrting
 * Access  Public
 * Method  Get
 */
Router.get('/search/:searchString', async (req, res) => {
    try {
        const { searchString } = req.params;
        await validateSearchString(req.params);
        const restaurants = await RestaurantModel.find({ name: new RegExp(searchString, 'i') });

        if (!restaurants) {
            return res.status(404).json({ error: `No restaurant matched with ${searchString}.` });
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /new
 * Des       Add new restaurant
 * Params    data
 * Access    Private
 * Method    POST
 */
Router.post(
    "/new",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { restaurantDetails } = req.body;

            const addNewRestaurant = await RestaurantModel.create(restaurantDetails);

            return res.json({ Restaurant: addNewRestaurant });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);


export default Router;