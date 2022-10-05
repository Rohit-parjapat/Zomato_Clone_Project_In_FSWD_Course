import express from 'express';
import passport from 'passport';

import { OrderModel } from '../../database/allModels';

const Router = express.Router();

/**
 * Route   /:_id
 * Des     Get all orders details by user id
 * Params  _id
 * Access  Private
 * Method  GET
 */
Router.get('/', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const getOrders = await OrderModel.findOne({ user: user._id });

        if (!getOrders) {
            return res.status(404).json({ error: "No orders found with this user" });
        }

        return res.json({ orders: getOrders });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;