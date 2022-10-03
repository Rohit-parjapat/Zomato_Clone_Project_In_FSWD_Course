import express from "express";
import dotenv from "dotenv";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());

zomato.get('/', (res, req) => {
    res.json({
        message: "Server is running",
    })
});

const PORT = 4000;

zomato.listen(PORT, () => {
    // ConnectDB()
    //     .then(() => {
    //         console.log("Server is running !!!");
    //     })
    //     .catch(() => {
    //         console.log("Server is running but database connection failed...");
    //         console.log(error);
    //     })
});