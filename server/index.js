import express from "express";
import dotenv from "dotenv";
import passport from 'passport';
import session from 'express-session';

//Private route authorization config
import privateRouteConfig from './config/route.config';
import googleAuthConfig from './config/google.config';

//Database connection
import ConnectDB from "./database/connection";

import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Image from "./api/images";


dotenv.config();

const zomato = express();

//adding additional passport configuration
privateRouteConfig(passport);
googleAuthConfig(passport);

zomato.use(express.json());
zomato.use(session({ secret: "ZomatoApp" }));
zomato.use(passport.initialize());
zomato.use(passport.session());

const PORT = 4000;

zomato.get('/', (req, res) => {
    res.json({
        Message: "Server is running"
    });
});

///auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/image", Image);



zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running !!! and connected to db...");
        })
        .catch((error) => {
            console.log("Server is running but database connection failed...");
            console.log(error);
        })
});