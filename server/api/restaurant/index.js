import express from "exprss";
import RestaurantModel from "../../database/allModels";

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
        const restaurants = await RestaurantModel.find({ city })
        return res.json({ restaurants });

        if (!restaurants.length === 0) {
            return res.json({ error: "No restaurant found in ths city." });
        }
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
Router.get('/search/:searchSrting', async (req, res) => {
    try {

        const { searchSrting } = req.params;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchSrting, option: "i" },
        });

        if (!restaurants) {
            return res.status(404).json({ error: `No restaurant matched with ${searchSrting}.` });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;