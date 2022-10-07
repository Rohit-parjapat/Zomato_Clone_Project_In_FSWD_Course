import express from "express";
import { UserModel } from "../../database/allModels";
import { ValidateSignin, ValidateSignup } from "../../validation/auth.validation";
import passport from 'passport';
const Router = express.Router();

/**
 * Route   /signup
 * Des     Create new account
 * Params  None
 * Access  Public
 * Method  POST
 */

Router.post('/signup', async (req, res) => {
    try {
        await ValidateSignup(req.body.credentials)
        await UserModel.findByEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route   /signin
 * Des     Login to account
 * Params  None
 * Access  Public
 * Method  POST
 */

Router.post('/signin', async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword((req.body.credentials));
        const token = user.generateJwtToken();
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route   /signin
 * Des     Login to account
 * Params  None
 * Access  Public
 * Method  POST
 */
Router.get('/google', passport.authenticate('google', {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}));

Router.get('/google/callback', passport.authenticate('google', { failureRedirect: "/" }),
    (req, res) => {
        // return res.status(200).json({
        //     token: req.session.passport.user.token,
        // });

        return res.redirect(`http://localhost:4000/google/${req.session.passport.user.token}`)
    });

export default Router;